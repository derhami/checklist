import { Checklist } from '../types';

export const brandsChecklists: Checklist[] = [
  {
    id: 'b-logo',
    slug: 'logo-favicon',
    title: 'لوگو و فاوآیکون (Logo & Favicon)',
    titleEn: 'Logo & Favicon Checklist',
    description: 'فرم‌های افقی، مربعی، آیکونیک، فرمت‌های SVG و فاوآیکون سایزهای مختلف مرورگر',
    categoryId: 'brands',
    icon: 'Bookmark',
    featured: true,
    sections: [
      {
        id: 'b-log-formats',
        title: 'فرمت‌ها و فاوآیکون',
        items: [
          { id: 'lg1', text: 'آیا نسخه وکتور SVG لوگو برای کیفیت حداکثری و حجم کم قرار دارد؟', isEssential: true },
          { id: 'lg2', text: 'آیا نسخه تک‌رنگ (سفید روی تیره و مشکی روی روشن) وجود دارد؟', isEssential: true },
          { id: 'lg3', text: 'آیا فاوآیکون (Favicon.ico / apple-touch-icon) در ابعاد ۱۶x۱۶، ۳۲x۳۲ و ۱۸۰x۱۸۰ موجود است؟', isEssential: true },
          { id: 'lg4', text: 'آیا حاشیه امن (Clear Space) دور لوگو در همه جا رعایت می‌شود؟' },
        ]
      }
    ],
    relatedSlugs: ['color-palette-usage', 'brand-guidelines']
  },
  {
    id: 'b-guidelines',
    slug: 'brand-guidelines',
    title: 'دفترچه راهنمای برند (Brandbook)',
    titleEn: 'Brand Guidelines',
    description: 'اصول استفاده از برند، حریم امن، موارد ممنوعه و هویت دیداری یکپارچه',
    categoryId: 'brands',
    icon: 'BookOpen',
    sections: [
      {
        id: 'b-gui-rules',
        title: 'قوانین برند',
        items: [
          { id: 'bg1', text: 'آیا موارد ممنوعه استفاده از لوگو (نچرخاندن، تغییر نادرس رنگ) قید شده است؟', isEssential: true },
          { id: 'bg2', text: 'آیا تایپوگرافی رسمی برند و فونت‌های جایگزین مشخص شده‌اند؟' },
          { id: 'bg3', text: 'آیا الگوها و المان‌های گرافیکی مکمل برند ارائه شده‌اند؟' },
        ]
      }
    ],
    relatedSlugs: ['logo-favicon', 'tone-of-voice']
  },
  {
    id: 'b-tone',
    slug: 'tone-of-voice',
    title: 'لحن و ادبیات برند (Tone of Voice)',
    titleEn: 'Tone of Voice Checklist',
    description: 'شخصیت کلامی برند، کلمات کلیدی، نحوه خطابات به مشتری و کلمات ممنوعه',
    categoryId: 'brands',
    icon: 'MessageCircle',
    sections: [
      {
        id: 'b-tne-rules',
        title: 'لحن گفتاری',
        items: [
          { id: 'tn1', text: 'آیا صمیمیت یا رسمیت گفتار در تمام نقاط تماس (پیامک، ایمیل، وب‌سایت) یکسان است؟', isEssential: true },
          { id: 'tn2', text: 'آیا واژه‌نامه تخصصی برند و کلمات جایگزین تعریف شده‌اند؟' },
          { id: 'tn3', text: 'آیا نحوه عذرخواهی یا اعلام اخبار خوش در لحن برند مشخص است؟' },
        ]
      }
    ],
    relatedSlugs: ['micro-copy', 'brand-guidelines']
  },
  {
    id: 'b-icons',
    slug: 'iconography',
    title: 'آیکون‌ها و سیستم آیکونیک (Iconography)',
    titleEn: 'Iconography Checklist',
    description: 'ضخامت خطوط (Stroke)، سبک توپر/توخالی (Solid/Outline) و هماهنگی بصری',
    categoryId: 'brands',
    icon: 'Grid',
    sections: [
      {
        id: 'b-icn-style',
        title: 'سبک آیکون‌ها',
        items: [
          { id: 'ic1', text: 'آیا تمام آیکون‌های سایت از یک کتابخانه یکدست (مانند Lucide) انتخاب شده‌اند؟', isEssential: true },
          { id: 'ic2', text: 'آیا ضخامت خطوط (Stroke Weight) در تمام آیکون‌ها ثابت (مثلا ۲px) است؟', isEssential: true },
          { id: 'ic3', text: 'آیا تمام آیکون‌ها بر روی شبکه ۲۴×۲۴ پیکسل طراحی شده‌اند؟' },
        ]
      }
    ],
    relatedSlugs: ['button', 'design-tokens']
  },
  {
    id: 'b-colors',
    slug: 'color-palette-usage',
    title: 'پالت رنگی برند (Color Palette)',
    titleEn: 'Color Palette Checklist',
    description: 'کد رنگ‌های HEX, RGB, CMYK، نسبت‌های ۶۰-۳۰-۱۰ و کاربرد رنگ‌ها',
    categoryId: 'brands',
    icon: 'Droplet',
    sections: [
      {
        id: 'b-clr-codes',
        title: 'کدهای رنگی و نسبت‌ها',
        items: [
          { id: 'cl1', text: 'آیا کدهای دقیق HEX, RGB و CMYK برای چاپ و دیجیتال ثبت شده‌اند؟', isEssential: true },
          { id: 'cl2', text: 'آیا قاعده ۶۰٪ رنگ خنثی، ۳۰٪ رنگ ثانویه و ۱۰٪ رنگ آکسان رعایت می‌شود؟', isEssential: true },
        ]
      }
    ],
    relatedSlugs: ['color-system', 'brand-guidelines']
  },
  {
    id: 'b-og',
    slug: 'social-sharing-og',
    title: 'کارت‌های اشتراک‌گذاری اجتماعی (OG Cards)',
    titleEn: 'Social OG Cards',
    description: 'تصویر پیش‌نمایش ۱۲۰۰x۶۳۰ پیکسل برای لینک‌های تلگرام، واتساپ، توییتر و لینکدین',
    categoryId: 'brands',
    icon: 'Share2',
    sections: [
      {
        id: 'b-og-dimensions',
        title: 'ابعاد و لوگو',
        items: [
          { id: 'og1', text: 'آیا تصویر پیش‌نمایش شبکه اجتماعی دارای ابعاد ۱۲۰۰×۶۳۰ پیکسل است؟', isEssential: true },
          { id: 'og2', text: 'آیا تیتر اصلی صفحه و لوگوی برند روی تصویر پیش‌نمایش خوانا است؟', isEssential: true },
          { id: 'og3', text: 'آیا از قرار گرفتن متون مهم در حاشیه‌های برشی جلوگیری شده است؟' },
        ]
      }
    ],
    relatedSlugs: ['seo-meta', 'logo-favicon']
  },
  {
    id: 'b-email',
    slug: 'email-templates',
    title: 'قالب‌های ایمیل و خبرنامه (Email Templates)',
    titleEn: 'Email Templates Checklist',
    description: 'طراحی ایمیل‌های تراکنشی، خبرنامه، هدر لوگودار و دکمه‌های پرکنتراست',
    categoryId: 'brands',
    icon: 'Mail',
    sections: [
      {
        id: 'b-eml-responsive',
        title: 'واکنش‌گرایی ایمیل',
        items: [
          { id: 'em1', text: 'آیا عرض قالب ایمیل حداکثر ۶۰۰ پیکسل تنظیم شده است؟', isEssential: true },
          { id: 'em2', text: 'آیا دکمه لغو اشتراک (Unsubscribe) در فوتر ایمیل به طور واضح موجود است؟', isEssential: true },
          { id: 'em3', text: 'آیا ایمیل در هر دو حالت لایت و دارک برنامه ایمیل خوانا است؟' },
        ]
      }
    ],
    relatedSlugs: ['tone-of-voice', 'button']
  }
];
