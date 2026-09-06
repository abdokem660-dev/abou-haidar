# سياسة الأمان — أبو حيدر

## الإبلاغ عن ثغرات أمنية

إذا وجدت ثغرة أمنية، يُرجى عدم نشرها علنًا.
أرسل التفاصيل عبر:

- **البريد**: `admin@abouhaider.com`
- **الموضوع**: `[-security] وصف مختصر للثغرة`

سنتجاوب خلال ٧٢ ساعة على الأقل.

---

## قائمة التحويل (OWASP Top 10)

### A01 — Broken Access Control ✅
- جداول المحتوى (`site_text`, `theme`, `menu_items`, `gallery_items`, `signature_cards`) مقيّدة بـ RLS بالكامل.
-兽Scrub inserting/updating/deleting مقيّدة على `admin@abouhaider.com` فقط عبر `is_admin()`.
- ميزات "`admin_publish_site`" تتحقق من `is_admin()` وتُسجل في `publish_audit` قبل التنفيذ.

### A02 — Cryptographic Failures ✅
- كلمات المرور مخزّنة في Supabase Auth (bcrypt) — لا نخزّنها يدويًا.
- لا مفاتيح سرية في الكود: المتغيرات تأتي من `SupabaseConfig` خارج الشجرة.

### A03 — Injection ✅
- لا SQL حي: فقط Supabase RPC (`admin_publish_site`).
- لا `eval`/`innerHTML` حي来自مستخدم: القيم تمر عبر `sanitizeText()` (DOM traversal) + `esc()` في المحرر.

### A04 — Insecure Design ✅
- التصميم يعتمد على `app_admins` + `is_admin()` SECURITY DEFINER مع `search_path=''`.
- حساب المطوّر `abdokem660@gmail.com` حُذف تمامًا.

### A05 — Security Misconfiguration ✅
- CSP مُضاف في `<head>`:
  ```
  default-src 'self' data:; script-src 'self' 'unsafe-inline'; 
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
  font-src https://fonts.gstatic.com; img-src 'self' data: https:; 
  frame-src https://www.google.com/maps https://maps.google.com; 
  object-src 'none'; base-uri 'self'; connect-src 'self' https://<project>.supabase.co
  ```
- `<meta name="referrer" content="no-referrer">` في الصفحة الرئيسية.
- `<meta name="robots" content="noindex,nofollow">` في لوحة التحكم.

### A06 — Vulnerable Components ✅
- لا مكتبات خارجية (بدون npm): فقط كود خالص + Supabase JS CDN.
- Supabase JS مُثبّت بـ `<script>` يدوي — يجب مراجعة الإصدار دورويًا.

### A07 — Identity & Auth Failures ✅
- تسجيل الدخول عبر Supabase Auth فقط.
- الجلسات تُخزَّن في `sessionStorage` (لا `localStorage`).
- Gate في `createOwner`: `admin_owner_exists()` RPC يمنع إنشاء حساب مالك إضافي.

### A08 — Software & Data Integrity ✅
- لا تحديثات تلقائية (لا CI/CD deploy على push).
- `validate.yml` يتحقق من سلامة الملفات الحرجّة عند الدفع.

### A09 — Security Logging Failures ✅
- جدول `publish_audit` يسجّل كل عملية نشر مع `created_by` + `created_at`.
- الأدوات: `is_admin()` مع `SECURITY DEFINER` + `search_path=''`.

### A10 — Server-Side Request Forgery (SSRF) ✅
- لا طلبات صادرة من السيرفر (فقط العميل).
- صور Menu/Gallery: تتحقق من `^https?://` قبل الحفظ.

---

## التحقق بعد النشر

```bash
# 1. تحقق من أن حساب المطوّر محذوف
# 2. تحقق من RLS على كل جدول
# 3. تحقق من CSP في المتصفح (F12 → Console → أخطاء CSP)
# 4. تحقق من `app_admins` يحتوي فقط على admin@abouhaider.com
# 5. تحقق من `publish_audit` يسجّل العمليات
```

## النسخة
- تاريخ آخر مراجعة: سبتمبر 2026
- الإصدار: 2.0.0
