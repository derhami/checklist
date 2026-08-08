import React from 'react';
import { CheckSquare } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4 py-12 animate-fade-in">
      <div className="w-12 h-12 rounded-2xl bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 flex items-center justify-center shadow-md animate-bounce">
        <CheckSquare className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
        <span>در حال بارگذاری صفحه...</span>
      </div>
    </div>
  );
};
