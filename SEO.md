# 🎯 راهنما و مستندات سئو (SEO Documentation)

این مستندات ساختار بهینه‌سازی موتورهای جستجو (Search Engine Optimization) اعمال‌شده روی مرجع «چک‌لیست طراحی UX» را توضیح می‌دهد.

---

## 🌐 ۱. ساختار URLs و نقشه سایت (Sitemap)

تمام صفحات وب‌سایت دارای ساختار URL یکپارچه و خوانا هستند:
- **صفحه اصلی:** `https://checklist.nounproject.ir`
- **کتابخانه:** `https://checklist.nounproject.ir/browse`
- **راهنما و ابزارها:** `https://checklist.nounproject.ir/guide`
- **درباره ما:** `https://checklist.nounproject.ir/about`
- **چک‌لیست‌های اختصاصی:** `https://checklist.nounproject.ir/checklist/{slug}`

فایل `/public/sitemap.xml` به‌صورت جامع تمام ۶۹+ چک‌لیست را به همراه فرکانس تغییرات (`weekly`) و اولویت (`priority`) ثبت می‌کند.

---

## 🏷️ ۲. تگ‌های Meta و OpenGraph

هر صفحه به‌صورت کاملاً پویا توسط کامپوننت `src/components/SEO.tsx` مدیریت می‌شود:

- **Document Title:** فرمت `چک‌لیست {عنوان} | مرجع استانداردهای طراحی UX`
- **Meta Description:** خلاصه‌ای جذاب و شامل کلمات کلیدی اصلی مرتبط با آن چک‌لیست.
- **Canonical Link:** جلوگیری از محتوای تکراری (Duplicate Content).
- **OpenGraph & Twitter Cards:** نمایش تصویر لوگو (`favicon.svg`) و عنوان دقیق هنگام به‌اشتراک‌گذاری در تلگرام، توییتر، واتس‌اپ و لینکدین.

---

## 📊 ۳. داده‌های ساختاریافته (JSON-LD Structured Data)

برای رتبه‌بندی در Rich Snippets گوگل، داده‌های ساختاریافته زیر تزریق می‌شوند:

1. **مفهوم ItemList در صفحات چک‌لیست:**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "چک‌لیست طراحی فرم",
  "numberOfItems": 15,
  "itemListElement": [...]
}
```

2. **مفهوم WebSite در صفحه اصلی:**
ثبت نام کامل مرجع فارسی، زبانه جستجو و اطلاعات هویت برند.

---

## 🚀 ۴. عملکرد و کارایی (Core Web Vitals)

- **پیش‌بارگذاری فونت:** استفاده از `preconnect` برای Google Fonts Vazirmatn.
- **بارگذاری آفلاین سئو:** تمامی فایل‌های روبات و مانیفست از ریشه دامنه خدمت‌رسانی می‌شوند.
