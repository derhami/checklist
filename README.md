# 📖 چک‌لیست طراحی UX

> مرجع جامع، استاندارد و فارسی زبانِ چک‌لیست‌های تخصصی تجربه کاربری (UX)، رابط کاربری (UI)، دسترسی‌پذیری (WCAG) و دیزاین سیستم — همراه با ابزارهای سنجش تعاملی.

[![گیت‌هاب پیجز](https://img.shields.io/github/deployments/derhami/checklist/github-pages?label=GitHub%20Pages&logo=github&logoColor=white)](https://checklist.nounproject.ir)
[![لایسنس](https://img.shields.io/badge/License-MIT-facc15.svg?logo=open-source-initiative&logoColor=white)](LICENSE)

---

## 🌐 وب‌سایت زنده

> 🔗 **https://checklist.nounproject.ir**

---

## ✨ ویژگی‌های کلیدی

- **📚 بیش از ۶۹ چک‌لیست تخصصی:** استانداردهای طراحی برای وب‌سایت‌ها، کامپوننت‌های رابط کاربر (دکمه، فرم، مودال، جدول و…)، جریان‌های کاربری (ثبت‌نام، پرداخت، بارگذاری فایل) و هویت برند.
- **⚡ ارزیابی زنده و ذخیره‌سازی خودکار:** درصد پیشرفت و آیتم‌های بررسی‌شده به‌صورت کاملاً آفلاین و امن در `localStorage` مرورگر؛ بدون نیاز به ثبت‌نام.
- **📐 ابزارهای تعاملی در کتابچه راهنما:**
  - **سنجش کنتراست زنده (WCAG Contrast Checker):** ارزیابی خوانایی رنگ‌ها بر اساس WCAG 2.1 با سطوح AA و AAA.
  - **محاسبه‌گر مقیاس تایپوگرافی (Type Scale Generator):** ایجاد گام‌بندی ریاضی تیترها بر اساس نسبت‌های استاندارد.
- **🎨 کپی آماده برای Figma و Markdown:** خروجی چک‌لیست‌ها با فرمت Markdown برای استفاده در Figma، Notion و Jira.
- **🔍 جستجوی هوشمند فارسی و انگلیسی:** پشتیبانی از حروف فارسی/عربی (ی/ک)، کوئری‌های چندکلمه‌ای و کلمات کلیدی انگلیسی.
- **📑 حالت چاپ اختصاصی:** خروجی تمیز برای PDF و پرینت فیزیکی بدون المان‌های اضافی رابط کاربری.
- **📱 کاملاً واکنش‌گرا:** بهینه‌سازی نمایش در موبایل، تبلت و دسکتاپ.
- **🔍 SEO و PWA:** تگ‌های متا پویا، OpenGraph و Twitter Cards، داده‌های ساختاریافته (JSON-LD)، `sitemap.xml`، `robots.txt`، مانیفست PWA و سرویس‌ورکر آفلاین.

---

## 🛠️ تکنولوژی‌ها

| فناوری | نسخه |
| --- | --- |
| [React](https://react.dev/) | 19 |
| [Vite](https://vite.dev/) | 6 |
| [TypeScript](https://www.typescriptlang.org/) | 5.8 |
| [Tailwind CSS](https://tailwindcss.com/) | 4 |
| [React Router](https://reactrouter.com/) | 7 |
| [Lucide Icons](https://lucide.dev/) | 0.546 |

---

## 🚀 آغاز به کار

### پیش‌نیازها

- **Node.js ≥ 20** و یک مدیر پکیج (npm)

### نصب

```bash
# نصب وابستگی‌ها
npm install

# اجرای محیط توسعه
npm run dev

# بررسی تایپ‌ها (Type Check)
npm run lint

# ساخت خروجی تولید
npm run build

# پیش‌نمایش خروجی تولید
npm run preview
```

### اسکریپت‌ها

| Script | Explanation |
| --- | --- |
| `npm run dev` | اجرای سرور توسعه‌ی Vite |
| `npm run build` | ساخت خروجی به‌ینه‌شده در پوشه `dist/` |
| `npm run preview` | پیش‌نمایش خروجی ساخت‌شده |
| `npm run lint` | بررسی تایپ‌ها با `tsc --noEmit` |

---

## 📁 ساختار پروژه

```text
checklist/
├── public/                    # دارایی‌های استاتیک
│   ├── favicon.svg            # لوگوی اصلی سایت
│   ├── logo.svg               # وکتور لوگو
│   ├── robots.txt             # راهنمای موتورهای جستجو
│   ├── sitemap.xml            # نقشه کامل سایت (۶۹+ صفحه)
│   ├── site.webmanifest       # مانیفست وب (PWA)
│   ├── sw.js                  # سرویس‌ورکر آفلاین
│   ├── CNAME                  # دامنه‌ی سفارشی GitHub Pages
│   └── 404.html               # فالبک مسیریابی SPA
├── src/
│   ├── components/            # کامپوننت‌های عمومی و مودال‌ها
│   ├── context/               # کانتکست‌های React
│   ├── data/                  # دیتابیس ۶۹+ چک‌لیست (دسته‌بندی‌شده)
│   ├── hooks/                 # هوک‌های مدیریت پیشرفت و پروژه
│   ├── pages/                 # صفحات اصلی (Home, Browse, Detail, …)
│   ├── utils/                 # توابع کمکی فارسی/جستجو/کپی
│   ├── App.tsx                # ریشه‌ی اپلیکیشن و مسیربندی
│   └── main.tsx               # نقطه‌ی ورود
├── .github/workflows/         # دیپلوی خودکار GitHub Pages
├── index.html                 # قالب HTML ورودی + SEO
├── package.json
└── vite.config.ts
```

---

## 🔍 سئو و بهینه‌سازی

- **تگ‌های دینامیک:** عنوان و توضیحات اختصاصی برای هر صفحه از طریق کامپوننت `<SEO />`.
- **Dataهای ساختاریافته:** `ItemList` و `WebSite` برای نمایش Rich Snippets در گوگل.
- **نقشه سایت:** `sitemap.xml` برای ایندکس سریع همه مسیرها.
- **OpenGraph / Twitter:** کارت‌های اشتراک‌گذاری برای تلگرام، توییتر و واتس‌اپ.

> 📄 جزئیات کامل در [SEO.md](./SEO.md) مستند شده است.

---

## 🤝 مشارکت

نظرها، باگ‌ها و پیشنهادات‌تان را از طریق [Issues](https://github.com/derhami/checklist/issues) ثبت کنید. راهنمای کامل همکاری در [CONTRIBUTING.md](CONTRIBUTING.md) آمده است.

---

## 📄 لایسنس

این پروژه تحت مجوز [**MIT License**](LICENSE) منتشر شده است — آزاد برای استفاده شخصی و تجاری.

---

## 👤 سازنده

توسعه‌داده‌شده با عشق برای جامعه‌ی طراحان و توسعه‌دهندگان ایران توسط **حمیدرضا درهمی**.

| | |
| --- | --- |
| **وب‌سایت** | [derhami.com](https://derhami.com) |
| **ایمیل** | [info@derhami.com](mailto:info@derhami.com) |