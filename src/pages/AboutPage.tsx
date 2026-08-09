import React from 'react';
import { CheckSquare, Heart, Shield, Sparkles, Compass, Target, Code, CheckCircle2, Globe } from 'lucide-react';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-10 py-6 sm:py-8 max-w-4xl mx-auto">
      <SEO
        title="درباره مرجع تخصصی چک‌لیست طراحی UX"
        description="آشنایی با اهداف، داستان شکل‌گیری و استانداردهای مرجع جامع چک‌لیست‌های تخصصی UI/UX برای جامعه طراحان و توسعه‌دهندگان."
      />
      {/* Hero Header Banner */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-semibold w-fit border border-brand-200 dark:border-brand-900">
          <Sparkles className="w-3.5 h-3.5" />
          <span>تقدیم به جامعه طراحان محصول و وب ایران</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-black text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            درباره مرجع «چک‌لیست طراحی»
          </h1>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-medium">
            یک ابزار تخصصی و استانداردساز برای تمام طراحان رابط کاربری (UI)، تجربه کاربری (UX)، مدیران محصول و توسعه‌دهندگان وب در سراسر ایران.
          </p>
        </div>

        <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-3 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
          <span>طراحی و توسعه یافته توسط</span>
          <a
            href="https://nounproject.ir"
            target="_blank"
            rel="noopener noreferrer"
            title="Noun Project - پلتفرم ابزارهای تیم درهمی"
            className="inline-flex items-center gap-1.5 font-bold text-stone-900 dark:text-stone-100 hover:text-brand-600 dark:hover:text-brand-400 transition-colors bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700"
          >
            <Globe className="w-3.5 h-3.5 text-brand-500" />
            <span>Noun Project - تیم درهمی</span>
          </a>
        </div>
      </div>

      {/* Story & Philosophy Section */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 flex items-center justify-center font-bold">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-stone-900 dark:text-stone-100">
              چرا این پروژه شکل گرفت؟
            </h2>
            <span className="text-xs text-stone-500">فلسفه خلقت و رویای کیفیت بیشتر در محصولات فارسی</span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
          <p>
            خلق یک محصول فوق‌العاده تنها به ترکیب رنگ‌های جذاب و فونت‌های زیبا خلاصه نمی‌شود؛ ارزش واقعی یک طرح در جزئیات پنهانی نهفته است که اغلب تا زمان مواجهه کاربر با محصول دیده نمی‌شوند: حالت‌های خطا (Error States)، رفتار فرم‌ها در اینترنت کند، دسترسی‌پذیری برای افراد کم‌توان، و هماهنگی دقیق کامپوننت‌ها در سناریوهای پیچیده.
          </p>

          <p>
            پروژه «چک‌لیست طراحی» با این هدف متولد شد که مرجعی جامع، متمرکز و کاملاً کاربردی را به زبان فارسی در اختیار جامعه خلاق و پرتلاش طراحان و توسعه‌دهندگان ایران قرار دهد. این سامانه شامل بیش از ۶۹ چک‌لیست کامل و بیش از ۱۰۰۰ معیار سنجش دقیق در بخش‌های کامپوننت‌ها، جریان‌های کاربری (Flows)، اصول وب‌سایت، برندینگ و مباحث تخصصی UX است.
          </p>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
            استانداردسازی و سنجش کیفیت
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            تدوین‌شده بر اساس راهنماهای معتبر جهانی از جمله WCAG 2.1، قوانین Nielsen Norman Group و سیستم‌های طراحی مدرن بین‌المللی با تطبیق کامل بر نیازهای وب فارسی.
          </p>
        </div>

        <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
            <Code className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
            ابزار تعاملی برای تیم‌های فنی و محصول
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            امکان خروجی گرفتن کل چک‌لیست‌ها به فرمت Markdown جهت کپی‌پیست سریع در فایل‌های Jira، Notion، GitHub یا مستندات طراحی تیم.
          </p>
        </div>

        <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
            ذخیره‌سازی ۱۰۰٪ محلی و امن
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            تمامی تیک‌ها، درصد پیشرفت و لیست‌های نشانک‌شده درون مرورگر شما (localStorage) باقی می‌ماند و حتی امکان دانلود و بارگذاری فایل پشتیبان JSON وجود دارد.
          </p>
        </div>

        <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
            کاملاً رایگان و بدون تبلیغات
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            توسعه‌یافته به عنوان یک هدیه و ابزار همیشگی برای ارتقای سطح کیفی محصولات دیجیتال ایران بدون هیچ‌گونه محدودیت در استفاده.
          </p>
        </div>
      </div>

      {/* Personal Note Card */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-stone-100 rounded-3xl p-6 sm:p-10 space-y-4 shadow-xl border border-stone-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <p className="text-sm sm:text-base leading-relaxed font-medium italic text-stone-200">
          «امیدوارم این مرجع کمک کند تا همه ما به عنوان فعالان صنعت محصول دیجیتال، گامی به سوی خروجی‌های دقیق‌تر، سناریوهای کاربری بی‌نقص‌تر و احترام بیشتر به تجربه کاربران برداریم.»
        </p>

        <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-800 border border-stone-700 flex items-center justify-center font-black text-brand-400">
              HD
            </div>
            <div>
              <span className="block font-bold text-sm text-stone-100">
                حمیدرضا درهمی
              </span>
              <a
                href="https://nounproject.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-400 hover:underline"
              >
                Noun Project
              </a>
            </div>
          </div>
          <span className="text-xs text-stone-500 font-mono">سال ۱۴۰۴ / ۲۰۲۶</span>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
          پرسش‌های متداول
        </h2>

        <div className="space-y-4 text-xs sm:text-sm">
          <div className="space-y-1.5 border-b border-stone-100 dark:border-stone-800 pb-4">
            <h3 className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>چگونه از این چک‌لیست‌ها در فرآیند طراحی و ریویو تیم استفاده کنیم؟</span>
            </h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed pr-6">
              قبل از تحویل فایل Figma به تیم توسعه یا برگزاری جلسه Design Review، موارد مربوط به کامپوننت‌ها یا جریان کاربری مورد نظر را چک کنید تا مطمئن شوید تمام حالت‌های لودینگ، خطا، خالی بودن (Empty States) و تعاملات کیبورد رعایت شده‌اند.
            </p>
          </div>

          <div className="space-y-1.5 border-b border-stone-100 dark:border-stone-800 pb-4">
            <h3 className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>آیا اطلاعات پیشرفت من با بستن مرورگر پاک می‌شود؟</span>
            </h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed pr-6">
              خیر. داده‌های شما در حافظه محلی مرورگر (localStorage) ذخیره می‌شوند. همچنین می‌توانید در بخش نشانک‌ها، خروجی فایل پشتیبان JSON بگیرید و آن را در مرورگر دیگر بازیابی کنید.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

