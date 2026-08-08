import { Checklist } from '../types';

export const componentsChecklists: Checklist[] = [
  {
    id: 'c-button',
    slug: 'button',
    title: 'دکمه (Button)',
    titleEn: 'Button Component',
    description: 'عنصر اصلی تعامل کاربر؛ تمام حالت‌ها، سایزها، کنتراست و دسترس‌پذیری دکمه',
    categoryId: 'components',
    icon: 'MousePointer',
    featured: true,
    sections: [
      {
        id: 'c-btn-states',
        title: 'حالت‌های تعاملی (Interactive States)',
        items: [
          { id: 'btn1', text: 'آیا حالت Hover (شناور بودن ماوس) دارای تغییر رنگ ملموس است؟', isEssential: true },
          { id: 'btn2', text: 'آیا حالت Focus (فوکوس کیبورد) با حاشیه یا outline واضح مشخص شده است؟', isEssential: true },
          { id: 'btn3', text: 'آیا حالت Active/Pressed (فشار دادن دکمه) بازخورد بصری ارائه می‌دهد؟' },
          { id: 'btn4', text: 'آیا حالت Disabled (غیرفعال) با وضوح کم، بدون کورسور pointer و غیرقابل کلیک است؟', isEssential: true },
          { id: 'btn5', text: 'آیا حالت Loading (در حال پردازش) با آیکون اسپینر و غیرفعال شدن کلیک همراه است؟' },
        ]
      },
      {
        id: 'c-btn-hierarchy',
        title: 'سلسله‌مراتب و تایپوگرافی',
        items: [
          { id: 'btn6', text: 'آیا متن دکمه صریح و با فعل عملیاتی است؟ (مثلاً «ثبت سفارش» به‌جای «تایید»)', isEssential: true },
          { id: 'btn7', text: 'آیا بین دکمه اصلی (Primary)، ثانویه (Secondary) و متنی (Text) تمایز بصری وجود دارد؟' },
          { id: 'btn8', text: 'آیا ابعاد لمسی (Touch Target) در موبایل حداقل ۴۴×۴۴ پیکسل است؟' },
          { id: 'btn9', text: 'آیا متن دکمه تنها در یک سطر باقی می‌ماند و هیچ‌گاه دو سطری نمی‌شود؟' },
          { id: 'btn10', text: 'آیا آیکون‌های دکمه در جهت مناسب RTL/LTR قرار دارند؟' },
        ]
      }
    ],
    relatedSlugs: ['form', 'input-field', 'modal']
  },
  {
    id: 'c-card',
    slug: 'card',
    title: 'کارت (Card)',
    titleEn: 'Card Component',
    description: 'ظرف گروه‌بندی محتوای مرتبط؛ حاشیه‌ها، شعاع شعاعی، کلیک‌پذیری و چیدمان',
    categoryId: 'components',
    icon: 'Square',
    featured: true,
    sections: [
      {
        id: 'c-card-layout',
        title: 'ساختار و تعامل',
        items: [
          { id: 'crd1', text: 'آیا پدینگ داخلی کارت متناسب با محتوا و حداقل ۱۶ پیکسل است؟', isEssential: true },
          { id: 'crd2', text: 'آیا کل کارت کلیک‌پذیر است یا فقط لینک داخل آن؟ (رفتار باید یکپارچه باشد)' },
          { id: 'crd3', text: 'آیا شعاع گوشه‌ها (Border Radius) با سیستم طراحی برنامه همخوانی دارد؟' },
          { id: 'crd4', text: 'آیا از کارت‌های توی در تو (Nested Cards) اجتناب شده است؟', isEssential: true },
          { id: 'crd5', text: 'آیا حالت Hover کارت با سایه ملایم یا حاشیه پررنگ‌تر مشخص می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['button', 'badge-tag']
  },
  {
    id: 'c-modal',
    slug: 'modal-dialog',
    title: 'مودال / پنجره شناور (Modal)',
    titleEn: 'Modal / Dialog',
    description: 'نمایش اطلاعات اضطراری، تایید عملیات یا فرم‌های بدون خروج از صفحه',
    categoryId: 'components',
    icon: 'Maximize2',
    featured: true,
    sections: [
      {
        id: 'c-mod-ux',
        title: 'تجربه کاربری و لایه لایه بودن',
        items: [
          { id: 'md1', text: 'آیا پس‌زمینه نیمه‌شفاف (Backdrop) پشت مودال را تیره می‌سازد؟', isEssential: true },
          { id: 'md2', text: 'آیا دکمه بستن (X) در گوشه بالا به همراه کلید Esc کیبورد فعال است؟', isEssential: true },
          { id: 'md3', text: 'آیا کلیک روی پس‌زمینه بیرون مودال باعث بستن آن می‌شود؟' },
          { id: 'md4', text: 'آیا اسکرول صفحه اصلی (Body Scroll Lock) هنگام باز بودن مودال غیرفعال است؟', isEssential: true },
          { id: 'md5', text: 'آیا عنوان مودال شفاف است و دکمه‌های اقدام اصلی و انصراف واضح هستند؟' },
        ]
      }
    ],
    relatedSlugs: ['button', 'toast-alert']
  },
  {
    id: 'c-form',
    slug: 'form',
    title: 'فرم (Form)',
    titleEn: 'Form Component',
    description: 'ساختار کلی فرم، لیبل‌ها، گروه ورودی‌ها، خطاسنجی و دکمه ثبت',
    categoryId: 'components',
    icon: 'Edit3',
    featured: true,
    sections: [
      {
        id: 'c-form-validation',
        title: 'برچسب‌گذاری و اعتباربخشی',
        items: [
          { id: 'fm1', text: 'آیا هر فیلد ورودی دارای لیبل (Label) ثابت و خوانا در بالای فیلد است؟', isEssential: true },
          { id: 'fm2', text: 'آیا فیلدهای اجباری با علامت مشخص (مانند ستاره سرخ *) متمایز شده‌اند؟' },
          { id: 'fm3', text: 'آیا پیام‌های خطا بلافاصله زیر همان فیلد با رنگ قرمز و توضیح مشخص ظاهر می‌شوند؟', isEssential: true },
          { id: 'fm4', text: 'آیا کلید Enter کیبورد فرم را ارسال می‌کند؟' },
          { id: 'fm5', text: 'آیا دکمه ارسال فرم تا زمان تکمیل نشدن فیلدهای الزامی واضح مدیریت می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['input-field', 'button', 'checkbox']
  },
  {
    id: 'c-input',
    slug: 'input-field',
    title: 'فیلد ورودی متن (Input Field)',
    titleEn: 'Input Field',
    description: 'انواع فیلدها، پلیس‌هولدر، حالت فوکوس، پاک‌کردن سریع و آیکون‌ها',
    categoryId: 'components',
    icon: 'Type',
    sections: [
      {
        id: 'c-inp-usability',
        title: 'کارابایی ورودی‌ها',
        items: [
          { id: 'inp1', text: 'آیا نوع input (مانند email, tel, number) جهت باز شدن کیبورد مناسب در موبایل تنظیم شده است؟', isEssential: true },
          { id: 'inp2', text: 'آیا متن Placeholder کم‌رنگ‌تر از متن اصلی کاربر است و به جای لیبل استفاده نشده؟', isEssential: true },
          { id: 'inp3', text: 'آیا حالت Focus فیلد حاشیه مشخصی ایجاد می‌کند؟' },
          { id: 'inp4', text: 'آیا برای فیلد رمز عبور، آیکون چشم (Toggle Password Visibility) وجود دارد؟' },
          { id: 'inp5', text: 'آیا قابلیت Auto-fill برای ایمیل و نام کاربری فعال است؟' },
        ]
      }
    ],
    relatedSlugs: ['form', 'search-bar']
  },
  {
    id: 'c-nav',
    slug: 'navigation',
    title: 'منو و ناوبری (Navigation)',
    titleEn: 'Navbar & Navigation',
    description: 'هدر سایت، لینک‌های فعال، منوی همبرگری موبایل و دراپ‌داون‌ها',
    categoryId: 'components',
    icon: 'Menu',
    sections: [
      {
        id: 'c-nav-main',
        title: 'ناوبری دسکتاپ و موبایل',
        items: [
          { id: 'nav1', text: 'آیا صفحه فعال حال حاضر (Active Link) در منو برجسته شده است؟', isEssential: true },
          { id: 'nav2', text: 'آیا منوی موبایل (Drawer/Hamburger) به راحتی باز و بسته می‌شود؟', isEssential: true },
          { id: 'nav3', text: 'آیا لوگوی برند در سمت راست (در RTL) قرار دارد و کلیک روی آن به صفحه اصلی می‌رود؟' },
          { id: 'nav4', text: 'آیا منوی Sticky هدر هنگام اسکرول به پایین به آرامی در دسترس می‌ماند؟' },
        ]
      }
    ],
    relatedSlugs: ['dropdown-select', 'search-bar']
  },
  {
    id: 'c-tabs',
    slug: 'tabs',
    title: 'تب‌ها (Tabs)',
    titleEn: 'Tabs Component',
    description: 'سویچ بین محتواهای مختلف در یک صفحه بدون بارگذاری مجدد',
    categoryId: 'components',
    icon: 'Folder',
    sections: [
      {
        id: 'c-tabs-ux',
        title: 'تب‌های محتوایی',
        items: [
          { id: 'tb1', text: 'آیا تب فعال با خط زیرین، رنگ متمایز یا پس‌زمینه واضح شده است؟', isEssential: true },
          { id: 'tb2', text: 'آیا تعداد تب‌ها محدود است و در موبایل قابلیت اسکرول افقی دارند؟' },
          { id: 'tb3', text: 'آیا تغییر تب بدون ریلود صفحه و با سرعت بالا انجام می‌شود؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['card', 'table']
  },
  {
    id: 'c-table',
    slug: 'table',
    title: 'جدول داده‌ها (Table)',
    titleEn: 'Data Table',
    description: 'نمایش لیست‌های داده‌ای پیچیده، مرتب‌سازی، صفحه‌بندی و واکنش‌گرایی',
    categoryId: 'components',
    icon: 'Table',
    sections: [
      {
        id: 'c-tbl-design',
        title: 'جدول و واکنش‌گرایی',
        items: [
          { id: 'tbl1', text: 'آیا عناوین ستون‌ها ثابت (Sticky Header) هنگام اسکرول هستند؟' },
          { id: 'tbl2', text: 'آیا جدول در سایز موبایل به اسکرول افقی روان یا کارت‌های عمودی تبدیل می‌شود؟', isEssential: true },
          { id: 'tbl3', text: 'آیا امکان مرتب‌سازی (Sort) ستون‌ها با کلیک روی هدر ستون وجود دارد؟' },
          { id: 'tbl4', text: 'آیا کنترل صفحه‌بندی (Pagination) یا اسکرول نامحدود ارائه شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['dropdown-select', 'badge-tag']
  },
  {
    id: 'c-toast',
    slug: 'toast-alert',
    title: 'اعلان و توست (Toast & Alert)',
    titleEn: 'Toast Notification & Alert',
    description: 'پیام‌های موفقیت، خطا، هشدار و اطلاع‌رسانی موقت یا دائم',
    categoryId: 'components',
    icon: 'Bell',
    sections: [
      {
        id: 'c-tst-feedback',
        title: 'بازخورد سیستم',
        items: [
          { id: 'ts1', text: 'آیا رنگ توست با نوع پیام همخوانی دارد؟ (سبز برای موفقیت، قرمز برای خطا)', isEssential: true },
          { id: 'ts2', text: 'آیا توست پس از ۳ تا ۵ ثانیه به صورت خودکار بسته می‌شود؟' },
          { id: 'ts3', text: 'آیا دکمه بستن دستی (X) روی توست قرار داده شده است؟' },
          { id: 'ts4', text: 'آیا توست‌ها محتوای حیاتی صفحه را نمی‌پوشانند؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['modal-dialog', 'button']
  },
  {
    id: 'c-tooltip',
    slug: 'tooltip',
    title: 'توضیح شناور (Tooltip)',
    titleEn: 'Tooltip Component',
    description: 'راهنمای متنی کوتاه هنگام Hover یا Focus روی آیکون‌ها و دکمه‌ها',
    categoryId: 'components',
    icon: 'HelpCircle',
    sections: [
      {
        id: 'c-ttp-behavior',
        title: 'رفتار تول‌تیپ',
        items: [
          { id: 'tt1', text: 'آیا متن تول‌تیپ کوتاه، مفید و بدون اطلاعات حیاتی اصلی است؟', isEssential: true },
          { id: 'tt2', text: 'آیا تول‌تیپ با تاخیر جزیی (مثلاً ۳۰۰ میلی‌ثانیه) باز می‌شود تا مزاحم نباشد؟' },
          { id: 'tt3', text: 'آیا برای آیکون‌های بدون متن دکمه‌ها حتما تول‌تیپ قرار داده شده است؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['button', 'iconography']
  },
  {
    id: 'c-checkbox',
    slug: 'checkbox',
    title: 'چک‌باکس (Checkbox)',
    titleEn: 'Checkbox Component',
    description: 'انتخاب چندگزینه‌ای، حالت انتخاب‌شده، انتخاب‌نشده و نیمه‌فعال (Indeterminate)',
    categoryId: 'components',
    icon: 'CheckSquare',
    sections: [
      {
        id: 'c-chk-states',
        title: 'حالت‌ها و برچسب',
        items: [
          { id: 'cb1', text: 'آیا کلیک روی متن لیبل کنار چک‌باکس نیز آن را فعال می‌کند؟', isEssential: true },
          { id: 'cb2', text: 'آیا حالت انتخاب همه (Select All) از حالت نیمه‌فعال (Indeterminate) پشتیبانی می‌کند؟' },
          { id: 'cb3', text: 'آیا سایز چک‌باکس در موبایل برای لمس آسان مناسب است؟' },
        ]
      }
    ],
    relatedSlugs: ['radio-button', 'toggle-switch']
  },
  {
    id: 'c-radio',
    slug: 'radio-button',
    title: 'دکمه رادیویی (Radio Button)',
    titleEn: 'Radio Button',
    description: 'انتخاب انحصاری تک گزینه‌ای از بین چند گزینه مشخص',
    categoryId: 'components',
    icon: 'Disc',
    sections: [
      {
        id: 'c-rad-usage',
        title: 'اصول استفاده',
        items: [
          { id: 'rd1', text: 'آیا فقط یک گزینه در گروه رادیویی می‌تواند انتخاب شود؟', isEssential: true },
          { id: 'rd2', text: 'آیا گزینه‌ها به صورت عمودی زیر هم چینش شده‌اند تا خوانایی بالایی داشته باشند؟' },
          { id: 'rd3', text: 'آیا یک گزینه پیش‌فرض (Default Option) انتخاب شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['checkbox', 'toggle-switch']
  },
  {
    id: 'c-toggle',
    slug: 'toggle-switch',
    title: 'سوئیچ (Toggle / Switch)',
    titleEn: 'Toggle Switch',
    description: 'اعمال آنی تغییرات روشن/خاموش بدون نیاز به دکمه ذخیره',
    categoryId: 'components',
    icon: 'ToggleLeft',
    sections: [
      {
        id: 'c-tgl-ux',
        title: 'رفتار سوئیچ',
        items: [
          { id: 'tg1', text: 'آیا تغییر حالت سوئیچ بلافاصله اعمال می‌شود و نیاز به دکمه ثبت ندارد؟', isEssential: true },
          { id: 'tg2', text: 'آیا وضعیت روشن (On) با رنگ فعال شاخص شده است؟' },
          { id: 'tg3', text: 'آیا متن لیبل توضیح می‌دهد روشن شدن سوئیچ چه تاثیری دارد؟' },
        ]
      }
    ],
    relatedSlugs: ['checkbox', 'radio-button']
  },
  {
    id: 'c-accordion',
    slug: 'accordion',
    title: 'آکاردئون (Accordion)',
    titleEn: 'Accordion Component',
    description: 'باز و بستن بخش‌های متنی برای مدیریت فضای صفحه',
    categoryId: 'components',
    icon: 'ChevronDown',
    sections: [
      {
        id: 'c-acc-behavior',
        title: 'تعامل و آیکون',
        items: [
          { id: 'ac1', text: 'آیا آیکون فلش (Chevron) هنگام باز شدن آکاردئون می‌چرخد؟', isEssential: true },
          { id: 'ac2', text: 'آیا کل سطر تیتر آکاردئون کلیک‌پذیر است؟', isEssential: true },
          { id: 'ac3', text: 'آیا انیمیشن باز شدن آکاردئون نرم و بدون پرش ناگهانی است؟' },
        ]
      }
    ],
    relatedSlugs: ['faq-page', 'card']
  },
  {
    id: 'c-carousel',
    slug: 'carousel-slider',
    title: 'اسلایدر (Carousel / Slider)',
    titleEn: 'Carousel Component',
    description: 'نمایش افقی تصاویر یا کارت‌ها همراه با کنترل‌های بعدی/قبلی و نقاط ناوبری',
    categoryId: 'components',
    icon: 'Sliders',
    sections: [
      {
        id: 'c-car-control',
        title: 'کنترل اسلایدر',
        items: [
          { id: 'cs1', text: 'آیا دکمه‌های بعدی و قبلی در دسکتاپ و ژست سوایپ (Swipe) در موبایل کار می‌کنند؟', isEssential: true },
          { id: 'cs2', text: 'آیا در اسلاید خودکار (Auto-play)، با قرار گرفتن ماوس اسلایدر متوقف می‌شود؟', isEssential: true },
          { id: 'cs3', text: 'آیا نقاط نشان‌دهنده موقعیت (Pagination Dots) قابل کلیک هستند؟' },
        ]
      }
    ],
    relatedSlugs: ['card', 'product-detail']
  },
  {
    id: 'c-avatar',
    slug: 'avatar',
    title: 'تصویر پروفایل (Avatar)',
    titleEn: 'Avatar Component',
    description: 'نمایش عکس کاربر، حروف ابتدایی نام (Initials) و وضعیت آنلاین/آفلاین',
    categoryId: 'components',
    icon: 'User',
    sections: [
      {
        id: 'c-ava-fallback',
        title: 'حالت‌های جایگزین',
        items: [
          { id: 'av1', text: 'آیا در صورت بارگذاری نشدن تصویر، حروف اول نام کاربر نمایش داده می‌شود؟', isEssential: true },
          { id: 'av2', text: 'آیا نشانگر وضعیت آنلاین/آفلاین در گوشه آواتار جانمایی شده است؟' },
          { id: 'av3', text: 'آیا شعاع دایره‌ای یا گرد گوشه‌ها متناسب با کل سیستم است؟' },
        ]
      }
    ],
    relatedSlugs: ['badge-tag', 'dashboard-page']
  },
  {
    id: 'c-badge',
    slug: 'badge-tag',
    title: 'برچسب و مدال (Badge / Tag)',
    titleEn: 'Badge & Tag',
    description: 'نمایش وضعیت، دسته‌بندی، شمارنده اعلان یا برچسب‌های قابل حذف',
    categoryId: 'components',
    icon: 'Tag',
    sections: [
      {
        id: 'c-bdg-types',
        title: 'رنگ و اندازه',
        items: [
          { id: 'bg1', text: 'آیا رنگ بَج با مفهوم آن (موفقیت، اخطار، اطلاع‌رسانی) تطابق دارد؟', isEssential: true },
          { id: 'bg2', text: 'آیا متن بَج کوتاه (۱ تا ۲ کلمه) بوده و نشکسته است؟', isEssential: true },
          { id: 'bg3', text: 'آیا تگ‌های قابل حذف دارای آیکون کوچک ضربدر (X) هستند؟' },
        ]
      }
    ],
    relatedSlugs: ['card', 'search-filter-flow']
  },
  {
    id: 'c-dropdown',
    slug: 'dropdown-select',
    title: 'منوی کشویی (Dropdown / Select)',
    titleEn: 'Dropdown Select',
    description: 'انتخاب یک یا چند گزینه از لیست بازشونده، همراه با قابلیت جستجو',
    categoryId: 'components',
    icon: 'ChevronDown',
    sections: [
      {
        id: 'c-drp-usability',
        title: 'سهولت استفاده',
        items: [
          { id: 'dr1', text: 'آیا در صورت زیاد بودن گزینه‌ها، باکس جستجو درون دراپ‌داون قرار دارد؟', isEssential: true },
          { id: 'dr2', text: 'آیا گزینه انتخاب‌شده با چک‌مارک یا رنگ متمایز مشخص شده است؟' },
          { id: 'dr3', text: 'آیا منو با کلیدهای Arrow Up/Down کیبورد پیمایش می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['form', 'search-bar']
  },
  {
    id: 'c-searchbar',
    slug: 'search-bar',
    title: 'باکس جستجو (Search Bar)',
    titleEn: 'Search Bar Component',
    description: 'ورودی جستجو، پیشنهادهای هوشمند خودکار (Autocomplete) و پاک کردن سریع',
    categoryId: 'components',
    icon: 'Search',
    sections: [
      {
        id: 'c-sch-ux',
        title: 'تجربه جستجو',
        items: [
          { id: 'sb1', text: 'آیا آیکون ذره‌بین در انتهای سمت راست/چپ باکس قرار دارد؟' },
          { id: 'sb2', text: 'آیا آیکون پاک کردن سریع (Clear Text X) هنگام تایپ ظاهر می‌شود؟', isEssential: true },
          { id: 'sb3', text: 'آیا منوی پیشنهادات لحظه‌ای (Autocomplete) نتایج منطقی ارائه می‌دهد؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['input-field', 'search-filter-flow']
  },
  {
    id: 'c-skeleton',
    slug: 'skeleton-placeholder',
    title: 'پلیس‌هولدر بارگذاری (Skeleton)',
    titleEn: 'Skeleton Screen',
    description: 'شبیه‌سازی ساختار بصری صفحه در هنگام دریافت اطلاعات جهت کاهش زمان انتظار ذهنی',
    categoryId: 'components',
    icon: 'Layout',
    sections: [
      {
        id: 'c-skl-anim',
        title: 'انیمیشن و انطباق',
        items: [
          { id: 'sk1', text: 'آیا ابعاد اسکلتون کاملاً منطبق بر ابعاد کارت یا متن نهایی است؟', isEssential: true },
          { id: 'sk2', text: 'آیا انیمیشن موجی (Pulse / Shimmer) ملایم و چشم‌نواز است؟' },
          { id: 'sk3', text: 'آیا در صورت طولانی شدن دریافت داده، حالت خطا یا تایم‌آوت جایگزین می‌شود؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['card', 'dashboard-page']
  }
];
