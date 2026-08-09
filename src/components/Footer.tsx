import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, Heart, Shield, Globe } from 'lucide-react';
import { categories } from '../data/categories';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/40 text-stone-600 dark:text-stone-400 text-sm mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Brand & Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 512 512"
                className="w-7 h-7 text-stone-900 dark:text-stone-100 shrink-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M 380,215 A 150,150 0 1,1 315,115"
                  stroke="currentColor"
                  strokeWidth="38"
                  strokeLinecap="round"
                />
                <path
                  d="M 180,250 L 245,315 L 390,170"
                  stroke="currentColor"
                  strokeWidth="42"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-bold text-stone-900 dark:text-stone-100 text-base">
                چک‌لیست طراحی
              </span>
            </div>
            <p className="text-xs leading-relaxed text-stone-500 dark:text-stone-400">
              مرجع حرفه‌ای و جامع چک‌لیست‌های تخصصی طراحی رابط کاربری (UI) و تجربه کاربری (UX) برای طراحان وب، محصول و نرم‌افزار.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>مبتنی بر استانداردهای WCAG 2.1 و Nielsen Norman</span>
            </div>
          </div>

          {/* Col 2: Categories Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-stone-900 dark:text-stone-200 text-xs tracking-wider uppercase">
              دسته‌بندی‌های اصلی
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                  >
                    {cat.title} ({cat.titleEn})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-semibold text-stone-900 dark:text-stone-200 text-xs tracking-wider uppercase">
              دسترسی سریع
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/browse" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                  کتابخانه همه چک‌لیست‌ها
                </Link>
              </li>
              <li>
                <Link to="/guide" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                  راهنمای اصول تایپوگرافی و فواصل
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
                  درباره پروژه و فلسفه طراحی
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200/80 dark:border-stone-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span>توسعه داده شده با</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>برای جامعه طراحان محصول و وب ایران توسط</span>
            <a
              href="https://derhami.com"
              target="_blank"
              rel="noopener noreferrer"
              title="وب‌سایت شخصی حمیدرضا درهمی - طراح محصول و توسعه‌دهنده وب"
              className="font-bold text-stone-900 dark:text-stone-100 hover:text-brand-600 dark:hover:text-brand-400 transition-colors no-underline"
            >
              حمیدرضا درهمی
            </a>
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://nounproject.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-stone-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Noun Project</span>
            </a>
            <span className="font-sans font-medium text-stone-600 dark:text-stone-400">
              © 2026 Design Checklist
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
