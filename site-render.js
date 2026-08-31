/* ============================================================
   أبو حيدر — site-render.js
   يقرأ المحتوى من Supabase (عند تفعيله) أو من site-content.js
   (بيانات مدمجة كاحتياط) ويطبّق كل شيء على الصفحة:
   النصوص (data-key) + المنيو + المميزات + المعرض + الألوان/الهوية.
   يعمل قبل storeArabic()/setLang() في index.html.
   ============================================================ */

/* ---------- إعدادات Supabase (تُملأ من لوحة التحكم عند التفعيل) ---------- */
var SUPABASE_URL = "https://qhvmyiyxkwaziwnerwzy.supabase.co";
var SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFodm15aXl4a3dheml3bmVyd3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwOTE2MTQsImV4cCI6MjEwMzY2NzYxNH0.R3yatbTc7DqaYS1WPMI18Gf04FwqKyc6Cc7ZiZDSuik";

/* ---------- قراءة المحتوى: من Supabase أو من البيانات المدمجة ---------- */
async function loadSiteContent(){
  if(SUPABASE_URL && SUPABASE_ANON){
    try{
      return await loadFromSupabase();
    }catch(e){ /* fall back to embedded */ }
  }
  return (window.siteContent || null);
}

/* تحويل قاعدة البيانات إلى بنية siteContent (نفس الشكل) عبر عدة جداول */
async function loadFromSupabase(){
  var H = { apikey: SUPABASE_ANON, Authorization: "Bearer " + SUPABASE_ANON, "Accept":"application/json" };
  async function get(table){
    var r = await fetch(SUPABASE_URL + "/rest/v1/" + table + "?select=*", { headers:H });
    if(!r.ok) throw new Error(table + " " + r.status);
    return r.json();
  }
  var textRows = await get("site_text");
  var menuRows = await get("menu_items");
  var galRows  = await get("gallery_items");
  var sigRows  = await get("signature_cards");
  var themeRows= await get("theme");

  var base = JSON.parse(JSON.stringify(window.siteContent || {}));

  /* 1) نصوص ثابتة */
  (textRows||[]).forEach(function(r){
    if(!r || !r.key) return;
    var parts = r.key.split(".");
    var node = base;
    for(var i=0;i<parts.length-1;i++){
      var p = parts[i];
      if(/^\d+$/.test(p)) p = parseInt(p,10);
      if(node==null) return;
      var nxt = node[p];
      if(nxt==null){ nxt = (/^\d+$/.test(parts[i+1])) ? [] : {}; node[p]=nxt; }
      node = nxt;
    }
    var last = parts[parts.length-1];
    if(/^\d+$/.test(last)) last = parseInt(last,10);
    if(node!=null && node[last]==null) node[last] = {};
    if(node!=null && typeof node[last]==="object"){
      if(r.ar!=null) node[last].ar = r.ar;
      if(r.en!=null) node[last].en = r.en;
    } else if(node!=null){
      if(r.ar!=null) node[last] = r.ar;
    }
  });

  /* 2) المنيو */
  if(base.menu && Array.isArray(menuRows)){
    base.menu.categories = {};  // إعادة بناء حسب الفئات
    (menuRows||[]).forEach(function(it){
      if(!it || !it.category) return;
      if(!base.menu.categories[it.category]) base.menu.categories[it.category]=[];
      base.menu.categories[it.category].push({
        name:  { ar: it.name_ar,  en: it.name_en },
        desc:  { ar: it.desc_ar,  en: it.desc_en },
        price_ar: it.price_ar, price_en: it.price_en,
        tag:   it.tag_ar ? { ar: it.tag_ar, en: it.tag_en||it.tag_ar } : null,
        img:   it.img, alt_ar: it.alt_ar, alt_en: it.alt_en
      });
    });
    // ترتيب حسب sort
    Object.keys(base.menu.categories).forEach(function(cat){
      base.menu.categories[cat] = base.menu.categories[cat]
        .map(function(d,i){ d._sort=menuRows[i]?menuRows[i].sort:i; return d; })
        .sort(function(a,b){ return (a._sort||0)-(b._sort||0); });
    });
  }

  /* 3) المعرض */
  if(base.gallery && Array.isArray(galRows)){
    base.gallery.items = (galRows||[]).slice().sort(function(a,b){ return (a.sort||0)-(b.sort||0); }).map(function(it){
      return { img:it.img, alt_ar:it.alt_ar, alt_en:it.alt_en, caption:{ ar:it.caption_ar, en:it.caption_en } };
    });
  }

  /* 4) المميزات */
  if(base.signatures && Array.isArray(sigRows)){
    base.signatures.cards = (sigRows||[]).slice().sort(function(a,b){ return (a.sort||0)-(b.sort||0); }).map(function(it){
      return { front:{ ar:it.front_ar, en:it.front_en }, back:{ ar:it.back_ar, en:it.back_en } };
    });
  }

  /* 5) الألوان */
  if(base.theme && Array.isArray(themeRows)){
    (themeRows||[]).forEach(function(t){ if(!t) return; base.theme[t.key] = t.value; });
  }
  return base;
}

/* ---------- أدوات مساعدة ---------- */
/* إعادة تسمية مسارات الأسماء لتطابق بنية siteContent:
   hero.statN.X     -> hero.stats[N].X
   story.kvN        -> story.kv[N]
   story.kvN.X      -> story.kv[N].X
   menu.tab.<id>    -> menu.tabs[{id}]
   nav.N            -> nav[N]
   hero.badge.<x>   -> {ar: badge[x_ar], en: badge[x_en]}
   menu.image_title -> menu.menu_image_title
*/
function _g(obj, path){
  var parts = path.split(".");
  // 1) كروت المميزات / خانات القصة: statN / kvN
  for(var pass=0; pass<2; pass++){
    var np=[];
    for(var i=0;i<parts.length;i++){
      var p=parts[i];
      if(/^stat(\d+)$/.test(p)){ if(np[np.length-1]!=="stats") np.push("stats"); np.push(parseInt(p.match(/^stat(\d+)$/)[1],10)); }
      else if(/^kv(\d+)$/.test(p)){ if(np[np.length-1]!=="kv") np.push("kv"); np.push(parseInt(p.match(/^kv(\d+)$/)[1],10)); }
      else np.push(p);
    }
    parts=np;
  }
  // 2) menu.image_title -> menu.menu_image_title
  if(path==="menu.image_title"){
    var mm=_g(obj,"menu.menu_image_title");
    return mm;
  }
  // 3) hero.badge.X -> {ar: X_ar, en: X_en}
  if(/^hero\.badge\.([a-z_]+)$/.test(path)){
    var kk=path.match(/^hero\.badge\.([a-z_]+)$/)[1];
    var bd=_g(obj,"hero.badge");
    if(bd) return { ar:bd[kk+"_ar"], en:bd[kk+"_en"] };
  }
  // 4) menu.tab.<id>
  if(/^menu\.tab\.([a-z]+)$/.test(path)){
    var id=path.match(/^menu\.tab\.([a-z]+)$/)[1];
    var mb=_g(obj,"menu.tabs");
    if(Array.isArray(mb)){ var hit=mb.filter(function(t){return t.id===id;})[0]; if(hit) return hit; }
  }
  // مسار عادي
  var node=obj;
  for(var j=0;j<parts.length;j++){
    var q=parts[j];
    if(/^\d+$/.test(q)) q=parseInt(q,10);
    if(node==null) return undefined;
    node=node[q];
  }
  return node;
}

/* إرجاع {ar,en} لأي قيمة: نص أو كائن {ar,en} */
function _pair(v){
  if(v==null) return {ar:"",en:""};
  if(typeof v==="object") return { ar:(v.ar!=null?v.ar:""), en:(v.en!=null?v.en:(v.ar!=null?v.ar:"")) };
  return { ar:String(v), en:String(v) };
}

function _txt(v){ return _pair(v).ar; }

/* ---------- 1) النصوص: تعبئة عناصر data-key ---------- */
function applyKeys(C){
  document.querySelectorAll("[data-key]").forEach(function(el){
    var key = el.getAttribute("data-key");
    var val = C && _g(C, key);
    if(val==null) return;
    // تخطّ الكائنات البنيوية (مثل حاويات kv/stat) — تُملأ مكوناتها الفرعية فقط
    if(typeof val==="object" && !Array.isArray(val) && val.ar==null && val.en==null) return;
    var pair = _pair(val);
    if(key==="brand"){
      // البراند: نص + <small> فرعي — نبنيه من brand_name + brand_sub
      var b = _txt(_g(C,"brand_name"));
      var bs = _txt(_g(C,"brand_sub"));
      if(b||bs){
        el.innerHTML = (b||"") + (bs?("<small>"+bs+"</small>"):"");
        var pEn = _pair(_g(C,"brand_name")).en;
        var bsEn = _pair(_g(C,"brand_sub")).en;
        el.setAttribute("data-en", (pEn||"") + (bsEn?("<small>"+bsEn+"</small>"):""));
      }
      return;
    }
    // العناصر العادية
    var enOnly = key==="contact.phone";
    if(!enOnly && (pair.ar||pair.en)) el.innerHTML = pair.ar;
    if(pair.en!=null) el.setAttribute("data-en", pair.en);
  });
}

/* ---------- 2) تفاصيل صفحة (title/description/اللوجو) ---------- */
function applyPageMeta(C){
  var m = C && C.meta;
  if(!m) return;
  if(document.querySelector("title")){
    document.querySelector("title").textContent = m.title_ar || document.title;
    if(m.title_en) document.querySelector("title").setAttribute("data-en", m.title_en);
  }
  var desc = document.querySelector('meta[name="description"]');
  if(desc){ desc.setAttribute("content", m.desc_ar||""); desc.setAttribute("data-en", m.desc_en||""); }
  var logo = document.querySelector(".brand-logo img");
  if(logo){
    logo.setAttribute("src", m.logo||logo.getAttribute("src"));
    logo.setAttribute("alt", m.logo_alt_ar||logo.getAttribute("alt"));
    if(m.logo_alt_en) logo.setAttribute("data-alt-en", m.logo_alt_en);
  }
  // زر اللغة و الواجهة
  document.documentElement.lang = "ar";
}

/* ---------- 3) مميزاتنا (كروت الفليب) ---------- */
function applySignatures(C){
  var s = C && C.signatures; if(!s) return;
  var mount = document.querySelector('[data-render="signatures"]');
  if(!mount || !s.cards) return;
  var hints = {
    front: _pair(s.hint_front),
    back:  _pair(s.hint_back)
  };
  mount.innerHTML = "";
  s.cards.forEach(function(card, i){
    var fr = _pair(card.front);
    var bk = _pair(card.back);
    var el = document.createElement("div");
    el.className = "sig";
    el.setAttribute("tabindex","0");
    el.setAttribute("role","button");
    el.setAttribute("aria-expanded","false");
    el.innerHTML =
      '<div class="sig-inner">' +
        '<div class="sig-face">' +
          '<h4 data-ar="'+(fr.ar||"").replace(/"/g,"&quot;")+'" data-en="'+(fr.en||"").replace(/"/g,"&quot;")+'">'+ (fr.ar||"") +'</h4>' +
          '<span class="sig-hint" data-ar="'+(hints.front.ar||"").replace(/"/g,"&quot;")+'" data-en="'+(hints.front.en||"").replace(/"/g,"&quot;")+'">'+ (hints.front.ar||"") +'</span>' +
        '</div>' +
        '<div class="sig-face sig-back">' +
          '<p data-ar="'+(bk.ar||"").replace(/"/g,"&quot;")+'" data-en="'+(bk.en||"").replace(/"/g,"&quot;")+'">'+ (bk.ar||"") +'</p>' +
          '<span class="sig-hint" data-ar="'+(hints.back.ar||"").replace(/"/g,"&quot;")+'" data-en="'+(hints.back.en||"").replace(/"/g,"&quot;")+'">'+ (hints.back.ar||"") +'</span>' +
        '</div>' +
      '</div>';
    mount.appendChild(el);
  });
}

/* ---------- 4) المنيو: التبويبات + اللوحات ---------- */
function applyMenu(C){
  var m = C && C.menu; if(!m) return;
  var panelsMount = document.querySelector('[data-render="menu"]');
  // التبويبات
  var tabsEl = document.querySelector(".tabs");
  if(tabsEl && m.tabs){
    tabsEl.innerHTML = "";
    m.tabs.forEach(function(t, i){
      var b = document.createElement("button");
      b.className = "tab" + (i===0?" on":"");
      b.setAttribute("type","button");
      b.setAttribute("data-tab", t.id);
      var pr = _pair(t);
      b.setAttribute("data-key", "menu.tab."+t.id);
      b.setAttribute("data-en", pr.en||"");
      b.textContent = pr.ar||"";
      tabsEl.appendChild(b);
    });
  }
  // اللوحات
  if(panelsMount && m.categories){
    panelsMount.innerHTML = "";
    var cats = m.categories;
    Object.keys(cats).forEach(function(catId, ci){
      if(m.tabs && !m.tabs.some(function(t){return t.id===catId;})) return;
      var panel = document.createElement("div");
      panel.className = "panel menu-grid";
      panel.setAttribute("data-panel", catId);
      panel.style.display = (ci===0) ? "grid" : "none";
      (cats[catId]||[]).forEach(function(d){
        var name=_pair(d.name), desc=_pair(d.desc), tag=_pair(d.tag);
        var card=document.createElement("article");
        card.className="dish reveal";
        var imgHtml = '<div class="dish-img"><img src="'+d.img+'" alt="'+(d.alt_ar||"").replace(/"/g,"&quot;")+'"'+(d.alt_en?(' data-alt-en="'+d.alt_en.replace(/"/g,"&quot;")+'"'):'')+' loading="lazy">'+
          (d.tag?('<span class="dish-tag" data-ar="'+(tag.ar||"").replace(/"/g,"&quot;")+'" data-en="'+(tag.en||"").replace(/"/g,"&quot;")+'">'+ (tag.ar||"") +'</span>'):'') +
          '</div>';
        var body =
          '<div class="dish-body">' +
            '<div class="dish-head">' +
              '<h4 data-ar="'+(name.ar||"").replace(/"/g,"&quot;")+'" data-en="'+(name.en||"").replace(/"/g,"&quot;")+'">'+ (name.ar||"") +'</h4>' +
              '<span class="dish-price" data-currency data-ar="'+(d.price_ar||"").replace(/"/g,"&quot;")+'" data-en="'+(d.price_en||"").replace(/"/g,"&quot;")+'">'+ (d.price_ar||"") +'</span>' +
            '</div>' +
            '<p data-ar="'+(desc.ar||"").replace(/"/g,"&quot;")+'" data-en="'+(desc.en||"").replace(/"/g,"&quot;")+'">'+ (desc.ar||"") +'</p>' +
          '</div>';
        card.innerHTML = imgHtml + body;
        panel.appendChild(card);
      });
      panelsMount.appendChild(panel);
    });
  }
}

/* ---------- 5) المعرض ---------- */
function applyGallery(C){
  var g = C && C.gallery; if(!g) return;
  var mount = document.querySelector('[data-render="gallery"]');
  if(!mount || !g.items) return;
  mount.innerHTML = "";
  g.items.forEach(function(it){
    var cap = _pair(it.caption);
    var fig = document.createElement("figure");
    fig.className="gal reveal";
    fig.innerHTML =
      '<img src="'+it.img+'" alt="'+(it.alt_ar||"").replace(/"/g,"&quot;")+'"'+(it.alt_en?(' data-alt-en="'+it.alt_en.replace(/"/g,"&quot;")+'"'):'')+' loading="lazy">' +
      '<figcaption data-ar="'+(cap.ar||"").replace(/"/g,"&quot;")+'" data-en="'+(cap.en||"").replace(/"/g,"&quot;")+'">'+ (cap.ar||"") +'</figcaption>';
    mount.appendChild(fig);
  });
}

/* ---------- 6) تطبيق الألوان (الهوية) ---------- */
function applyTheme(C){
  var th = C && C.theme; if(!th) return;
  var root = document.documentElement;
  for(var k in th){
    if(k.indexOf("--")===0) root.style.setProperty(k, th[k]);
  }
}

/* ---------- نقاط الربط الديناميكية (يحتاج تنفيذ بعد إعادة البناء) ---------- */
function bindDynamic(){
  // كروت الفليب
  document.querySelectorAll(".sig").forEach(function(card){
    var setOpen=function(open){ card.classList.toggle("flipped",open); card.setAttribute("aria-expanded",String(open)); };
    card.addEventListener("click",function(){
      var open=card.classList.contains("flipped");
      if(open){ setOpen(false); }
      else{
        document.querySelectorAll(".sig").forEach(function(c){ c.classList.remove("flipped"); c.setAttribute("aria-expanded","false"); });
        setOpen(true);
      }
    });
    card.addEventListener("keydown",function(e){
      if(e.key==="Enter"||e.key===" "){ e.preventDefault(); card.click(); }
    });
  });
  // التبويبات
  var tabs=document.querySelectorAll(".tab"), panels=document.querySelectorAll("[data-panel]");
  tabs.forEach(function(tab){ tab.addEventListener("click",function(){
    tabs.forEach(function(t){ t.classList.remove("on"); });
    tab.classList.add("on");
    var name=tab.getAttribute("data-tab");
    panels.forEach(function(p){ p.style.display = (p.getAttribute("data-panel")===name)?"grid":"none"; });
  });});
  // إعادة مراقبة reveal للعناصر الجديدة
  var obs=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("visible"); obs.unobserve(e.target); } });
  },{threshold:.12});
  document.querySelectorAll(".reveal:not(.visible)").forEach(function(el){ obs.observe(el); });

  // إعادة ربط معرض الصور (lightbox)
  var lb=document.getElementById("lightbox"), lbImg=document.getElementById("lbImg"), lbClose=document.getElementById("lbClose");
  function closeLb(){ if(lb) lb.classList.remove("open"); document.body.style.overflow=""; }
  document.querySelectorAll(".gal").forEach(function(g){
    g.addEventListener("click",function(){
      var img=g.querySelector("img");
      if(!lb||!lbImg) return;
      lbImg.src=img.src.replace("w=600","w=1400");
      lbImg.alt=img.alt;
      lb.classList.add("open");
      if(lbClose) lbClose.focus();
      document.body.style.overflow="hidden";
    });
  });
  if(lb && lbClose){
    lbClose.addEventListener("click",closeLb);
    lb.addEventListener("click",function(e){ if(e.target===lb) closeLb(); });
  }
}

/* ---------- المنفّذ الرئيسي ---------- */
function applySiteContent(C){
  if(!C) return;
  applyTheme(C);
  applyPageMeta(C);
  applyKeys(C);
  applySignatures(C);
  applyMenu(C);
  applyGallery(C);
}

/* ---------- التهيئة: تحميل غير متزامن ثم تطبيق، قبل init اللغة ---------- */
if(window.siteContent){
  // تطبيق فوري من البيانات المدمجة ثم محاولة تحديث من Supabase عند توفرها
  applySiteContent(window.siteContent);
}
loadSiteContent().then(function(content){
  if(content && content!==window.siteContent){
    document.querySelectorAll("[data-key]").forEach(function(el){ el.removeAttribute("data-en"); });
    applySiteContent(content);
    bindDynamic();
    storeArabic();
    applyFallback(localStorage.getItem("ah-lang") || "ar");
    setLang(localStorage.getItem("ah-lang") || "ar");
  }
});
