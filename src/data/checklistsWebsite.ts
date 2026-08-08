import { Checklist } from '../types';

export const websiteChecklists: Checklist[] = [
  {
    id: 'w-landing',
    slug: 'landing-page',
    title: 'صفحه اصلی / لندینگ پیج',
    titleEn: 'Landing Page',
    description: 'چک‌لیست کامل الزامات صفحه فرود برای افزایش نرخ تبدیل و معرفی واضح محصول',
    categoryId: 'website',
    icon: 'LayoutGrid',
    featured: true,
    sections: [
      {
        id: 'w-landing-hero',
        title: 'بخش هدر و هیرو (Hero Section)',
        items: [
          { id: 'l1', text: 'آیا تیتر اصلی (H1) ارزش کلیدی محصول را در کمتر از ۵ ثانیه منتقل می‌کند؟', isEssential: true },
          { id: 'l2', text: 'آیا دکمه اقدام به عمل اصلی (Primary CTA) به صورت کاملاً برجسته و واضح دیده می‌شود؟', isEssential: true },
          { id: 'l3', text: 'آیا تصویر یا ویدیوی پیش‌نمایش محصول باکیفیت و مرتبط قرار گرفته است؟' },
          { id: 'l4', text: 'آیا زیرتیتر توصیفی (Subtitle) مکمل تیتر اصلی بوده و مبهم نیست؟' },
          { id: 'l5', text: 'آیا عناصر اثبات اجتماعی اولیه (مانند لوگوی مشتریان یا تعداد کاربران) در هیرو موجود است؟' },
        ]
      },
      {
        id: 'w-landing-body',
        title: 'بدنه و ارزش‌ها',
        items: [
          { id: 'l6', text: 'آیا مزایا و ویژگی‌های اصلی محصول به صورت کارت‌ها یا بخش‌های مجزا گروه‌بندی شده‌اند؟' },
          { id: 'l7', text: 'آیا از آیکون‌ها و تصاویر مرتبط برای هر ویژگی استفاده شده است؟' },
          { id: 'l8', text: 'آیا نحوه کارکرد سیستم (How It Works) به صورت ۳ یا ۴ گام ساده توضیح داده شده است؟' },
          { id: 'l9', text: 'آیا بخش نظرات مشتریان (Testimonials) همراه با اسم، عکس و سمت شغلی واقعی قرار دارد؟', isEssential: true },
        ]
      },
      {
        id: 'w-landing-footer',
        title: 'پایان‌بندی و تبدیل',
        items: [
          { id: 'l10', text: 'آیا یک دکمه CTA نهایی قبل از فوتر برای جذب کاربران آماده وجود دارد؟', isEssential: true },
          { id: 'l11', text: 'آیا فوتر شامل لینک‌های ضروری (تماس، حریم خصوصی، شبکه اجتماعی) است؟' },
          { id: 'l12', text: 'آیا سرعت بارگذاری اولیه صفحه کمتر از ۲.۵ ثانیه است؟' },
        ]
      }
    ],
    relatedSlugs: ['pricing-page', 'about-us', 'button']
  },
  {
    id: 'w-pricing',
    slug: 'pricing-page',
    title: 'صفحه قیمت‌گذاری',
    titleEn: 'Pricing Page',
    description: 'اصول شفافیت قیمت‌ها، مقایسه پلن‌ها و ترغیب کاربر به انتخاب پلن مناسب',
    categoryId: 'website',
    icon: 'CreditCard',
    featured: true,
    sections: [
      {
        id: 'w-pricing-cards',
        title: 'کارت‌های پلن‌ها',
        items: [
          { id: 'pr1', text: 'آیا پلن پیشنهادی (Most Popular) به طور واضح برجسته شده است؟', isEssential: true },
          { id: 'pr2', text: 'آیا واحد پولی و دوره زمانی (ماهانه/سالانه) شفاف است؟', isEssential: true },
          { id: 'pr3', text: 'آیا سوئیچ تخفیف پرداخت سالانه در بالای پلن‌ها قرار دارد؟' },
          { id: 'pr4', text: 'آیا لیست امکانات موجود و غایب در هر پلن به صورت چک‌مارک مشخص است؟' },
          { id: 'pr5', text: 'آیا دکمه خرید در هر پلن دارای متن اقدام مشخص است؟ (مثلاً «شروع دوره رایگان»)' },
        ]
      },
      {
        id: 'w-pricing-table',
        title: 'جدول مقایسه و سوالات',
        items: [
          { id: 'pr6', text: 'آیا جدول مقایسه تفکیکی برای جزئیات کامل فنی وجود دارد؟' },
          { id: 'pr7', text: 'آیا بخش سوالات متداول (FAQ) مربوط به پرداخت و لغو اشتراک در صفحه است؟', isEssential: true },
          { id: 'pr8', text: 'آیا ضمانت بازگشت وجه یا پشتیبانی اختصاصی قید شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['landing-page', 'faq-page', 'checkout-flow']
  },
  {
    id: 'w-about',
    slug: 'about-us',
    title: 'صفحه درباره ما',
    titleEn: 'About Us Page',
    description: 'ایجاد اعتماد، معرفی مأموریت، ارزش‌ها و اعضای تیم به مخاطب',
    categoryId: 'website',
    icon: 'Users',
    sections: [
      {
        id: 'w-about-content',
        title: 'داستان و ارزش‌ها',
        items: [
          { id: 'ab1', text: 'آیا مأموریت و چشم‌انداز (Mission & Vision) شرکت شفاف بیان شده است؟', isEssential: true },
          { id: 'ab2', text: 'آیا آمار و دستاوردهای کلیدی (مشتریان، سال‌های فعالیت) وجود دارد؟' },
          { id: 'ab3', text: 'آیا داستان شکل‌گیری و رویکرد متمایز برند شرح داده شده است؟' },
        ]
      },
      {
        id: 'w-about-team',
        title: 'تیم و اعتبار',
        items: [
          { id: 'ab4', text: 'آیا تصاویر واقعی اعضای تیم به همراه سمت و شبکه اجتماعی قرار دارد؟', isEssential: true },
          { id: 'ab5', text: 'آیا ارزش‌های محوری فرهنگ کاری (Core Values) درج شده‌اند؟' },
          { id: 'ab6', text: 'آیا دعوت به همکاری یا پیوند به فرصت‌های شغلی قرار داده شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['careers-page', 'contact-page']
  },
  {
    id: 'w-contact',
    slug: 'contact-page',
    title: 'صفحه تماس با ما',
    titleEn: 'Contact Page',
    description: 'تسهیل ارتباط کاربران با پشتیبانی، فروش و آدرس حضوری',
    categoryId: 'website',
    icon: 'Mail',
    sections: [
      {
        id: 'w-contact-info',
        title: 'اطلاعات و فرم',
        items: [
          { id: 'co1', text: 'آیا فرم تماس دارای فیلدهای نام، ایمیل، شماره تلفن و متن پیام است؟', isEssential: true },
          { id: 'co2', text: 'آیا آدرس دقیق، نقشه تعاملی و ساعات کاری قید شده است؟', isEssential: true },
          { id: 'co3', text: 'آیا شماره تماس، ایمیل و راه‌های ارتباطی اضطراری قابل کلیک هستند؟' },
          { id: 'co4', text: 'آیا پیام تایید ارسال (Success State) پس از ثبت فرم نمایش داده می‌شود؟' },
          { id: 'co5', text: 'آیا میانگین زمان پاسخگویی پشتیبانی قید شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['about-us', 'form']
  },
  {
    id: 'w-blog',
    slug: 'blog-article-page',
    title: 'صفحه مقاله و وبلاگ',
    titleEn: 'Blog & Article Page',
    description: 'خوانایی بالا، ساختار متنی استاندارد، اشتراک‌گذاری و مقالات مرتبط',
    categoryId: 'website',
    icon: 'FileText',
    sections: [
      {
        id: 'w-blog-typography',
        title: 'خوانایی و ساختار',
        items: [
          { id: 'bl1', text: 'آیا اندازه فونت متون اصلی حداقل ۱۶ پیکسل و ارتفاع خط بین ۱.۶ تا ۱.۸ است؟', isEssential: true },
          { id: 'bl2', text: 'آیا جدول محتوا (Table of Contents) برای مقالات طولانی وجود دارد؟' },
          { id: 'bl3', text: 'آیا نویسنده مقاله، تاریخ انتشار و زمان تقریبی مطالعه ذکر شده است؟' },
          { id: 'bl4', text: 'آیا تصاویر داخل مقاله دارای کاپشن و متن جایگزین (ALT) هستند؟' },
        ]
      },
      {
        id: 'w-blog-engagement',
        title: 'تعامل و اشتراک',
        items: [
          { id: 'bl5', text: 'آیا دکمه‌های اشتراک‌گذاری در شبکه‌های اجتماعی همیشه در دسترس هستند؟' },
          { id: 'bl6', text: 'آیا بخش مقالات مرتبط در انتهای مقاله وجود دارد؟', isEssential: true },
          { id: 'bl7', text: 'آیا امکان ثبت نظر یا فرم اشتراک در خبرنامه قرار دارد؟' },
        ]
      }
    ],
    relatedSlugs: ['landing-page', 'seo-meta']
  },
  {
    id: 'w-404',
    slug: '404-error-page',
    title: 'صفحه ۴۰۴ و مدیریت خطا',
    titleEn: '404 Error Page',
    description: 'راهنمایی کاربر گم‌شده و هدایت مجدد به بخش‌های اصلی سایت',
    categoryId: 'website',
    icon: 'AlertTriangle',
    sections: [
      {
        id: 'w-404-main',
        title: 'تجربه کاربری ۴۰۴',
        items: [
          { id: 'err1', text: 'آیا علت بروز خطا با لحنی دوستانه و غیرپیچیده توضیح داده شده است؟', isEssential: true },
          { id: 'err2', text: 'آیا دکمه واضح «بازگشت به صفحه اصلی» وجود دارد؟', isEssential: true },
          { id: 'err3', text: 'آیا باکس جستجو برای یافتن صفحه موردنظر در ۴۰۴ قرار گرفته است؟' },
          { id: 'err4', text: 'آیا لینک به محبوب‌ترین صفحات سایت ارائه شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['empty-states', 'landing-page']
  },
  {
    id: 'w-dashboard',
    slug: 'dashboard-page',
    title: 'داشبورد کاربر',
    titleEn: 'User Dashboard',
    description: 'نمایش خلاصه اطلاعات، معیارهای کلیدی و دسترسی سریع به ابزارها',
    categoryId: 'website',
    icon: 'Grid',
    sections: [
      {
        id: 'w-dash-layout',
        title: 'چیدمان و اطلاعات',
        items: [
          { id: 'db1', text: 'آیا مهم‌ترین کارت‌های آماری (KPIs) در بالای صفحه قرار دارند؟', isEssential: true },
          { id: 'db2', text: 'آیا منوی جانبی (Sidebar) یا هدر دسترسی‌های اصلی را سریع می‌سازد؟' },
          { id: 'db3', text: 'آیا پیام خوش‌آمدگویی شخص‌سازی شده به کاربر دیده می‌شود؟' },
          { id: 'db4', text: 'آیا وضعیت بارگذاری (Skeleton Loading) هنگام دریافت داده‌ها وجود دارد؟', isEssential: true },
          { id: 'db5', text: 'آیا دکمه‌های میانبر برای اقدامات سریع (Quick Actions) قرار دارد؟' },
        ]
      }
    ],
    relatedSlugs: ['navigation', 'table', 'card']
  },
  {
    id: 'w-catalog',
    slug: 'ecommerce-catalog',
    title: 'فهرست محصولات فروشگاهی',
    titleEn: 'E-commerce Catalog',
    description: 'تجربه جستجو، فیلترسازی، مرتب‌سازی و نمایش شبکه‌ای کارت‌های محصول',
    categoryId: 'website',
    icon: 'ShoppingBag',
    sections: [
      {
        id: 'w-cat-filter',
        title: 'فیلتر و جستجو',
        items: [
          { id: 'ec1', text: 'آیا فیلترهای اعمال‌شده به صورت تگ‌های قابل حذف نمایش داده می‌شوند؟', isEssential: true },
          { id: 'ec2', text: 'آیا مرتب‌سازی بر اساس قیمت، جدیدترین و پرفروش‌ترین‌ها موجود است؟' },
          { id: 'ec3', text: 'آیا تعداد محصولات یافت‌شده با تغییر فیلتر بلافاصله بروز می‌شود؟' },
        ]
      },
      {
        id: 'w-cat-cards',
        title: 'کارت‌های محصول',
        items: [
          { id: 'ec4', text: 'آیا تصویر محصول شفاف، باکیفیت و با نسبت ابعاد یکسان است؟' },
          { id: 'ec5', text: 'آیا قیمت اصلی، قیمت با تخفیف و درصد تخفیف مشخص است؟', isEssential: true },
          { id: 'ec6', text: 'آیا دکمه افزودن به سبد خرید یا علاقه‌مندی‌ها روی کارت وجود دارد؟' },
          { id: 'ec7', text: 'آیا وضعیت موجودی کالا (ناموجود/محدود) شفاف است؟' },
        ]
      }
    ],
    relatedSlugs: ['product-detail', 'search-filter-flow', 'card']
  },
  {
    id: 'w-pdp',
    slug: 'product-detail',
    title: 'صفحه محصول (PDP)',
    titleEn: 'Product Detail Page',
    description: 'ارائه کامل تصاویر، گالری، ویژگی‌ها، انتخاب متغیرها و دکمه خرید',
    categoryId: 'website',
    icon: 'Package',
    featured: true,
    sections: [
      {
        id: 'w-pdp-main',
        title: 'گالری و دکمه خرید',
        items: [
          { id: 'pdp1', text: 'آیا گالری تصویر دارای قابلیت زوم و نمایش چند زاویه است؟', isEssential: true },
          { id: 'pdp2', text: 'آیا دکمه «افزودن به سبد خرید» همیشه در دید کاربر (مخصوصاً موبایل Sticky) است؟', isEssential: true },
          { id: 'pdp3', text: 'آیا انتخاب رنگ، سایز و گارانتی به شکل واضح و خطاسنجی شده است؟' },
          { id: 'pdp4', text: 'آیا زمان تحویل و هزینه ارسال به‌طور دقیق قید شده است؟' },
          { id: 'pdp5', text: 'آیا جدول مشخصات فنی و امتیاز خریداران وجود دارد؟' },
        ]
      }
    ],
    relatedSlugs: ['ecommerce-catalog', 'checkout-flow', 'tabs']
  },
  {
    id: 'w-portfolio',
    slug: 'portfolio-page',
    title: 'صفحه نمونه‌کارها (Portfolio)',
    titleEn: 'Portfolio Page',
    description: 'نمایش کیس‌استادی‌ها، نتایج پروژه‌ها و مهارت‌های طراح یا آژانس',
    categoryId: 'website',
    icon: 'Briefcase',
    sections: [
      {
        id: 'w-port-showcase',
        title: 'نمایش پروژه‌ها',
        items: [
          { id: 'po1', text: 'آیا پروژه‌ها بر اساس دسته‌بندی (UI/UX، برندینگ، وب) قابل فیلتر هستند؟' },
          { id: 'po2', text: 'آیا برای هر پروژه، مسئله (Problem)، راه‌حل (Solution) و نتیجه (Results) شرح داده شده؟', isEssential: true },
          { id: 'po3', text: 'آیا تصاویر پیش از طراحی و پس از طراحی (Before / After) قرار گرفته است؟' },
          { id: 'po4', text: 'آیا نقش فردی و ابزارهای استفاده‌شده در پروژه ذکر شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['landing-page', 'about-us']
  },
  {
    id: 'w-checkout-page',
    slug: 'checkout-page',
    title: 'صفحه پرداخت و تسویه',
    titleEn: 'Checkout Page',
    description: 'کاهش انصراف از خرید، مراحل شفاف ثبت آدرس و انتخاب درگاه پرداخت',
    categoryId: 'website',
    icon: 'ShoppingCart',
    sections: [
      {
        id: 'w-chk-steps',
        title: 'مراحل و خلاصه سفارش',
        items: [
          { id: 'ch1', text: 'آیا خلاصه سبد خرید شامل قیمت کل، مالیات و تخفیف همواره دیده می‌شود؟', isEssential: true },
          { id: 'ch2', text: 'آیا امکان خرید بدون ثبت‌نام پیشرفته (Guest Checkout) فراهم است؟', isEssential: true },
          { id: 'ch3', text: 'آیا فیلدهای فرم آدرس بر اساس استان و شهر فیلتر هوشمند می‌شوند؟' },
          { id: 'ch4', text: 'آیا نمادهای اعتماد و امنیت پرداخت در نزدیکی دکمه پرداخت قرار دارند؟' },
        ]
      }
    ],
    relatedSlugs: ['product-detail', 'payment-flow']
  },
  {
    id: 'w-onboarding',
    slug: 'onboarding-page',
    title: 'صفحه خوش‌آمد و آنبوردینگ',
    titleEn: 'Onboarding Page',
    description: 'هدایت گام‌به‌گام کاربر جدید برای تکمیل پروفایل و آشنایی با برنامه',
    categoryId: 'website',
    icon: 'Compass',
    sections: [
      {
        id: 'w-onb-flow',
        title: 'مراحل آنبوردینگ',
        items: [
          { id: 'ob1', text: 'آیا نوار پیشرفت مراحل (Step Wizard) به کاربر میزان باقی‌مانده را نشان می‌دهد؟', isEssential: true },
          { id: 'ob2', text: 'آیا امکان رد کردن (Skip) یا بازگشت به مرحله قبل وجود دارد؟' },
          { id: 'ob3', text: 'آیا سوالات هر مرحله کوتاه و ترجیحاً گزینه‌ای هستند؟' },
          { id: 'ob4', text: 'آیا در انتهای آنبوردینگ یک پیام موفقیت انگیزشی نمایش داده می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['signup-flow', 'dashboard-page']
  },
  {
    id: 'w-faq',
    slug: 'faq-page',
    title: 'صفحه سوالات متداول (FAQ)',
    titleEn: 'FAQ Page',
    description: 'دسته‌بندی پرسش‌ها، باکس جستجوی آکاردئونی و ارجاع به پشتیبانی',
    categoryId: 'website',
    icon: 'HelpCircle',
    sections: [
      {
        id: 'w-faq-structure',
        title: 'ساختار و جستجو',
        items: [
          { id: 'fq1', text: 'آیا سوالات بر اساس موضوعات (پرداخت، حساب کاربری، فنی) دسته‌بندی شده‌اند؟', isEssential: true },
          { id: 'fq2', text: 'آیا باکس جستجوی سریع در بالای صفحه سوالات قرار دارد؟' },
          { id: 'fq3', text: 'آیا پاسخ‌ها از کامپوننت آکاردئون خوانا بهره می‌برند؟' },
          { id: 'fq4', text: 'آیا در انتهای صفحه بخش «پاسخ خود را پیدا نکردید؟ تماس بگیرید» موجود است؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['accordion', 'contact-page']
  },
  {
    id: 'w-terms',
    slug: 'terms-privacy-page',
    title: 'صفحه قوانین و حریم خصوصی',
    titleEn: 'Terms & Privacy Page',
    description: 'شفافیت حقوقی، ساختار تیتربندی شده، تاریخ آخرین بروزرسانی',
    categoryId: 'website',
    icon: 'Shield',
    sections: [
      {
        id: 'w-trm-legal',
        title: 'الزامات حقوقی',
        items: [
          { id: 'tp1', text: 'آیا تاریخ آخرین ویرایش سند در بالای صفحه قید شده است؟', isEssential: true },
          { id: 'tp2', text: 'آیا فهرست عناوین در کنار صفحه برای پرش سریع به بندها وجود دارد؟' },
          { id: 'tp3', text: 'آیا نحوه جمع‌آوری و استفاده از کوکی‌ها و داده‌های کاربر صراحتاً بیان شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['landing-page', 'footer']
  },
  {
    id: 'w-careers',
    slug: 'careers-page',
    title: 'صفحه فرصت‌های شغلی (Careers)',
    titleEn: 'Careers Page',
    description: 'جذب استعدادها، معرفی مزایای شرکت و فهرست موقعیت‌های باز',
    categoryId: 'website',
    icon: 'UserPlus',
    sections: [
      {
        id: 'w-car-jobs',
        title: 'فهرست مشاغل',
        items: [
          { id: 'cr1', text: 'آیا موقعیت‌های شغلی بر اساس دپارتمان (فنی، طراحی، مارکتینگ) فیلتر می‌شوند؟', isEssential: true },
          { id: 'cr2', text: 'آیا نوع همکاری (حضوری/دورکاری/پاره‌وقت) برای هر شغل قید شده است؟' },
          { id: 'cr3', text: 'آیا فرم یا دکمه ارسال رزومه به شکل بسیار ساده در دسترس است؟' },
        ]
      }
    ],
    relatedSlugs: ['about-us', 'form']
  }
];
