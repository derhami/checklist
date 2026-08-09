import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  CheckCircle,
  ArrowLeft,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Grid,
  Bookmark,
  CheckSquare,
  BookOpen
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { categories } from '../data/categories';
import { getFeaturedChecklists, getTotalItemsCount, allChecklists } from '../data/checklists';
import { CategoryCard } from '../components/CategoryCard';
import { ChecklistCard } from '../components/ChecklistCard';
import { toPersianDigits } from '../utils/persian';

interface HomePageProps {
  getCheckedCount: (slug: string) => number;
  isBookmarked: (slug: string) => boolean;
  onToggleBookmark: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  getCheckedCount,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const featured = getFeaturedChecklists();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/browse');
    }
  };

  const totalChecklistsCount = allChecklists.length;
  const totalItemsCount = allChecklists.reduce(
    (acc, curr) => acc + getTotalItemsCount(curr),
    0
  );

  return (
    <div className="space-y-16 py-6 sm:py-10">
      <SEO
        title="چک‌لیست طراحی UX | مرجع جامع استانداردهای رابط و تجربه کاربر"
        description="مرجع تخصصی چک‌لیست‌های کاربردی UI/UX، دسترسی‌پذیری WCAG، فرم‌ها و کامپوننت‌های محصول برای طراحان وب و نرم‌افزار."
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-stone-100 to-stone-50 dark:from-stone-900/90 dark:to-stone-950 border border-stone-200/80 dark:border-stone-800 p-6 sm:p-12 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold mb-6 border border-stone-300/60 dark:border-stone-700">
          <Sparkles className="w-3.5 h-3.5 text-brand-500 fill-brand-500" />
          <span>مرجع فارسی و تخصصی طراحان UI/UX، وب و محصول</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-stone-100 tracking-tight leading-[1.25] mb-6 max-w-3xl mx-auto">
          چک‌لیست‌های تخصصی برای طراحی بدون نقص وب و نرم‌افزار
        </h1>

        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
          مجموعه‌ای جامع از استانداردهای تجربه کاربری، دسترسی‌پذیری، حالت‌های مختلف کامپوننت‌ها و جریان‌های محصول به زبان فارسی با قابلیت ثبت پیشرفت.
        </p>

        {/* Hero Search Box */}
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-xl mx-auto relative flex items-center shadow-lg shadow-stone-200/50 dark:shadow-none rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 overflow-hidden mb-8"
        >
          <Search className="w-5 h-5 text-stone-400 mr-4 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="چه چیزی می‌خواهید طراحی کنید؟ (مثلا: دکمه، لندینگ، فرم ثبت‌نام)"
            className="w-full py-3.5 px-3 text-sm text-stone-900 dark:text-stone-100 bg-transparent placeholder-stone-400 focus:outline-none"
          />
          <button
            type="submit"
            className="m-1.5 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-stone-100 dark:text-stone-900 font-bold text-xs rounded-xl transition-all shrink-0"
          >
            جستجو
          </button>
        </form>

        {/* Quick Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-stone-200/80 dark:border-stone-800 text-xs">
          <div className="p-2.5 rounded-xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800">
            <span className="block font-bold text-base text-stone-900 dark:text-stone-100">
              {toPersianDigits(totalChecklistsCount)}
            </span>
            <span className="text-stone-500">چک‌لیست آنلاین</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800">
            <span className="block font-bold text-base text-stone-900 dark:text-stone-100">
              +{toPersianDigits(totalItemsCount)}
            </span>
            <span className="text-stone-500">نکته و استاندارد UX</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800">
            <span className="block font-bold text-base text-stone-900 dark:text-stone-100">
              WCAG 2.1
            </span>
            <span className="text-stone-500">پوشش دسترسی‌پذیری</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800">
            <span className="block font-bold text-base text-stone-900 dark:text-stone-100">
              ٪۱۰۰ آفلاین
            </span>
            <span className="text-stone-500">ذخیره در مرورگر</span>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
              دسته‌بندی‌های اصلی
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
              مجموعه‌ها بر اساس ساختار استاندارد محصولات وب تقسیم شده‌اند
            </p>
          </div>
          <Link
            to="/browse"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 sm:p-0 rounded-xl bg-stone-100 dark:bg-stone-800 sm:bg-transparent sm:dark:bg-transparent text-xs font-bold text-stone-900 dark:text-stone-100 hover:text-brand-600 dark:hover:text-brand-400 hover:underline whitespace-nowrap transition-colors"
          >
            <span>مشاهده همه</span>
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Featured Checklists */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
              چک‌لیست‌های برگزیده و کلیدی
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
              محبوب‌ترین چک‌لیست‌های کاربردی برای شروع هر پروژه جدید
            </p>
          </div>
          <Link
            to="/browse"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 sm:p-0 rounded-xl bg-stone-100 dark:bg-stone-800 sm:bg-transparent sm:dark:bg-transparent text-xs font-bold text-stone-900 dark:text-stone-100 hover:text-brand-600 dark:hover:text-brand-400 hover:underline whitespace-nowrap transition-colors"
          >
            <span>کتابخانه کامل</span>
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((item) => (
            <ChecklistCard
              key={item.id}
              checklist={item}
              checkedCount={getCheckedCount(item.slug)}
              isBookmarked={isBookmarked(item.slug)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      </section>

      {/* Product Philosophy Pillars */}
      <section className="bg-stone-100/80 dark:bg-stone-900/50 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 space-y-8">
        <div className="max-w-2xl text-right">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
            چرا استفاده از چک‌لیست در طراحی ضروری است؟
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
            طراحی محصول شامل جزئیات بی‌شماری از حالت‌های خطا تا دسترس‌پذیری است. چک‌لیست‌ها مانع فراموشی نکات حیاتی می‌شوند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">
              جلوگیری از خطاهای رایج
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              بررسی کامل تمام حالت‌های تعاملی (Hover, Focus, Loading, Disabled) پیش از تحویل طرح به تیم توسعه.
            </p>
          </div>

          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">
              افزایش نرخ تبدیل (CRO)
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              کاهش اصطکاک کاربران در فرم‌ها، صفحات تسویه‌حساب و ورود برای دستیابی به بالاترین بازدهی.
            </p>
          </div>

          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">
              دسترس‌پذیری همگانی (a11y)
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              اطمینان از پاس شدن استانداردهای کنتراست رنگی، صفحه‌خوان‌ها و پیمایش راحت با کیبورد.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          آماده‌اید طراحی پروژه خود را ارزیابی کنید؟
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 dark:text-stone-700 max-w-xl mx-auto leading-relaxed">
          ورود به آرشیو کامل ۶۹ چک‌لیست فارسی و ذخیره درصد پیشرفت کار روی مرورگر شما.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/browse"
            className="px-6 py-3 bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-bold text-xs rounded-xl shadow-md hover:bg-stone-100 transition-all inline-flex items-center gap-2"
          >
            <Grid className="w-4 h-4" />
            <span>ورود به کتابخانه چک‌لیست‌ها</span>
          </Link>
          <Link
            to="/guide"
            className="px-6 py-3 bg-stone-800 dark:bg-stone-200 text-stone-200 dark:text-stone-800 font-bold text-xs rounded-xl hover:bg-stone-700 transition-all inline-flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>مطالعه راهنمای UX</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
