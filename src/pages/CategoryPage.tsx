import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Grid, Bookmark } from 'lucide-react';
import { categories } from '../data/categories';
import { getChecklistsByCategory } from '../data/checklists';
import { CategoryType } from '../types';
import { ChecklistCard } from '../components/ChecklistCard';
import { DynamicIcon } from '../components/DynamicIcon';
import { toPersianDigits } from '../utils/persian';

interface CategoryPageProps {
  getCheckedCount: (slug: string) => number;
  isBookmarked: (slug: string) => boolean;
  onToggleBookmark: (slug: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  getCheckedCount,
  isBookmarked,
  onToggleBookmark,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const category = categories.find((c) => c.slug === slug || c.id === slug);

  if (!category) {
    return (
      <div className="py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
          دسته‌بندی یافت نشد.
        </h2>
        <button
          onClick={() => navigate('/browse')}
          className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold"
        >
          بازگشت به همه چک‌لیست‌ها
        </button>
      </div>
    );
  }

  const items = getChecklistsByCategory(category.id);

  return (
    <div className="space-y-8 py-6 sm:py-8">
      {/* Category Header Banner */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
        <Link
          to="/browse"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
        >
          <ArrowRight className="w-3.5 h-3.5" />
          <span>بازگشت به همه دسته‌ها</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0 flex-1">
            <div className="w-12 h-12 rounded-2xl bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 flex items-center justify-center font-bold shrink-0 mt-1">
              <DynamicIcon name={category.icon} className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100">
                  {category.title}
                </h1>
                <span className="text-xs font-mono text-stone-400">({category.titleEn})</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-xl leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-stone-100 dark:bg-stone-800 text-center shrink-0 border border-stone-200 dark:border-stone-700">
            <span className="block font-black text-lg text-stone-900 dark:text-stone-100">
              {toPersianDigits(items.length)}
            </span>
            <span className="text-[11px] text-stone-500">چک‌لیست تخصصی</span>
          </div>
        </div>
      </div>

      {/* Category Checklists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <ChecklistCard
            key={item.id}
            checklist={item}
            checkedCount={getCheckedCount(item.slug)}
            isBookmarked={isBookmarked(item.slug)}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </div>
    </div>
  );
};
