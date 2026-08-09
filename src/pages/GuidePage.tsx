import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import {
  BookOpen,
  CheckCircle,
  ShieldCheck,
  Type,
  Layout,
  Eye,
  Palette,
  Smartphone,
  Calculator,
  Sliders,
  Check,
  X,
  Sparkles,
} from 'lucide-react';
import { toPersianDigits } from '../utils/persian';

export const GuidePage: React.FC = () => {
  // Contrast Checker States
  const [textColor, setTextColor] = useState('#2B2F29'); // stone-900
  const [bgColor, setBgColor] = useState('#F2F3F8'); // stone-50
  const [fontSize, setFontSize] = useState(16);

  // Helper for luminance & contrast calculation
  const getRGB = (hex: string) => {
    let clean = hex.replace('#', '');
    if (clean.length === 3) {
      clean = clean.split('').map((c) => c + c).join('');
    }
    const num = parseInt(clean, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  };

  const getLuminance = (r: number, g: number, b: number) => {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const calculateContrast = (hex1: string, hex2: string) => {
    try {
      const rgb1 = getRGB(hex1);
      const rgb2 = getRGB(hex2);
      const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
      const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
      const brightest = Math.max(l1, l2);
      const darkest = Math.min(l1, l2);
      return (brightest + 0.05) / (darkest + 0.05);
    } catch {
      return 1;
    }
  };

  const contrastRatio = calculateContrast(textColor, bgColor);
  const passAANormal = contrastRatio >= 4.5;
  const passAALarge = contrastRatio >= 3.0;
  const passAAANormal = contrastRatio >= 7.0;

  // Typographic Scale State
  const [baseSize, setBaseSize] = useState(16);
  const [ratio, setRatio] = useState(1.25); // Major Third

  return (
    <div className="space-y-10 py-6 sm:py-8 max-w-4xl mx-auto">
      <SEO
        title="راهنمای اصول UX و ابزارهای تعاملی کنتراست و تایپوگرافی"
        description="کتابچه راهنمای اصول UX، قوانین تایپوگرافی، شبکه ۸ پیکسلی، ابزار سنجش کنتراست WCAG و محاسبه‌گر نسبت اندازه‌های قلم برای طراحان."
      />
      {/* Header Banner */}
      <div className="bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 rounded-3xl p-6 sm:p-10 space-y-4 shadow-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 dark:bg-stone-200 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-brand-400 dark:text-brand-600" />
          <span>کتابچه راهنمای اصول و ابزارهای تعاملی طراحی</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
          راهنمای جامع اصول UX و قوانین طراحی رابط کاربری
        </h1>
        <p className="text-xs sm:text-sm text-stone-300 dark:text-stone-700 leading-relaxed max-w-2xl">
          خلاصه‌ای تدوین‌شده از مهم‌ترین قوانین تایپوگرافی، سیستم فواصل شبکه ۸ پیکسلی، ابزار سنجش کنتراست WCAG و محاسبة نسبت‌های متنی.
        </p>
      </div>

      {/* Interactive Tool 1: WCAG Contrast Checker */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
                سنجش زنده کنتراست رنگ‌ها (WCAG Contrast Checker)
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">ارزیابی دسترسی‌پذیری رنگ متن و پس‌زمینه بر اساس استاندارد ۲.۱</p>
            </div>
          </div>
          <span className="self-start sm:self-auto text-xs font-mono font-bold px-3 py-1 bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 rounded-full border border-brand-200 dark:border-brand-800 shrink-0">
            {contrastRatio.toFixed(2)}:1
          </span>
        </div>

        {/* Inputs & Live Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Controls */}
          <div className="space-y-4 text-xs font-medium">
            <div className="space-y-1.5">
              <label className="text-stone-700 dark:text-stone-300">رنگ متن (Text Color):</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-9 h-9 rounded-lg border border-stone-300 dark:border-stone-700 cursor-pointer p-0.5"
                />
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full font-mono px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 uppercase"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-stone-700 dark:text-stone-300">رنگ پس‌زمینه (Background Color):</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-9 h-9 rounded-lg border border-stone-300 dark:border-stone-700 cursor-pointer p-0.5"
                />
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full font-mono px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 uppercase"
                />
              </div>
            </div>

            {/* Quick Presets */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-stone-400 text-[11px]">پیش‌فرض‌ها:</span>
              <button
                onClick={() => { setTextColor('#2B2F29'); setBgColor('#F2F3F8'); }}
                className="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 rounded-md hover:bg-stone-200 text-[11px]"
              >
                تیره روی روشن
              </button>
              <button
                onClick={() => { setTextColor('#f5f5f4'); setBgColor('#0c0a09'); }}
                className="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 rounded-md hover:bg-stone-200 text-[11px]"
              >
                روشن روی تیره
              </button>
            </div>
          </div>

          {/* Live Render Card & Status Badges */}
          <div className="space-y-4">
            <div
              className="p-6 rounded-2xl border transition-colors flex flex-col justify-center min-h-[120px] shadow-sm"
              style={{ backgroundColor: bgColor, color: textColor }}
            >
              <p className="font-bold text-base sm:text-lg">متن نمونه با سایز {toPersianDigits(fontSize)}px</p>
              <p className="text-xs opacity-90 mt-1">
                این یک نمونه متن فارسی برای بررسی خوانایی و کنتراست بصری روی این پس‌زمینه است.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className={`p-2 rounded-xl border ${passAANormal ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
                <span className="block font-bold">AA عادی</span>
                <span className="text-[10px]">{passAANormal ? 'پاس شد (۴.۵)' : 'رد شد'}</span>
              </div>

              <div className={`p-2 rounded-xl border ${passAALarge ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
                <span className="block font-bold">AA تیتر</span>
                <span className="text-[10px]">{passAALarge ? 'پاس شد (۳.۰)' : 'رد شد'}</span>
              </div>

              <div className={`p-2 rounded-xl border ${passAAANormal ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
                <span className="block font-bold">AAA عالی</span>
                <span className="text-[10px]">{passAAANormal ? 'پاس شد (۷.۰)' : 'رد شد'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool 2: Typographic Scale Generator */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
              محاسبه‌گر مقیاس تایپوگرافی (Type Scale Generator)
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">ایجاد هارمونی و نسبت‌های ریاضی استاندارد برای اندازه‌های تیتر و بدنه</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
          <div className="space-y-1.5">
            <label className="text-stone-700 dark:text-stone-300">اندازه فونت پایه (Base Size):</label>
            <select
              value={baseSize}
              onChange={(e) => setBaseSize(Number(e.target.value))}
              className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100"
            >
              <option value={14}>۱۴px (فشرده)</option>
              <option value={16}>۱۶px (استاندارد دسکتاپ/موبایل)</option>
              <option value={18}>۱۸px (بزرگ و مقاله‌ای)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-stone-700 dark:text-stone-300">نسبت گام‌بندی (Scale Ratio):</label>
            <select
              value={ratio}
              onChange={(e) => setRatio(Number(e.target.value))}
              className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100"
            >
              <option value={1.125}>Major Second (1.125) - محصولات متراکم</option>
              <option value={1.2}>Minor Third (1.200) - داشبوردها</option>
              <option value={1.25}>Major Third (1.250) - وب‌سایت‌های استاندارد</option>
              <option value={1.333}>Perfect Fourth (1.333) - لندینگ‌پیج‌های پرکنتراست</option>
            </select>
          </div>
        </div>

        {/* Generated Scale Preview */}
        <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-2xl border border-stone-200/80 dark:border-stone-800 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800 text-stone-500 font-bold">
            <span>سطح (Level)</span>
            <span>اندازه اصلی</span>
            <span>نمایش زنده</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-stone-400">H1 (تیتر اصلی)</span>
            <span className="font-bold text-brand-600">{Math.round(baseSize * Math.pow(ratio, 4))}px</span>
            <span className="font-sans font-black text-stone-900 dark:text-stone-100" style={{ fontSize: `${Math.min(Math.round(baseSize * Math.pow(ratio, 4)), 36)}px` }}>
              عنوان اصلی مقاله
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-stone-400">H2 (تیتر بخش)</span>
            <span className="font-bold text-brand-600">{Math.round(baseSize * Math.pow(ratio, 3))}px</span>
            <span className="font-sans font-extrabold text-stone-900 dark:text-stone-100" style={{ fontSize: `${Math.round(baseSize * Math.pow(ratio, 3))}px` }}>
              عنوان بخش اول
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-stone-400">H3 (زیرعنوان)</span>
            <span className="font-bold text-brand-600">{Math.round(baseSize * Math.pow(ratio, 2))}px</span>
            <span className="font-sans font-bold text-stone-900 dark:text-stone-100" style={{ fontSize: `${Math.round(baseSize * Math.pow(ratio, 2))}px` }}>
              زیرمجموعه کارت‌ها
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-stone-400">Body (بدنه متن)</span>
            <span className="font-bold text-emerald-600">{baseSize}px</span>
            <span className="font-sans text-stone-800 dark:text-stone-200" style={{ fontSize: `${baseSize}px` }}>
              متن توضیحات بدنه و مقالات
            </span>
          </div>
        </div>
      </section>

      {/* Static Guide Modules Grid */}
      <div className="space-y-8">
        {/* Module 1: Typography */}
        <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
              <Type className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              ۱. اصول تایپوگرافی و خوانایی متون فارسی
            </h2>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>اندازه پایه بدنه متون:</strong> حداقل اندازه فونت بدنه برای خوانایی کامل در دسکتاپ و موبایل ۱۶ پیکسل است.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>ارتفاع خط (Line-Height):</strong> برای متون فارسی، ارتفاع خط متون اصلی باید بین ۱.۶ تا ۱.۸ برابر اندازه فونت باشد (مثلا برای ۱۶px، ارتفاع خط ۲۶px تا ۲۸px مناسب است).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>طول سطر متنی:</strong> جهت جلوگیری از خستگی چشم، طول سطرهای متنی در مقالات و توضیحات باید بین ۴۵ تا ۷۵ کاراکتر محدود شود.</span>
            </li>
          </ul>
        </section>

        {/* Module 2: Spacing & Grid */}
        <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <Layout className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              ۲. سیستم فواصل و شبکه ۸ پیکسلی (8pt Grid)
            </h2>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>مضارب ۸ پیکسل:</strong> تمام فواصل (Padding, Margin, Gap) باید از مضارب شبکه ۸ پیکسلی پیروی کنند (۸, ۱۶, ۲۴, ۳۲, ۴۸, ۶۴).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>قاعده پدینگ خارجی به داخلی:</strong> پدینگ بیرونی یک کارت همواره باید مساوی یا بزرگتر از پدینگ داخلی عناصر درون آن کارت باشد (حداقل پدینگ کارت ۱۶px است).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>قاعده شعاع گوشه‌های توی در تو:</strong> شعاع گوشه کارت داخلی = شعاع گوشه کارت بیرونی منهای فاصله بین دو کارت.</span>
            </li>
          </ul>
        </section>

        {/* Module 3: Accessibility */}
        <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              ۳. دسترسی‌پذیری و استانداردهای WCAG 2.1
            </h2>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>نسبت کنتراست متن:</strong> کنتراست متن‌های عادی با پس‌زمینه باید حداقل 4.5:1 و برای متن‌های بزرگ 3:1 باشد.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>پیمایش با کیبورد:</strong> تمام دکمه‌ها، ورودی‌ها و لینک‌ها باید دارای Outline فوکوس شفاف برای کاربران کیبورد باشند.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>انتقال اطلاعات بدون اتکا به رنگ:</strong> پیام‌های خطا حتما همراه با آیکون و متن باشند، نه صرفا رنگ قرمز.</span>
            </li>
          </ul>
        </section>

        {/* Module 4: Mobile & Touch */}
        <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              ۴. ابعاد لمسی و تجربه کاربری موبایل
            </h2>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>حداقل منطقه لمسی (Touch Target):</strong> ابعاد هر عنصر کلیک‌پذیر در موبایل باید حداقل ۴۴×۴۴ پیکسل باشد.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>منطقه شست دست (Thumb Zone):</strong> دکمه‌های اقدام اصلی (CTA) ترجیحاً در بخش پایینی صفحه قرار گیرند.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

