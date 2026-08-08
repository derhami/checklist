import { Checklist } from '../types';

export const flowsChecklists: Checklist[] = [
  {
    id: 'f-login',
    slug: 'login-flow',
    title: 'ورود به حساب کاربری (Login Flow)',
    titleEn: 'Login Flow',
    description: 'جریان ورود با ایمیل/شماره، رمز عبور، ورود یک‌بارمصرف (OTP) و ورود اجتماعی',
    categoryId: 'flows',
    icon: 'LogIn',
    featured: true,
    sections: [
      {
        id: 'f-log-input',
        title: 'ورودی‌ها و اعتبارسنجی',
        items: [
          { id: 'fl1', text: 'آیا امکان ورود با شماره همراه (OTP) یا ایمیل/رمز عبور وجود دارد؟', isEssential: true },
          { id: 'fl2', text: 'آیا لینک «رمز عبور را فراموش کرده‌اید؟» در نزدیک‌ترین فاصله به فیلد رمز قرار دارد؟', isEssential: true },
          { id: 'fl3', text: 'آیا امکان مشاهده/مخفی کردن رمز عبور (Eye icon) فراهم است؟' },
          { id: 'fl4', text: 'آیا گزینه «مرا به خاطر بسپار» (Remember Me) وجود دارد؟' },
          { id: 'fl5', text: 'آیا خطاهای ورود (نام کاربری یا رمز اشتباه) بدون افشای دقیق جزئیات امنیتی نمایش داده می‌شوند؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['signup-flow', 'password-reset-flow']
  },
  {
    id: 'f-signup',
    slug: 'signup-flow',
    title: 'ثبت‌نام (Sign Up Flow)',
    titleEn: 'Sign Up Flow',
    description: 'جذب کاربر جدید با حداقل فیلدها، سنجش قدرت رمز عبور و قوانین',
    categoryId: 'flows',
    icon: 'UserPlus',
    featured: true,
    sections: [
      {
        id: 'f-sgn-steps',
        title: 'مراحل ثبت‌نام',
        items: [
          { id: 'su1', text: 'آیا فیلدهای ثبت‌نام به حداقل ممکن (ترجیحاً فقط ایمیل/شماره در گام اول) کاهش یافته‌اند؟', isEssential: true },
          { id: 'su2', text: 'آیا میزان سختی و قوانین رمز عبور هم‌زمان با تایپ کاربر سنجیده می‌شود؟' },
          { id: 'su3', text: 'آیا پذیرش قوانین و مقررات با چک‌باکس یا متن شفاف قید شده است؟' },
          { id: 'su4', text: 'آیا لینک «قبلاً ثبت‌نام کرده‌اید؟ ورود» وجود دارد؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['login-flow', 'email-verification-flow']
  },
  {
    id: 'f-payment',
    slug: 'payment-flow',
    title: 'پرداخت و تسویه‌حساب (Payment Flow)',
    titleEn: 'Payment & Checkout Flow',
    description: 'فرآیند ثبت آدرس، کد تخفیف، انتخاب درگاه بانکی و دریافت رسید موفقیت',
    categoryId: 'flows',
    icon: 'CreditCard',
    featured: true,
    sections: [
      {
        id: 'f-pay-process',
        title: 'جریان پرداخت',
        items: [
          { id: 'py1', text: 'آیا فیلد اعمال کد تخفیف با بازخورد فوری مبالغ تخفیف داده شده کار می‌کند؟', isEssential: true },
          { id: 'py2', text: 'آیا قبل از انتقال به درگاه بانک، پیش‌فاکتور نهایی با تمام جزئیات نمایش داده می‌شود؟', isEssential: true },
          { id: 'py3', text: 'آیا در صورت ناموفق بودن پرداخت، علت خطا و دکمه «تلاش مجدد» ارائه می‌شود؟', isEssential: true },
          { id: 'py4', text: 'آیا شماره پیگیری خرید و فاکتور بلافاصله پس از پرداخت به کاربر داده می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['checkout-page', 'cart-management-flow']
  },
  {
    id: 'f-upload',
    slug: 'file-upload-flow',
    title: 'آپلود فایل (File Upload Flow)',
    titleEn: 'File Upload Flow',
    description: 'کشیدن و رها کردن (Drag & Drop)، درصد پیشرفت بارگذاری، اعتبارسنجی حجم و پسوند',
    categoryId: 'flows',
    icon: 'UploadCloud',
    sections: [
      {
        id: 'f-upl-validation',
        title: 'فرآیند و پسوندها',
        items: [
          { id: 'ul1', text: 'آیا حداکثر حجم مجاز و فرمت‌های قابل قبول (JPG, PNG, PDF) صریحاً قید شده‌اند؟', isEssential: true },
          { id: 'ul2', text: 'آیا امکان Drag & Drop همزمان با دکمه انتخاب فایل فراهم است؟' },
          { id: 'ul3', text: 'آیا نوار پیشرفت درصد آپلود (Progress Bar) به همراه امکان لغو وجود دارد؟', isEssential: true },
          { id: 'ul4', text: 'آیا پیش‌نمایش تصویر آپلود شده (Thumbnail) به همراه دکمه حذف ظاهر می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['toast-alert', 'form']
  },
  {
    id: 'f-delete-account',
    slug: 'account-deletion-flow',
    title: 'حذف حساب کاربری (Account Deletion Flow)',
    titleEn: 'Account Deletion Flow',
    description: 'تایید دو مرحله‌ای، هشدار عواقب پاک‌شدن داده‌ها و خروج امن',
    categoryId: 'flows',
    icon: 'Trash2',
    sections: [
      {
        id: 'f-del-safety',
        title: 'امنیتی و هشدارهای غیرقابل بازگشت',
        items: [
          { id: 'da1', text: 'آیا هشدار واضح مبنی بر غیرقابل بازگشت بودن حذف داده‌ها داده می‌شود؟', isEssential: true },
          { id: 'da2', text: 'آیا برای تایید نهایی از کاربر خواسته می‌شود عبارت خاصی یا رمز عبور خود را تایپ کند؟', isEssential: true },
          { id: 'da3', text: 'آیا گزینه «تعلیق موقت حساب» به عنوان جایگزین پیشنهاد داده می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['modal-dialog', 'form']
  },
  {
    id: 'f-password-reset',
    slug: 'password-reset-flow',
    title: 'بازیابی رمز عبور (Password Reset Flow)',
    titleEn: 'Password Reset Flow',
    description: 'ارسال لینک یا کد تایید، تنظیم رمز جدید و خروج از سایر دستگاه‌ها',
    categoryId: 'flows',
    icon: 'Key',
    sections: [
      {
        id: 'f-prs-steps',
        title: 'مراحل بازیابی',
        items: [
          { id: 'pr1', text: 'آیا پیام «لینک بازنشانی ارسال شد» حتی در صورت عدم وجود ایمیل برای حفظ امنیت کلی نمایش داده می‌شود؟', isEssential: true },
          { id: 'pr2', text: 'آیا کد یک‌بارمصرف (OTP) دارای زمان انقضا (مثلاً ۲ دقیقه) با شمارش معکوس است؟', isEssential: true },
          { id: 'pr3', text: 'آیا پس از تغییر موفق رمز، کاربر مستقیماً وارد حساب می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['login-flow', 'email-verification-flow']
  },
  {
    id: 'f-search-filter',
    slug: 'search-filter-flow',
    title: 'جستجو و فیلتر (Search & Filter Flow)',
    titleEn: 'Search & Filter Flow',
    description: 'جستجوی زنده، فیلترهای لایه‌ای، مرتب‌سازی و وضعیت عدم یافت نتیجه (Empty State)',
    categoryId: 'flows',
    icon: 'Search',
    sections: [
      {
        id: 'f-sf-logic',
        title: 'منطق فیلتر و نتایج',
        items: [
          { id: 'sf1', text: 'آیا نتایج جستجو به محض تایپ یا فشردن دکمه Enter فوراً به‌روز می‌شوند؟', isEssential: true },
          { id: 'sf2', text: 'آیا دکمه «پاک‌کردن همه فیلترها» هنگام فعال بودن فیلترها در دسترس است؟', isEssential: true },
          { id: 'sf3', text: 'آیا در صورت یافت نشدن نتیجه، عبارت جستجو شده نمایش داده شده و پیشنهادات اصلاحی ارائه می‌شود؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['search-bar', 'ecommerce-catalog', 'empty-states']
  },
  {
    id: 'f-wizard',
    slug: 'multi-step-wizard',
    title: 'فرم چندمرحله‌ای (Multi-step Wizard)',
    titleEn: 'Multi-step Wizard Flow',
    description: 'تقسیم فرم‌های طولانی به گام‌های منطقی، ذخیره خودکار و ناوبری قبلی/بعدی',
    categoryId: 'flows',
    icon: 'List',
    sections: [
      {
        id: 'f-wiz-nav',
        title: 'ناوبری گام‌ها',
        items: [
          { id: 'wz1', text: 'آیا نوار مراحل (Stepper) شماره گام و عنوان گام جاری را مشخص می‌سازد؟', isEssential: true },
          { id: 'wz2', text: 'آیا اطلاعات وارد شده در صورت بازگشت به مرحله قبل حفظ می‌شوند؟', isEssential: true },
          { id: 'wz3', text: 'آیا اعتبارسنجی هر مرحله قبل از رفتن به مرحله بعد انجام می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['form', 'onboarding-page']
  },
  {
    id: 'f-onboarding-flow',
    slug: 'onboarding-flow',
    title: 'جریان راه‌اندازی (Onboarding Flow)',
    titleEn: 'User Onboarding Flow',
    description: 'آشناسازی کاربر جدید با قابلیت‌های کلیدی و دریافت تنظیمات اولیه',
    categoryId: 'flows',
    icon: 'Compass',
    sections: [
      {
        id: 'f-obf-ux',
        title: 'تجربه راهنمایی',
        items: [
          { id: 'obf1', text: 'آیا تور راهنما (Interactive Tour) حداکثر شامل ۳ تا ۴ گام کلیدی است؟', isEssential: true },
          { id: 'obf2', text: 'آیا کاربر می‌تواند در هر لحظه تور راهنما را متوقف کرده و رد (Skip) کند؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['onboarding-page', 'dashboard-page']
  },
  {
    id: 'f-rating',
    slug: 'feedback-rating-flow',
    title: 'بازخورد و ثبت نظر (Feedback Flow)',
    titleEn: 'Feedback & Rating Flow',
    description: 'دریافت امتیاز (ستاره‌ای/NPS)، ثبت متن نظر و قدردانی از کاربر',
    categoryId: 'flows',
    icon: 'Star',
    sections: [
      {
        id: 'f-fb-steps',
        title: 'ثبت امتیاز و متن',
        items: [
          { id: 'fb1', text: 'آیا انتخاب امتیاز ستاره‌ای یا ایموجی ملموس و تعاملی است؟' },
          { id: 'fb2', text: 'آیا باکس متنی شرح علت امتیاز داوطلبانه (Optional) است؟', isEssential: true },
          { id: 'fb3', text: 'آیا پیام تشکر و قدردانی پس از ثبت نظر صادر می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['modal-dialog', 'toast-alert']
  },
  {
    id: 'f-verification',
    slug: 'email-verification-flow',
    title: 'تایید ایمیل و شماره (Verification Flow)',
    titleEn: 'Verification Flow',
    description: 'ارسال پیامک/ایمیل تایید، ورود کد ۶ رقمی و دکمه ارسال مجدد',
    categoryId: 'flows',
    icon: 'ShieldCheck',
    sections: [
      {
        id: 'f-vr-code',
        title: 'ورودی کد تایید',
        items: [
          { id: 'vf1', text: 'آیا ورودی کد تایید (OTP Input) خودکار روی خانه بعدی پرش می‌کند؟', isEssential: true },
          { id: 'vf2', text: 'آیا شمارش معکوس ارسال مجدد کد (مثلاً ۶۰ ثانیه) وجود دارد؟', isEssential: true },
          { id: 'vf3', text: 'آیا امکان ویرایش شماره تلفن یا ایمیل اشتباه تایپ شده فراهم است؟' },
        ]
      }
    ],
    relatedSlugs: ['signup-flow', 'login-flow']
  },
  {
    id: 'f-cart',
    slug: 'cart-management-flow',
    title: 'مدیرت سبد خرید (Cart Flow)',
    titleEn: 'Cart Management Flow',
    description: 'افزایش/کاهش تعداد کالا، حذف آیتم، نمایش هزینه ارسال و ورود به تسویه',
    categoryId: 'flows',
    icon: 'ShoppingCart',
    sections: [
      {
        id: 'f-crt-actions',
        title: 'اقدامات سبد خرید',
        items: [
          { id: 'ct1', text: 'آیا تغییر تعداد کالا با دکمه‌های + و - بلافاصله قیمت کل را بروز می‌کند؟', isEssential: true },
          { id: 'ct2', text: 'آیا قبل از حذف کالا از سبد خرید، تاییدیه یا قابلیت Undo سریع وجود دارد؟' },
          { id: 'ct3', text: 'آیا میزان مبلغ باقی‌مانده برای ارسال رایگان به کاربر نشان داده می‌شود؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['checkout-page', 'payment-flow']
  }
];
