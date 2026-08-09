import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Category } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { getChecklistsByCategory } from '../data/checklists';
import { toPersianDigits } from '../utils/persian';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const checklistsCount = getChecklistsByCategory(category.id).length;

  return (
    <Link
      to={`/category/${category.slug}`}
      className="group bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-700 rounded-2xl p-5 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 flex items-center justify-center font-semibold group-hover:scale-105 transition-transform">
            <DynamicIcon name={category.icon} className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700">
            {toPersianDigits(checklistsCount)} چک‌لیست
          </span>
        </div>

        <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 mb-0.5 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {category.title}
        </h3>
        <p className="text-xs font-mono text-stone-400 dark:text-stone-500 mb-2">
          {category.titleEn}
        </p>
        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-2">
          {category.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs font-medium text-stone-900 dark:text-stone-200">
        <span>مشاهده مجموعه</span>
        <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 group-hover:-translate-x-1 transition-all" />
      </div>
    </Link>
  );
};
