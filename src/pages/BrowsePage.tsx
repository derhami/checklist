import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Bookmark, SlidersHorizontal, Grid, X } from 'lucide-react';
import { SEO } from '../components/SEO';
import { categories } from '../data/categories';
import { allChecklists, filterChecklists } from '../data/checklists';
import { CategoryType, SortOption, FilterState } from '../types';
import { ChecklistCard } from '../components/ChecklistCard';
import { toPersianDigits } from '../utils/persian';

interface BrowsePageProps {
  getCheckedCount: (slug: string) => number;
  isBookmarked: (slug: string) => boolean;
  onToggleBookmark: (slug: string) => void;
  bookmarks: string[];
}

export const BrowsePage: React.FC<BrowsePageProps> = ({
  getCheckedCount,
  isBookmarked,
  onToggleBookmark,
  bookmarks,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: searchParams.get('q') || '',
    category: (searchParams.get('category') as CategoryType) || 'all',
    sortBy: 'popular',
    onlyBookmarked: searchParams.get('bookmarked') === 'true',
  });

  useEffect(() => {
    const q = searchParams.get('q');
    const cat = searchParams.get('category') as CategoryType;
    if (q !== null) setFilters((prev) => ({ ...prev, searchQuery: q }));
    if (cat) setFilters((prev) => ({ ...prev, category: cat }));
  }, [searchParams]);

  const filtered = filterChecklists(allChecklists, filters, bookmarks);

  const handleCategoryChange = (cat: CategoryType | 'all') => {
    setFilters((prev) => ({ ...prev, category: cat }));
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleSearchChange = (q: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: q }));
    if (q.trim()) {
      searchParams.set('q', q);
    } else {
      searchParams.delete('q');
    }
    setSearchParams(searchParams);
  };

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      sortBy: 'popular',
      onlyBookmarked: false,
    });
    setSearchParams({});
  };

  return (
    <div className="space-y-8 py-6 sm:py-8">
      <SEO
        title="کتابخانه جامع چک‌لیست‌های طراحی UI/UX"
        description="جستجو و مرور بیش از ۶۹ چک‌لیست تخصصی طراحی وبسایت، کامپوننت‌های رابط کاربر، جریان‌های محصول، برندینگ و موضوعات تخصصی."
      />
      {/* Header Title */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100">
          کتابخانه جامع چک‌لیست‌های طراحی
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
          مرور، جستجو و فیلتر آرشیو کامل ۶۹ چک‌لیست تخصصی UI/UX، کامپوننت‌ها و جریان‌های محصول
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-2xl p-4 space-y-4 shadow-sm">
        {/* Top Search Input & Sort */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="جستجو بر اساس عنوان یا نکته... (مثلا: لندینگ، دکمه، فوکوس)"
              className="w-full pr-10 pl-8 py-2 text-xs sm:text-sm bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
            {filters.searchQuery && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
              <span className="text-stone-500 hidden sm:inline">مرتب‌سازی:</span>
              <select
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sortBy: e.target.value as SortOption }))
                }
                className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-medium rounded-lg px-2.5 py-1.5 focus:outline-none"
              >
                <option value="popular">محبوب‌ترین‌ها و برگزیده</option>
                <option value="itemCount">بیشترین تعداد موارد</option>
                <option value="alphabetical">بر اساس حروف الفبا</option>
                <option value="newest">ترتیب استاندار</option>
              </select>
            </div>

            {/* Bookmarked Switch */}
            <button
              onClick={() =>
                setFilters((prev) => ({ ...prev, onlyBookmarked: !prev.onlyBookmarked }))
              }
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                filters.onlyBookmarked
                  ? 'bg-brand-100 dark:bg-brand-950/80 text-brand-800 dark:text-brand-300 border-brand-300 dark:border-brand-700'
                  : 'bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:bg-stone-100'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${filters.onlyBookmarked ? 'fill-brand-500' : ''}`} />
              <span>فقط نشانک‌شده‌ها</span>
            </button>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs border-t border-stone-100 dark:border-stone-800/80 pt-3 no-scrollbar">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-3.5 py-1.5 rounded-xl font-medium shrink-0 transition-colors ${
              filters.category === 'all'
                ? 'bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 font-bold'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            همه موارد ({toPersianDigits(allChecklists.length)})
          </button>

          {categories.map((cat) => {
            const count = allChecklists.filter((c) => c.categoryId === cat.id).length;
            const isSelected = filters.category === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 py-1.5 rounded-xl font-medium shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 font-bold'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                {cat.title} ({toPersianDigits(count)})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count Info */}
      <div className="flex items-center justify-between text-xs text-stone-500 font-medium px-1">
        <span>
          نمایش <strong className="text-stone-900 dark:text-stone-100">{toPersianDigits(filtered.length)}</strong> چک‌لیست
        </span>
        {(filters.searchQuery || filters.category !== 'all' || filters.onlyBookmarked) && (
          <button
            onClick={resetFilters}
            className="text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>پاک‌کردن فیلترها</span>
          </button>
        )}
      </div>

      {/* Checklist Cards Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-12 text-center space-y-3">
          <Grid className="w-10 h-10 mx-auto text-stone-300 dark:text-stone-700" />
          <h3 className="font-bold text-base text-stone-800 dark:text-stone-200">
            هیچ چک‌لیستی پیدا نشد.
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            عبارت جستجو شده یا فیلترهای اعمال‌شده منطبق با هیچ چک‌لیستی در آرشیو نیست.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 font-bold text-xs rounded-xl"
          >
            مشاهده همه چک‌لیست‌ها
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <ChecklistCard
              key={item.id}
              checklist={item}
              checkedCount={getCheckedCount(item.slug)}
              isBookmarked={isBookmarked(item.slug)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      )}
    </div>
  );
};
