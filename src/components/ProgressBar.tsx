import React from 'react';
import { toPersianDigits } from '../utils/persian';

interface ProgressBarProps {
  completedCount: number;
  totalCount: number;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completedCount,
  totalCount,
  showText = true,
  size = 'md',
  className = '',
}) => {
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isComplete = percentage === 100;

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-3.5',
  };

  return (
    <div className={`w-full ${className}`}>
      {showText && (
        <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
          <span className="text-stone-600 dark:text-stone-400">
            پیشرفت: <strong className="text-stone-900 dark:text-stone-100">{toPersianDigits(completedCount)}</strong> از{' '}
            {toPersianDigits(totalCount)} موارد
          </span>
          <span
            className={`font-bold font-mono text-[11px] ${
              isComplete
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-stone-700 dark:text-stone-300'
            }`}
          >
            ٪{toPersianDigits(percentage)}
          </span>
        </div>
      )}

      <div className={`w-full bg-stone-200/80 dark:bg-stone-800 rounded-full overflow-hidden ${heightClasses[size]}`}>
        <div
          className={`h-full transition-all duration-500 ease-out rounded-full ${
            isComplete
              ? 'bg-emerald-500 dark:bg-emerald-400'
              : percentage > 0
              ? 'bg-stone-900 dark:bg-stone-100'
              : 'bg-transparent'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
