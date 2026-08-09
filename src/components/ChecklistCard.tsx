import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowLeft, Star } from 'lucide-react';
import { Checklist } from '../types';
import { getTotalItemsCount } from '../data/checklists';
import { categories } from '../data/categories';
import { ProgressBar } from './ProgressBar';
import { DynamicIcon } from './DynamicIcon';
import { toPersianDigits } from '../utils/persian';

interface ChecklistCardProps {
  checklist: Checklist;
  checkedCount: number;
  isBookmarked: boolean;
  onToggleBookmark: (slug: string) => void;
}

export const ChecklistCard: React.FC<ChecklistCardProps> = ({
  checklist,
  checkedCount,
  isBookmarked,
  onToggleBookmark,
}) => {
  const totalItems = getTotalItemsCount(checklist);
  const category = categories.find((c) => c.id === checklist.categoryId);

  return (
    <div className="group relative bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-2xl p-5 hover:border-stone-400 dark:hover:border-stone-700 transition-all duration-200 hover:shadow-lg hover:shadow-stone-200/40 dark:hover:shadow-none flex flex-col justify-between">
      <div>
        {/* Card Header: Category & Bookmark Button */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Link
            to={`/category/${checklist.categoryId}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors min-w-0 truncate"
          >
            {category && <DynamicIcon name={category.icon} className="w-3.5 h-3.5 shrink-0" />}
            <span className="truncate">{category?.title || checklist.categoryId}</span>
          </Link>

          <div className="flex items-center gap-1.5 shrink-0">
            {checklist.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-100 dark:bg-brand-950/60 text-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-800/50">
                <Star className="w-3 h-3 fill-brand-500 text-brand-500" />
                ÙˆÛŒÚ˜Ù‡
              </span>
            )}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleBookmark(checklist.slug);
              }}
              className={`p-1.5 rounded-lg border transition-colors ${
                isBookmarked
                  ? 'bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800'
                  : 'text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 border-transparent hover:border-stone-200 dark:hover:border-stone-800'
              }`}
              title={isBookmarked ? 'Ø­Ø°Ù Ø§Ø² Ù†Ø´Ø§Ù†Ú©â€ŒÙ‡Ø§' : 'Ø§ÙØ²ÙˆØ¯Ù† Ø¨Ù‡ Ù†Ø´Ø§Ù†Ú©â€ŒÙ‡Ø§'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-brand-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title & English Title */}
        <Link to={`/checklist/${checklist.slug}`} className="block group-hover:text-stone-900 dark:group-hover:text-stone-100">
          <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 mb-1 leading-snug">
            {checklist.title}
          </h3>
          {checklist.titleEn && (
            <p className="text-xs font-mono text-stone-400 dark:text-stone-500 mb-2.5">
              {checklist.titleEn}
            </p>
          )}
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-2 mb-4">
            {checklist.description}
          </p>
        </Link>
      </div>

      {/* Card Footer: Progress & Action */}
      <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80 space-y-3">
        <ProgressBar completedCount={checkedCount} totalCount={totalItems} size="sm" />

        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400">
            {toPersianDigits(checklist.sections.length)} Ø¨Ø®Ø´ Ø§ØµÙ„ÛŒ â€¢ {toPersianDigits(totalItems)} Ú¯Ø§Ù…
          </span>
          <Link
            to={`/checklist/${checklist.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:translate-x-1 transition-transform"
          >
            <span>Ù…Ø´Ø§Ù‡Ø¯Ù‡ Ú†Ú©â€ŒÙ„ÛŒØ³Øª</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
