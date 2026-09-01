/* ============================================================
   أبو حيدر — site-content.js
   ملف البيانات الوحيد الذي يحتوي على كل محتوى الموقع.
   يعدّله المالك من خلال لوحة التحكم (admin.html) فقط
   ولا يحتاج المساس ببنية الصفحة أو التنسيق.
   النصوص: { ar, en } — ar عربي (افتراضي)، en إنجليزي.
   ============================================================ */
window.siteContent = {

  /* ---------- بيانات عامة (Meta) ---------- */
  meta: {
    title_ar: "أبو حيدر — أشهر شاورما في مصر منذ 1968",
    title_en: "Abou Haidar — The most famous shawarma in Egypt since 1968",
    desc_ar: "مطعم أبو حيدر — أشهر شاورما في مصر، تأسس عام 1968 في روكسي، مصر الجديدة. شاورما على الفحم بالخلطة السرية وعصير المانجو الشهير.",
    desc_en: "Abou Haidar — the most famous shawarma in Egypt, founded in 1968 in Roxy, Heliopolis. Charcoal shawarma with a secret recipe and the famous mango juice.",
    og_title_ar: "أبو حيدر — أشهر شاورما في مصر",
    og_title_en: "Abou Haidar — The most famous shawarma in Egypt",
    og_desc_ar: "منذ 1968، الخلطة السرية والطعم الأصيل في روكسي، مصر الجديدة.",
    og_desc_en: "Since 1968, the secret recipe and authentic taste in Roxy, Heliopolis.",
    logo: "img/logo.png",
    logo_alt_ar: "شعار أبو حيدر",
    logo_alt_en: "Abou Haidar logo"
  },

  /* ---------- ألوان الهوية (البراند) — يمكن تعديلها عبر منتقي الألوان ---------- */
  theme: {
    "--primary":    "#7C2D12",
    "--primary-dark": "#5b1f0a",
    "--primary-deep": "#3e1506",
    "--secondary":  "#B91C1C",
    "--accent":     "#A16207",
    "--accent-light": "#D97706",
    "--gold":       "#C9A227",
    "--bg":         "#FDF6EC",
    "--bg-alt":     "#F7EDDC",
    "--card":       "#FFFFFF",
    "--ink":        "#3E1506",
    "--ink-soft":   "#7A5C47",
    "--muted":      "#9C8571",
    "--border":     "#EDD9B8",
    "--smoke":      "#F1E3CC"
  },

  /* ---------- التنقل (Nav) ---------- */
  nav: [
    { href: "#home",    ar: "الرئيسية",     en: "Home" },
    { href: "#story",   ar: "قصتنا",        en: "Our Story" },
    { href: "#menu",    ar: "المنيو",        en: "Menu" },
    { href: "#gallery", ar: "المعرض",        en: "Gallery" },
    { href: "#contact", ar: "تواصل وحجز",    en: "Contact & Booking" }
  ],
  brand_name_ar: "أبو حيدر",
  brand_name_en: "Abou Haidar",
  brand_sub_ar: "شاورما · منذ 1968",
  brand_sub_en: "Shawarma · Since 1968",

  /* ---------- القسم الأول (Hero) ---------- */
  hero: {
    eyebrow: { ar: "أشهر شاورما في مصر · منذ 1968", en: "The most famous shawarma in Egypt · Since 1968" },
    h1_1: { ar: "الخلطة السرية و", en: "The secret recipe &" },
    h1_2: { ar: "الطعم الأصيل", en: "the authentic taste" },
    h1_3: { ar: "من قلب روكسي", en: "from the heart of Roxy" },
    lead: { ar: "منذ 1968 ونحن نقدم أشهر شاورما في مصر — لحم مشوي على الفحم بخلطة سرية متوارثة، تُقدَّم في عيش كيزر ساخن كأنها لأول مرة في كل مرة.", en: "Since 1968 we've served the most famous shawarma in Egypt — charcoal-grilled meat with an inherited secret recipe, served in a hot Kaiser roll as if it were the first time, every time." },
    cta_menu: { ar: "شوف المنيو", en: "View the menu" },
    cta_contact: { ar: "احجز أو تواصل", en: "Book or contact" },
    scroll: { ar: "انزل للمزيد", en: "Scroll for more" },
    image: "img/hero-shawarma.jpg",
    image_alt_ar: "شاورما على الفحم",
    image_alt_en: "Charcoal shawarma",
    frame_note: { ar: "على الفحم الرأسي", en: "Vertical charcoal grill" },
    cta_now: { ar: "تواصل الآن", en: "Contact now" },
    cta_now_href: "#contact",
    hours: { ar: "مفتوح يوميًا · 11ص – 2ص", en: "Open daily · 11am – 2am" },
    street: { ar: "روكسي، مصر الجديدة، القاهرة", en: "Roxy, Heliopolis, Cairo" },
    seal: { ar: "منذ 1968", en: "1968" },
    seal_label: { ar: "تأسس", en: "Est. Since" },
    stats: [
      { value_ar: "1968",   value_en: "1968",    label: { ar: "سنة التأسيس", en: "Founded" } },
      { value_ar: "+26 ألف", value_en: "+26K",   label: { ar: "تقييم على جوجل", en: "Google reviews" } },
      { value_ar: "فرع واحد", value_en: "One branch", label: { ar: "بالجودة نفسها", en: "Same quality" } }
    ],
    badge: { year_ar: "1968", year_en: "1968", since_ar: "منذ", since_en: "Since" }
  },

  /* ---------- القصة (Story) ---------- */
  story: {
    tag: { ar: "قصتنا", en: "Our Story" },
    title_1: { ar: "حكاية بدأت ", en: "A story that began " },
    title_2: { ar: "من 1968", en: "in 1968" },
    p1: { ar: "بدأت الحكاية في منطقة روكسي بمصر الجديدة على يد <b>\"محمد رباح شريف\"</b> — الشهير بأبو حيدر — الذي جاء بأصوله الشامية وقرّر أن يقدّم للقاهرة شيئًا مختلفًا تمامًا عن أي شيء تذوّقته من قبل.", en: "The story began in Roxy, Heliopolis, led by <b>\"Mohammed Rabah Sharif\"</b> — known as Abou Haidar — a man of Levantine roots who decided to give Cairo something completely unlike anything it had tasted before." },
    p2: { ar: "ومن ذلك اليوم، تحوّلت ساندوتشات أبو حيدر الصغيرة إلى علامة مسجّلة في عالم الشاورما في مصر. فأصبح المطعم مقصدًا يقطع الناس من أجله الطرقات، وتقف أمامه الطوابير، وتتزاحم السيارات من شدة الطلب.", en: "From that day on, Abou Haidar's little sandwiches became a trademark in the world of Egyptian shawarma. The restaurant became a destination people cross the city for — queues form outside and cars crowd the street." },
    badge_value_ar: "٥٧+",
    badge_value_en: "57+",
    badge_label: { ar: "عامًا من النكهة", en: "Years of flavor" },
    image: "img/album-7.jpg",
    image_alt_ar: "طبق شاورما شهي",
    image_alt_en: "A tasty shawarma dish",
    cta: { ar: "جرّب الطعم الأصلي", en: "Try the original taste" },
    kv: [
      { title: { ar: "خلطة سرية متوارثة", en: "Inherited secret recipe" }, desc: { ar: "تتبيلة لحم مميزة بأسرار عائلية", en: "Distinctive meat marinade with family secrets" } },
      { title: { ar: "عيش كيزر طازج", en: "Fresh Kaiser roll" }, desc: { ar: "يُخبز يوميًا ويُقدَّم ساخنًا", en: "Baked daily & served hot" } },
      { title: { ar: "شواية على الفحم", en: "Charcoal grill" }, desc: { ar: "نكهة دخانية لا تُقاوَم", en: "An irresistible smoky flavor" } },
      { title: { ar: "فرع وحيد أصيل", en: "One authentic branch" }, desc: { ar: "واحد فقط للحفاظ على الجودة", en: "Only one, to preserve quality" } }
    ]
  },

  /* ---------- مميزاتنا (Signature flip cards) ---------- */
  signatures: {
    tag: { ar: "اللي بيميّزنا", en: "What makes us special" },
    title: { ar: "إيه اللي خلّى أبو حيدر <span class='gold'>أسطورة؟</span>", en: "What made Abou Haidar a <span class='gold'>legend?</span>" },
    sub: { ar: "أركان بسيطة نقدر نحكي لك عنها — كلها تصب في شيء واحد: طعم لا يُنسى.", en: "Simple pillars we can tell you about — all leading to one thing: an unforgettable taste." },
    hint_front: { ar: "اضغط لمعرفة المزيد", en: "Tap to reveal" },
    hint_back: { ar: "اضغط للإغلاق", en: "Tap to close" },
    cards: [
      { front: { ar: "خلطة اللحم السرية", en: "The secret meat marinade" },
        back:  { ar: "تتبيلة متوارثة بأسرار عائلية تمنح اللحم طعمًا لا تجده في أي مكان آخر.", en: "An inherited marinade with family secrets that gives the meat a taste you won't find anywhere else." } },
      { front: { ar: "عيش كيزر طازج يوميًا", en: "Fresh Kaiser roll daily" },
        back:  { ar: "خبز طري وساخن يُخبز يوميًا ليُكمّل طعم التتبيلة بلمسة مثالية.", en: "Soft, hot bread baked daily to perfectly complete the taste of the marinade." } },
      { front: { ar: "فرع وحيد أصيل", en: "One authentic branch" },
        back:  { ar: "بلا سلاسل ولا فروع متعددة — جودة واحدة ثابتة منذ أكثر من نصف قرن.", en: "No chains, no multiple branches — one consistent quality for over half a century." } },
      { front: { ar: "عصير المانجو الأسطوري", en: "The legendary mango juice" },
        back:  { ar: "طازج وحلو، المشروب الأشهر اللي بيرافق الشاورما ويختم تجربة لا تُنسى.", en: "Fresh and sweet — the most famous drink that accompanies the shawarma and completes an unforgettable experience." } }
    ]
  },

  /* ---------- المنيو والأسعار ---------- */
  menu: {
    tag: { ar: "المنيو", en: "The Menu" },
    title: { ar: "اختار من <span class='gold'>أشهى الأصناف</span>", en: "Pick from our <span class='gold'>finest dishes</span>" },
    sub: { ar: "تشكيلة تراثية من الشاورما والسندوتشات والعصائر الطازجة والحلويات.", en: "A heritage selection of shawarma, sandwiches, fresh juices and desserts." },
    note: { ar: "※ الأسعار تقريبية وقد تتغير — يُرجى التواصل للتأكد من أحدث المنيو.", en: "※ Prices are approximate and may change — please contact us to confirm the latest menu." },
    menu_image_title: { ar: "المنيو الأصلي", en: "The original printed menu" },
    menu_image: "img/menu.png",
    menu_image_alt_ar: "المنيو الأصلي لمطعم أبو حيدر",
    menu_image_alt_en: "The original menu of Abou Haidar restaurant",
    tabs: [
      { id: "shawarma",   ar: "شاورما",     en: "Shawarma" },
      { id: "sandwiches", ar: "سندوتشات",   en: "Sandwiches" },
      { id: "juices",     ar: "عصائر",      en: "Juices" },
      { id: "desserts",   ar: "حلويات",     en: "Desserts" }
    ],
    categories: {
      shawarma: [
        { name: { ar: "شاورما لحم كيزر", en: "Kaiser Beef Shawarma" },
          desc: { ar: "لحم متتبّل بالخلطة السرية على الفحم في عيش كيزر ساخن.", en: "Beef marinated with the secret recipe, charcoal-grilled in a hot Kaiser roll." },
          price_ar: "~25 ج.م", price_en: "~25 L.E",
          tag: { ar: "الأكثر طلبًا", en: "Most ordered" },
          img: "img/album-4.jpg", alt_ar: "شاورما لحم", alt_en: "Beef shawarma" },
        { name: { ar: "شاورما فراخ", en: "Chicken Shawarma" },
          desc: { ar: "قطع دجاج طرية متبّلة مع الطحينة والخلطة المميزة.", en: "Tender marinated chicken with tahini and the signature blend." },
          price_ar: "~22 ج.م", price_en: "~22 L.E",
          tag: null, img: "img/album-5.jpg", alt_ar: "شاورما فراخ", alt_en: "Chicken shawarma" },
        { name: { ar: "فتة شاورما", en: "Shawarma Plate" },
          desc: { ar: "طبق شاورما كامل مع البطاطس والسلطة والطحينة — يكفي الشخص الواحد.", en: "A full shawarma plate with fries, salad and tahini — enough for one." },
          price_ar: "~70 ج.م", price_en: "~70 L.E",
          tag: null, img: "img/album-10.jpg", alt_ar: "وجبة شاورما", alt_en: "Shawarma plate" }
      ],
      sandwiches: [
        { name: { ar: "سندوتش كبدة", en: "Liver Sandwich" },
          desc: { ar: "كبدة مشوحة بالبصل والفلفل الأخضر على الطريقة الشرقية.", en: "Liver sautéed with onion and green pepper, Eastern style." },
          price_ar: "~18 ج.م", price_en: "~18 L.E",
          tag: null, img: "img/album-6.jpg", alt_ar: "سندوتش كبدة", alt_en: "Liver sandwich" },
        { name: { ar: "سندوتش سجق شرقي", en: "Eastern Sausage Sandwich" },
          desc: { ar: "سجق متشوّح مع التوابل والخلطة الخاصة.", en: "Sausage sautéed with spices and the special blend." },
          price_ar: "~20 ج.م", price_en: "~20 L.E",
          tag: null, img: "img/album-8.jpg", alt_ar: "سندوتش سجق", alt_en: "Eastern sausage sandwich" },
        { name: { ar: "برجر أبو حيدر", en: "Abou Haidar Burger" },
          desc: { ar: "برجر لحم طازج بالصوص الخاص في عيش طري.", en: "A fresh beef burger with a special sauce in soft bread." },
          price_ar: "~35 ج.م", price_en: "~35 L.E",
          tag: null, img: "img/album-2.jpg", alt_ar: "برجر", alt_en: "Abou Haidar burger" }
      ],
      juices: [
        { name: { ar: "عصير مانجو طازج", en: "Fresh Mango Juice" },
          desc: { ar: "الأسطورة الأشهر — مانجو طبيعي 100%، ضيف أساسي للشاورما.", en: "The most famous legend — 100% natural mango, an essential companion to the shawarma." },
          price_ar: "~30 ج.م", price_en: "~30 L.E",
          tag: null, img: "img/album-9.jpg", alt_ar: "عصير مانجو", alt_en: "Fresh mango juice" },
        { name: { ar: "عصائر طبيعية مشكّلة", en: "Mixed Natural Juices" },
          desc: { ar: "فراولة، برتقال، جوافة — كلها طازجة ومعصورة لحظيًا.", en: "Strawberry, orange, guava — all fresh and pressed on the spot." },
          price_ar: "من 20 ج.م", price_en: "From 20 L.E",
          tag: null, img: "img/album-3.jpg", alt_ar: "عصير فواكه", alt_en: "Mixed natural juices" },
        { name: { ar: "موهيتو وخلطات مميزة", en: "Mojito & Special Mixes" },
          desc: { ar: "خلطات منعشة صيفية بلمسة أبو حيدر الخاصة.", en: "Refreshing summer blends with Abou Haidar's special touch." },
          price_ar: "~25 ج.م", price_en: "~25 L.E",
          tag: null, img: "img/album-7.jpg", alt_ar: "موهيتو", alt_en: "Mojito & special mixes" }
      ],
      desserts: [
        { name: { ar: "أم علي مصرية", en: "Egyptian Om Ali" },
          desc: { ar: "حلوى مصرية دافئة بالمكسرات والكريمة.", en: "A warm Egyptian dessert with nuts and cream." },
          price_ar: "~35 ج.م", price_en: "~35 L.E",
          tag: null, img: "img/album-4.jpg", alt_ar: "أم علي", alt_en: "Egyptian Om Ali" },
        { name: { ar: "مهلبية بالمكسرات", en: "Mahalabiya with Nuts" },
          desc: { ar: "مهلبية كريمية مزينة بالمكسرات الطازجة.", en: "A creamy pudding topped with fresh nuts." },
          price_ar: "~25 ج.م", price_en: "~25 L.E",
          tag: null, img: "img/album-5.jpg", alt_ar: "مهلبية", alt_en: "Mahalabiya with nuts" },
        { name: { ar: "كنافة بالمانجو", en: "Kunafa with Mango" },
          desc: { ar: "كنافة مقرمشة محشوة بكريمة وشرائح المانجو.", en: "Crispy kunafa filled with cream and mango slices." },
          price_ar: "~40 ج.م", price_en: "~40 L.E",
          tag: null, img: "img/album-6.jpg", alt_ar: "كنافة", alt_en: "Kunafa with mango" }
      ]
    }
  },

  /* ---------- المعرض (Gallery) ---------- */
  gallery: {
    tag: { ar: "المعرض", en: "Gallery" },
    title: { ar: "صور من <span class='gold'>عالمنا</span>", en: "Glimpses of <span class='gold'>our world</span>" },
    sub: { ar: "لقطات من الأطباق والمكان تعبّر عن أجواء أبو حيدر.", en: "Shots of the dishes and the place that capture Abou Haidar's atmosphere." },
    items: [
      { img: "img/album-7.jpg",  alt_ar: "شاورما لحم",   alt_en: "Beef shawarma",          caption: { ar: "شاورما لحم بالخلطة السرية", en: "Beef shawarma with the secret recipe" } },
      { img: "img/album-2.jpg",  alt_ar: "طبق شرقي",     alt_en: "Eastern dish",           caption: { ar: "أطباق على الفحم", en: "Charcoal dishes" } },
      { img: "img/album-9.jpg",  alt_ar: "عصير مانجو",   alt_en: "Mango juice",            caption: { ar: "عصير المانجو الأسطوري", en: "The legendary mango juice" } },
      { img: "img/album-5.jpg",  alt_ar: "مشويات",       alt_en: "Grills",                 caption: { ar: "مشويات على الطريقة الأصلية", en: "Grills the original way" } },
      { img: "img/album-8.jpg",  alt_ar: "افطار",        alt_en: "Breakfast",              caption: { ar: "ولا ألذ من أطباقنا", en: "Nothing beats our dishes" } },
      { img: "img/album-10.jpg", alt_ar: "بيتزا وفراخ",  alt_en: "Pizza & chicken",       caption: { ar: "تجربة تكتمل بالطعم الأصيل", en: "A complete authentic experience" } },
      { img: "img/album-4.jpg",  alt_ar: "طبق طعام",     alt_en: "A dish of food",         caption: { ar: "من قلب روكسي", en: "From the heart of Roxy" } },
      { img: "img/album-3.jpg",  alt_ar: "مطعم",         alt_en: "Restaurant",             caption: { ar: "أجواء الأصالة والدفء", en: "An atmosphere of authenticity & warmth" } }
    ]
  },

  /* ---------- تواصل / حجز ---------- */
  contact: {
    tag: { ar: "تواصل وحجز", en: "Contact & Booking" },
    title: { ar: "زيارة <span class='gold'>أو حجز</span>", en: "Visit <span class='gold'>or book</span>" },
    sub: { ar: "عنواننا في روكسي، مصر الجديدة. اتصل بينا أو احجز مسبقًا عبر النموذج.", en: "Find us in Roxy, Heliopolis. Call us or book in advance through the form." },
    address_title: { ar: "العنوان", en: "Address" },
    address_ar: "١٣ شارع سكة سليمان باشا، متفرع من إبراهيم اللقاني،<br>روكسي، مصر الجديدة، القاهرة",
    address_en: "13 Sikka Suleiman Pasha St, off Ibrahim El-Lakkani,<br>Roxy, Heliopolis, Cairo",
    phone_title: { ar: "الهاتف", en: "Phone" },
    phone: "+20 2 22570871",
    hours_title: { ar: "مواعيد العمل", en: "Opening hours" },
    hours_daily: { ar: "يوميًا", en: "Daily" },
    hours_time: { ar: "8:30 ص — 1:30 ص", en: "8:30 AM — 1:30 AM" },
    hours_note: { ar: "※ يرجى ملاحظة أن المحل يعمل بالنقد فقط (كاش).", en: "※ Please note the restaurant is cash only." },
    follow_title: { ar: "تابعنا", en: "Follow us" },
    follow_text: { ar: "صفحتنا الرسمية على فيسبوك →", en: "Our official Facebook page →" },
    facebook: "https://www.facebook.com/abouhaidarrestaurant/",
    instagram: "https://www.instagram.com/",
    booking_title: { ar: "احجز/تواصل معنا", en: "Book / contact us" },
    booking_sub: { ar: "املأ النموذج وسنرد عليك في أقرب وقت. الحجز النهائي يتم عبر الهاتف.", en: "Fill in the form and we'll get back to you as soon as possible. Final booking is confirmed by phone." },
    form: {
      name: { ar: "الاسم الكامل", en: "Full name" },
      phone: { ar: "رقم الهاتف", en: "Phone number" },
      date: { ar: "التاريخ", en: "Date" },
      time: { ar: "الوقت", en: "Time" },
      persons: { ar: "عدد الأشخاص", en: "Number of people" },
      type: { ar: "نوع الطلب", en: "Request type" },
      message: { ar: "رسالتك", en: "Your message" },
      submit: { ar: "إرسال الطلب", en: "Send request" },
      type_options: [
        { ar: "حجز طاولة", en: "Table reservation" },
        { ar: "طلب / استفسار", en: "Order / inquiry" },
        { ar: "أخرى", en: "Other" }
      ],
      err: { ar: "من فضلك املأ الحقول المطلوبة (الاسم، الهاتف، التاريخ).", en: "Please fill in the required fields (name, phone, date)." },
      ok: { ar: "تم استلام طلبك بنجاح! سنتواصل معك على رقمك في أقرب وقت. (عرض تجريبي — للتواصل الفعلي اتصل بالهاتف.)", en: "Your request has been received! We'll contact you shortly. (Demo — for real booking please call.)" },
      sending: { ar: "جاري الإرسال…", en: "Sending…" }
    }
  },

  /* ---------- التذييل (Footer) ---------- */
  footer: {
    brand_p: { ar: "أشهر شاورما في مصر منذ ١٩٦٨ — الخلطة السرية والطعم الأصيل من قلب روكسي، مصر الجديدة.", en: "The most famous shawarma in Egypt since 1968 — the secret recipe and authentic taste from the heart of Roxy, Heliopolis." },
    col_site_title: { ar: "الموقع", en: "Site" },
    col_contact_title: { ar: "تواصل", en: "Contact" },
    col_hours_title: { ar: "ساعات العمل", en: "Opening hours" },
    col_hours_daily: { ar: "يوميًا:", en: "Daily:" },
    col_hours_time: { ar: "8:30 ص — 1:30 ص", en: "8:30 AM — 1:30 AM" },
    col_contact_roxy: { ar: "روكسي، مصر الجديدة", en: "Roxy, Heliopolis" },
    col_contact_facebook: { ar: "فيسبوك", en: "Facebook" },
    bottom_copyright: { ar: "© 2026 مطعم أبو حيدر — جميع الحقوق محفوظة", en: "© 2026 Abou Haidar Restaurant — All rights reserved" },
    bottom_tagline: { ar: "موقع تجريبي لعرض الهوية الحالية للمطعم.", en: "A demo website showcasing the restaurant's current identity." }
  },

  /* ---------- حالة الفتح / الإغلاق (مؤشر أعلى الصفحة) ---------- */
  /* status: "auto" = يحسب تلقائيًا من ساعات العمل، 
     status: "closed" = إغلاق استثنائي (يعرض السبب للزائر ويغلق التلقائي) */
  overrides: {
    status: { ar: "auto", en: "auto" },
    closed_title: { ar: "مغلق مؤقتًا", en: "Temporarily closed" },
    closed_reason: { ar: "نعتذر — المطعم مغلق اليوم لظرف استثنائي. سنعود قريبًا.", en: "Sorry — the restaurant is closed today due to exceptional circumstances. We'll be back soon." },
    open_label: { ar: "مفتوح الآن", en: "Open now" },
    closed_label: { ar: "مغلق الآن", en: "Closed now" }
  },

  /* ---------- الوصول ومواقف السيارات (قسم منفصل تحت التواصل) ---------- */
  parking: {
    tag: { ar: "الوصول والمواقف", en: "Parking & Access" },
    title: { ar: "ممكن توصلك و<wbr>تركن فين؟", en: "How to get here & <wbr>where to park" },
    sub: { ar: "معلومات مفصّلة للوصول إلى أبو حيدر بسيارتك أو بالمواصلات — لراحة زيارتك.", en: "Detailed info on reaching Abou Haidar by car or public transport — for a worry-free visit." },
    map_title: { ar: "موقعنا على الخريطة", en: "Our location on the map" },
    p1: {
      icon: { ar: "🅿️", en: "🅿️" },
      title: { ar: "جراج روكسي الذكي", en: "Roxy Smart Garage" },
      desc: { ar: "الخيار الأفضل والأكثر أمانًا — جراج أوتوماتيكي متعدد الطوابق على بعد 7–10 دقائق مشيًا من المطعم.", en: "The best and safest option — a multi-storey automatic garage 7–10 minutes walk from the restaurant." }
    },
    p2: {
      icon: { ar: "🅿️", en: "🅿️" },
      title: { ar: "جراج الميريلاند", en: "Meriland Garage" },
      desc: { ar: "ساحة انتظار مفتوحة قريبة من منطقة الميريلاند والكوربة — مناسبة للفترات العادية.", en: "An open parking lot near Meriland and Korba — suitable during normal hours." }
    },
    p3: {
      icon: { ar: "🅿️", en: "🅿️" },
      title: { ar: "شوارع نزيه خليفة والأهرام", en: "Nazih Khalifa & Al-Ahram streets" },
      desc: { ar: "ركنات على جانبي الطريق، لكنها محدودة في أوقات الذروة.", en: "Street parking along both roads, though limited during peak hours." }
    },
    p4: {
      icon: { ar: "🚇", en: "🚇" },
      title: { ar: "محطة مترو الأهرام", en: "El-Ahram Metro Station" },
      desc: { ar: "على الخط الثالث — الوصول بدون سيارة، وخطوات قليلة من شارع إبراهيم اللقاني.", en: "On Line 3 — arrive without a car, just a short walk from Ibrahim El-Lakkani Street." }
    },
    embed: { ar: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.088090528631!2d31.316168875596805!3d30.091663374899884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e289a115227%3A0x24bce8d200a5a143!2sAbou%20Haidar%20Shawerma!5e0!3m2!1sen!2seg!4v1788271034769!5m2!1sen!2seg", en: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.088090528631!2d31.316168875596805!3d30.091663374899884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e289a115227%3A0x24bce8d200a5a143!2sAbou%20Haidar%20Shawerma!5e0!3m2!1sen!2seg!4v1788271034769!5m2!1sen!2seg" }
  },

  /* ---------- الأسئلة الشائعة (FAQ) — فوق التواصل وتحت المعرض ---------- */
  faq: {
    tag: { ar: "الأسئلة الشائعة", en: "FAQs" },
    title: { ar: "عندك سؤال؟ <span class='gold'>عندنا الإجابة</span>", en: "Got a question? <span class='gold'>We've got the answer</span>" },
    sub: { ar: "أكثر الأسئلة تداولًا عن مطعم أبو حيدر — ويمكنك تعديلها من لوحة التحكم.", en: "The most common questions about Abou Haidar — editable from the dashboard." },
    items: [
      { q: { ar: "هل توفّرون خدمة التوصيل؟", en: "Do you offer delivery?" },
        a: { ar: "الطلب حاليًا داخل المطعم فقط — يمكنك الاتصال بنا على 0222570871 للتأكد من الخدمة المتوفرة.", en: "Orders are currently in-house only — call us at 0222570871 to check available services." } },
      { q: { ar: "هل الدفع بالبطاقة أم النقد فقط؟", en: "Card or cash only?" },
        a: { ar: "حاليًا نقبل النقد (الكاش) فقط داخل المطعم.", en: "We currently accept cash only inside the restaurant." } },
      { q: { ar: "أين يقع المطعم بالضبط؟", en: "Where exactly is the restaurant?" },
        a: { ar: "الموقع في ١٣ شارع سكة سليمان باشا، متفرع من إبراهيم اللقاني، روكسي، مصر الجديدة. يمكنك استخدام الخريطة أعلاه.", en: "We're at 13 Sikka Suleiman Pasha St, off Ibrahim El-Lakkani, Roxy, Heliopolis. Use the map above." } },
      { q: { ar: "ما هي ساعات العمل؟", en: "What are the opening hours?" },
        a: { ar: "نعمل يوميًا من 8:30 صباحًا حتى 1:30 بعد منتصف الليل.", en: "We're open daily from 8:30 AM until 1:30 AM." } },
      { q: { ar: "أين يمكنني ركن سيارتي؟", en: "Where can I park my car?" },
        a: { ar: "لدينا عدة خيارات — تفقّد قسم الوصول والمواقف في الأسفل (جراج روكسي الذكي، الميريلاند، وغيرها).", en: "We have several options — check the Parking & Access section below (Roxy Smart Garage, Meriland, and more)." } }
    ]
  }
};
