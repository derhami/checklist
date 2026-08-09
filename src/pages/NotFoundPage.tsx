import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, Grid } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 text-center space-y-6 max-w-md mx-auto">
      <div className="w-16 h-16 rounded-3xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold mx-auto">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-black text-stone-900 dark:text-stone-100">
          صفحه مورد نظر یافت نشد (۴۰۴)
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          آدرس وارد شده وجود ندارد یا ممکن است منتقل شده باشد.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link
          to="/"
          className="px-5 py-2.5 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-bold text-xs rounded-xl inline-flex items-center gap-2"
        >
          <span>صفحه اصلی</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <Link
          to="/browse"
          className="px-5 py-2.5 bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200 font-bold text-xs rounded-xl inline-flex items-center gap-2"
        >
          <Grid className="w-4 h-4" />
          <span>کتابخانه چک‌لیست‌ها</span>
        </Link>
      </div>
    </div>
  );
};
