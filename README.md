# أبو حيدر — Abou Haidar

الموقع الرسمي لمطعم أبو حيدر (liebanese/شاورما). موقع ثابت (static) بكود خالص:
HTML + CSS + JavaScript، بدون أي Frameworks أو Build Tools.

## البنية

- `index.html` — الصفحة الرئيسية.
- `site-content.js` — بيانات الموقع (القصة، المنيو، المعرض، التواصل) ككائن `siteContent`.
- `site-render.js` — يقرأ `siteContent` ويبني فهرس الصفحة ديناميكيًا، ويربط WooCommerce/WhatsApp.
- `admin.html` — لوحة تحكم المالك كاملة داخل ملف واحد، تتصل بـ Supabase:
  - مصادقة المالك عبر GoTrue (email/password).
  - تحرير محتوى الموقع وحفظه في جداول Supabase (site_text, menu_items, gallery_items, signature_cards, theme).
  - تبويب «الحساب والأمان» لتغيير كلمة السر والبريد الإلكتروني.
- `img/` — صور الموقع (اللوجو، الـ hero، المنيو، المعرض).

## تشغيل محلي

افتح `admin.html` فقط عبر خادم محلي (افتح `index.html` بالأدوات الآمنة) —
أو ابسط الأسطر: أي خادم Static بسيط:

```
npx serve ./
```

ثم افتح `admin.html` في المتصفح، أدخل Connection String الخاص بـ Supabase
(الـ URL والـ anon key) من داخل تبويب «إعدادات الاتصال»، وأنشئ حساب المالك عند أول تشغيل.

## استضافة

النشر على Cloudflare Pages عبر `wrangler pages deploy` — انظر خطة التشغيل.

---
Abou Haidar — official restaurant site (static HTML/CSS/JS, no build step).