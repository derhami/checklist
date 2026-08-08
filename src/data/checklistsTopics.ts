import { Checklist } from '../types';

export const topicsChecklists: Checklist[] = [
  {
    id: 't-a11y',
    slug: 'accessibility-a11y',
    title: 'دسترسی‌پذیری (Accessibility - a11y)',
    titleEn: 'Accessibility Checklist',
    description: 'استانداردهای WCAG برای استفاده نابینایان، کم‌بینایان و کاربران کیبورد',
    categoryId: 'topics',
    icon: 'Eye',
    featured: true,
    sections: [
      {
        id: 't-a11y-wcag',
        title: 'کنتراست و کیبورد',
        items: [
          { id: 'a1', text: 'آیا نسبت کنتراست متن عادی به پس‌زمینه حداقل 4.5:1 (WCAG AA) است؟', isEssential: true },
          { id: 'a2', text: 'آیا تمام عناصر تعاملی (دکمه‌ها، لینک‌ها) با کلید Tab کیبورد قابل فوکوس هستند؟', isEssential: true },
          { id: 'a3', text: 'آیا تمام تصاویر دارای صفت alt توصیفی برای صفحه‌خوان‌ها هستند؟', isEssential: true },
          { id: 'a4', text: 'آیا اطلاعات تنها با استفاده از رنگ منتقل نمیشود؟ (مثلاً خطا علاوه بر قرمز، آیکون و متن دارد)', isEssential: true },
          { id: 'a5', text: 'آیا ساختار تیترها (H1 تا H6) ترتیب منطقی و بدون پرش دارد؟' },
        ]
      }
    ],
    relatedSlugs: ['color-system', 'typography', 'button']
  },
  {
    id: 't-mobile',
    slug: 'mobile-ux',
    title: 'تجربه کاربری موبایل (Mobile UX)',
    titleEn: 'Mobile UX Checklist',
    description: 'طراحی واکنش‌گرا، ابعاد لمسی، منطقه شست دست و ناوبری سفارشی موبایل',
    categoryId: 'topics',
    icon: 'Smartphone',
    featured: true,
    sections: [
      {
        id: 't-mob-thumb',
        title: 'منطقه لمس و کیبورد',
        items: [
          { id: 'm1', text: 'آیا ابعاد دکمه‌ها و فیلدها حداقل ۴۴×۴۴ پیکسل است تا با شست دست راحت لمس شوند؟', isEssential: true },
          { id: 'm2', text: 'آیا اقدامات اصلی در منطقه دسترسی آسان شست (Thumb Zone) در پایین صفحه قرار دارند؟', isEssential: true },
          { id: 'm3', text: 'آیا هنگام باز شدن کیبورد مجازی، دکمه ثبت فرم پشت کیبورد مخفی نمی‌شود؟', isEssential: true },
          { id: 'm4', text: 'آیا از زوم ناخواسته در iOS (فونت ورودی کمتر از ۱۶px) جلوگیری شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['touch-targets', 'navigation', 'button']
  },
  {
    id: 't-darkmode',
    slug: 'dark-mode',
    title: 'حالت تاریک (Dark Mode)',
    titleEn: 'Dark Mode Checklist',
    description: 'کنتراست رنگی در حالت شب، عدم استفاده از مشکی مطلق، حفظ هویت بصری',
    categoryId: 'topics',
    icon: 'Moon',
    featured: true,
    sections: [
      {
        id: 't-dm-colors',
        title: 'رنگ‌بندی و سایه‌ها',
        items: [
          { id: 'dm1', text: 'آیا از مشکی مطلق (#000000) برای پس‌زمینه اجتناب شده و خاکستری تیره متمایل به تم استفاده شده؟', isEssential: true },
          { id: 'dm2', text: 'آیا اشباع رنگ‌های اصلی در دارک مد کاهش یافته تا چشم را خسته نکند؟' },
          { id: 'dm3', text: 'آیا عمق کارت‌ها به جای سایه با روشن‌تر شدن پس‌زمینه (Elevation) نشان داده می‌شود؟', isEssential: true },
          { id: 'dm4', text: 'آیا تنظیمات دارک مد با ترجیح سیستم کاربر (prefers-color-scheme) هماهنگ است؟' },
        ]
      }
    ],
    relatedSlugs: ['color-system', 'accessibility-a11y']
  },
  {
    id: 't-typography',
    slug: 'typography',
    title: 'تایپوگرافی و فونت (Typography)',
    titleEn: 'Typography Checklist',
    description: 'مقیاس‌های تناسبی فونت فارسی، طول سطر استاندارد، فاصله خطوط و وزن‌ها',
    categoryId: 'topics',
    icon: 'Type',
    sections: [
      {
        id: 't-typ-scale',
        title: 'خوانایی و فواصل',
        items: [
          { id: 'tp1', text: 'آیا از یک فونت استاندارد فارسی با اعداد فارسی و تناسبات متوازن استفاده شده است؟', isEssential: true },
          { id: 'tp2', text: 'آیا طول سطرهای متنی بین ۴۵ تا ۷۵ کاراکتر محدود شده است؟', isEssential: true },
          { id: 'tp3', text: 'آیا فاصله خطوط (line-height) برای متن‌های بدنه فارسی بین ۱.۶ تا ۱.۸ تنظیم شده است؟' },
          { id: 'tp4', text: 'آیا سلسله مراتب وزن فونت‌ها (Regular, Medium, Bold) در کل صفحات یکنواخت است؟' },
        ]
      }
    ],
    relatedSlugs: ['accessibility-a11y', 'micro-copy']
  },
  {
    id: 't-perf',
    slug: 'performance-loading',
    title: 'سرعت و بارگذاری (Performance)',
    titleEn: 'Performance & Loading',
    description: 'بهینه‌سازی حجم تصاویر، کشینگ، لزی‌لودینگ و شاخص‌های Core Web Vitals',
    categoryId: 'topics',
    icon: 'Zap',
    sections: [
      {
        id: 't-prf-speed',
        title: 'سرعت بارگذاری',
        items: [
          { id: 'pf1', text: 'آیا تمام تصاویر به فرمت‌های مدرن مانند WebP یا AVIF فشرده شده‌اند؟', isEssential: true },
          { id: 'pf2', text: 'آیا تصاویر پایین‌تر از خط دید (Below the fold) دارای لزی لودینگ (lazy loading) هستند؟', isEssential: true },
          { id: 'pf3', text: 'آیا زمان پاسخگویی اولین بایت سرور (TTFB) کمتر از ۶۰۰ میلی‌ثانیه است؟' },
          { id: 'pf4', text: 'آیا فریم‌ورک از پرش چیدمان (Cumulative Layout Shift - CLS) جلوگیری می‌کند؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['skeleton-placeholder', 'seo-meta']
  },
  {
    id: 't-microcopy',
    slug: 'micro-copy',
    title: 'متون رابط کاربری و لحن (Micro-copy)',
    titleEn: 'Micro-copy & Tone',
    description: 'نگارش متون صریح روی دکمه‌ها، پیام‌های خطا، راهنماها و لحن برند',
    categoryId: 'topics',
    icon: 'MessageSquare',
    sections: [
      {
        id: 't-mc-tone',
        title: 'صراحت و لحن',
        items: [
          { id: 'mc1', text: 'آیا متون راهنما و دکمه‌ها کوتاه، صریح و بدون کلمات پیچیده فنی هستند؟', isEssential: true },
          { id: 'mc2', text: 'آیا پیام‌های خطا راه‌حل رفع مشکل را به کاربر نشان می‌دهند؟', isEssential: true },
          { id: 'mc3', text: 'آیا لحن گفتار در سراسر برنامه (رسمی یا صمیمی) یکدست حفظ شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['typography', 'error-handling']
  },
  {
    id: 't-seo',
    slug: 'seo-meta',
    title: 'سئو و متاتگ‌ها (SEO & Meta)',
    titleEn: 'SEO & Meta Tags',
    description: 'عنوان صفحه، توضیحات متاتگ، ساختار Open Graph و داده‌های ساختاریافته Schema',
    categoryId: 'topics',
    icon: 'Globe',
    sections: [
      {
        id: 't-seo-meta',
        title: 'متاتگ‌ها و کارت‌های شبکه اجتماعی',
        items: [
          { id: 'se1', text: 'آیا هر صفحه دارای یک Title منحصر به‌فرد و متاتگ Description جذاب است؟', isEssential: true },
          { id: 'se2', text: 'آیا تگ‌های Open Graph (og:title, og:image) برای اشتراک‌گذاری در تلگرام/توییتر تنظیم شده‌اند؟', isEssential: true },
          { id: 'se3', text: 'آیا فایل sitemap.xml و robots.txt پیکربندی شده‌اند؟' },
          { id: 'se4', text: 'آیا ساختار URLها کوتاه، خوانا و به همراه کلمات کلیدی است؟' },
        ]
      }
    ],
    relatedSlugs: ['performance-loading', 'blog-article-page']
  },
  {
    id: 't-errors',
    slug: 'error-handling',
    title: 'مدیریت خطاها (Error Handling)',
    titleEn: 'Error Handling Checklist',
    description: 'خطاهای شبکه، قطع اینترنت، خطای سرور ۵۰۰ و بازخورد به کاربر',
    categoryId: 'topics',
    icon: 'AlertCircle',
    sections: [
      {
        id: 't-err-types',
        title: 'انواع خطاها',
        items: [
          { id: 'eh1', text: 'آیا قطعی اینترنت (Offline Mode) با پیام واضح بالای صفحه اطلاع‌رسانی می‌شود؟', isEssential: true },
          { id: 'eh2', text: 'آیا خطاهای ۵۰۰ سرور با لحنی محترمانه و دکمه تلاش مجدد (Retry) همراه هستند؟', isEssential: true },
          { id: 'eh3', text: 'آیا داده‌های تایپ‌شده کاربر در فرم هنگام بروز خطا پاک نمی‌شوند؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['toast-alert', 'micro-copy']
  },
  {
    id: 't-empty',
    slug: 'empty-states',
    title: 'حالت‌های خالی (Empty States)',
    titleEn: 'Empty States Checklist',
    description: 'طراحی صفحات و لیست‌های بدون داده همراه با تصویرسازی و دعوت به اقدام',
    categoryId: 'topics',
    icon: 'Inbox',
    sections: [
      {
        id: 't-emp-design',
        title: 'طراحی حالت خالی',
        items: [
          { id: 'es1', text: 'آیا علت خالی بودن صفحه (مثلاً «هنوز سفارشی ثبت نکرده‌اید») شرح داده شده؟', isEssential: true },
          { id: 'es2', text: 'آیا یک دکمه اقدام مشخص (مثلاً «مشاهده فروشگاه») در حالت خالی قرار دارد؟', isEssential: true },
          { id: 'es3', text: 'آیا تصویرسازی یا آیکون مرتبط برای صمیمیت بیشتر استفاده شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['404-error-page', 'search-filter-flow']
  },
  {
    id: 't-touch',
    slug: 'touch-targets',
    title: 'ابعاد لمسی و فواصل (Touch Targets)',
    titleEn: 'Touch Targets Checklist',
    description: 'حداقل مساحت لمسی، فواصل بین دکمه‌ها و جلوگیری از لمس اشتباه',
    categoryId: 'topics',
    icon: 'Maximize',
    sections: [
      {
        id: 't-tch-spacing',
        title: 'فواصل لمسی',
        items: [
          { id: 'ttg1', text: 'آیا فاصله بین دکمه‌های کنار هم حداقل ۸ پیکسل است تا از لمس اشتباه جلوگیری شود؟', isEssential: true },
          { id: 'ttg2', text: 'آیا آیکون‌های کوچک کلیک‌پذیر دارای پدینگ اضافی برای گسترش منطقه لمس هستند؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['mobile-ux', 'button']
  },
  {
    id: 't-colors',
    slug: 'color-system',
    title: 'سیستم رنگ‌بندی و کنتراست (Color System)',
    titleEn: 'Color System Checklist',
    description: 'پالت رنگی اصلی، ثانویه، خنثی، حالات سیستم (موفقیت، خطا، اخطار) و نسبت کنتراست',
    categoryId: 'topics',
    icon: 'Palette',
    sections: [
      {
        id: 't-clr-palette',
        title: 'پالت رنگی',
        items: [
          { id: 'cs1', text: 'آیا رنگ‌های معنایی (Semantic Colors: سبز، قرمز، زرد، آبی) به طور یکنواخت استفاده شده‌اند؟', isEssential: true },
          { id: 'cs2', text: 'آیا حداقل ۳ سایه از رنگ‌های اصلی برای حالت‌های Hover و Active تعریف شده است؟' },
          { id: 'cs3', text: 'آیا رنگ متن روی تمام پس‌زمینه‌ها آزمون WCAG را پاس می‌کند؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['accessibility-a11y', 'dark-mode']
  },
  {
    id: 't-validation',
    slug: 'form-validation',
    title: 'اعتبارسنجی فرم‌ها (Form Validation)',
    titleEn: 'Form Validation Checklist',
    description: 'اعتبارسنجی زنده (Inline Validation)، فرمت شماره همراه، کد ملی و ایمیل',
    categoryId: 'topics',
    icon: 'CheckCircle',
    sections: [
      {
        id: 't-val-inline',
        title: 'اعتبارسنجی لحظه‌ای',
        items: [
          { id: 'fv1', text: 'آیا اعتبارسنجی فیلد پس از خروج فوکوس (onBlur) انجام می‌شود نه در حین اولین تایپ؟', isEssential: true },
          { id: 'fv2', text: 'آیا فیلدهای صحیح با آیکون چک‌مارک سبز بازخورد مثبت می‌دهند؟' },
          { id: 'fv3', text: 'آیا فرمت شماره تلفن و کد ملی ایران صریحاً اعتبارسنجی می‌شود؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['form', 'input-field']
  },
  {
    id: 't-security',
    slug: 'security-privacy',
    title: 'امنیت و حریم خصوصی (Security)',
    titleEn: 'Security & Privacy Checklist',
    description: 'پروتکل HTTPS، رمزنگاری داده‌ها، خروج پس از عدم فعالیت و کوکی‌ها',
    categoryId: 'topics',
    icon: 'Shield',
    sections: [
      {
        id: 't-sec-measures',
        title: 'اقدامات امنیتی',
        items: [
          { id: 'sc1', text: 'آیا تمام ارتباطات تحت گواهینامه امنیتی SSL/HTTPS قرار دارند؟', isEssential: true },
          { id: 'sc2', text: 'آیا ماسک کردن کاراکترهای رمز عبور و اطلاعات کارت بانکی فعال است؟', isEssential: true },
          { id: 'sc3', text: 'آیا بنر رضایت‌نامه کوکی‌ها (Cookie Consent) در اولین بازدید ظاهر می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['login-flow', 'terms-privacy-page']
  },
  {
    id: 't-motion',
    slug: 'animation-motion',
    title: 'انیمیشن و حرکت (Motion & Animation)',
    titleEn: 'Motion Design Checklist',
    description: 'انتقال‌های نرم صفحات، سرعت انیمیشن‌ها (۲۰۰-۴۰۰ms) و رعایت prefers-reduced-motion',
    categoryId: 'topics',
    icon: 'Activity',
    sections: [
      {
        id: 't-mot-rules',
        title: 'اصول انیمیشن',
        items: [
          { id: 'an1', text: 'آیا زمان انیمیشن‌های تعاملی بین ۲۰۰ تا ۴۰۰ میلی‌ثانیه تنظیم شده است؟', isEssential: true },
          { id: 'an2', text: 'آیا از انیمیشن‌های سنگین که باعث کندی اسکرول یا پرش می‌شوند اجتناب شده است؟', isEssential: true },
          { id: 'an3', text: 'آیا تنظیمات عدم انیمیشن کاربر (prefers-reduced-motion) محترم شمرده می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['mobile-ux', 'performance-loading']
  },
  {
    id: 't-tokens',
    slug: 'design-tokens',
    title: 'دیزاین توکن‌ها و سیستم طراحی (Design Tokens)',
    titleEn: 'Design Tokens Checklist',
    description: 'تعریف متغیرهای CSS برای فواصل، رنگ‌ها، شعاع گوشه‌ها و تایپوگرافی',
    categoryId: 'topics',
    icon: 'Sliders',
    sections: [
      {
        id: 't-tok-system',
        title: 'شبکه و توکن‌ها',
        items: [
          { id: 'dt1', text: 'آیا فواصل (Padding / Margin) بر اساس شبکه ۸ پیکسلی (8pt Grid System) پایه ریزی شده‌اند؟', isEssential: true },
          { id: 'dt2', text: 'آیا تمام رنگ‌ها و فونت‌ها از طریق متغیرهای مرکزی CSS / Tailwind مدیریت می‌شوند؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['color-system', 'typography']
  }
];
