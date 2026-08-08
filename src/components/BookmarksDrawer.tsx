import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Bookmark, Trash2, ArrowLeft, CheckCircle2, Download, Upload } from 'lucide-react';
import { allChecklists, getTotalItemsCount, getChecklistBySlug } from '../data/checklists';
import { ProgressBar } from './ProgressBar';
import { toPersianDigits } from '../utils/persian';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: string[];
  onToggleBookmark: (slug: string) => void;
  getCheckedCount: (slug: string) => number;
  onResetAll: () => void;
  onExport?: () => string;
  onImport?: (jsonData: string) => boolean;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarks,
  onToggleBookmark,
  getCheckedCount,
  onResetAll,
  onExport,
  onImport,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const savedChecklists = bookmarks
    .map((slug) => getChecklistBySlug(slug))
    .filter(Boolean);

  const handleDownloadBackup = () => {
    if (!onExport) return;
    const jsonStr = onExport();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `checklist-design-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onImport) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = onImport(content);
        if (success) {
          alert('اطلاعات پیشرفت با موفقیت بازگردانی شد.');
        } else {
          alert('خطا در فرمت فایل پشتیبان.');
        }
      }
    };
    reader.readAsText(file);
    if (e.target) e.target.value = '';
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/60 backdrop-blur-sm transition-opacity">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        className="hidden"
      />
      <div
        className="w-full max-w-md bg-white dark:bg-stone-900 border-r dark:border-stone-800 h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">
                چک‌لیست‌های نشانک‌شده
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-stone-400">
                {toPersianDigits(bookmarks.length)} مورد ذخیره‌شده در مرورگر شما
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer List */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {savedChecklists.length === 0 ? (
            <div className="py-12 text-center text-stone-500 space-y-3">
              <Bookmark className="w-10 h-10 mx-auto text-stone-300 dark:text-stone-700" />
              <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                هیچ چک‌لیستی نشانک نشده است.
              </p>
              <p className="text-xs text-stone-400 max-w-xs mx-auto">
                هنگام مرور کارت‌های چک‌لیست، روی آیکون نشانک کلیک کنید تا برای دسترسی سریع‌تر در اینجا ذخیره شوند.
              </p>
            </div>
          ) : (
            savedChecklists.map((c) => {
              if (!c) return null;
              const checked = getCheckedCount(c.slug);
              const total = getTotalItemsCount(c);

              return (
                <div
                  key={c.id}
                  className="bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-800 rounded-xl p-3.5 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <Link
                      to={`/checklist/${c.slug}`}
                      onClick={onClose}
                      className="font-bold text-sm text-stone-900 dark:text-stone-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      {c.title}
                    </Link>
                    <button
                      onClick={() => onToggleBookmark(c.slug)}
                      className="text-stone-400 hover:text-rose-500 p-1 rounded hover:bg-stone-200 dark:hover:bg-stone-700"
                      title="حذف از نشانک‌ها"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <ProgressBar completedCount={checked} totalCount={total} size="sm" />

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-[11px] text-stone-500">
                      {checked === total ? (
                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> تکمیلی کامل
                        </span>
                      ) : (
                        `${toPersianDigits(checked)} از ${toPersianDigits(total)} انحام‌شده`
                      )}
                    </span>
                    <Link
                      to={`/checklist/${c.slug}`}
                      onClick={onClose}
                      className="font-medium text-stone-900 dark:text-stone-100 hover:underline flex items-center gap-1"
                    >
                      <span>ادامه</span>
                      <ArrowLeft className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 space-y-3">
          <div className="flex items-center justify-between gap-2 text-xs">
            {onExport && (
              <button
                onClick={handleDownloadBackup}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 font-medium hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                title="دانلود پشتیبان از پیشرفت‌های ذخیره‌شده"
              >
                <Download className="w-3.5 h-3.5" />
                <span>خروجی پشتیبان (JSON)</span>
              </button>
            )}

            {onImport && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 font-medium hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                title="بارگذاری فایل پشتیبان"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>ورودی پشتیبان</span>
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 pt-1 border-t border-stone-200/60 dark:border-stone-800/60">
            {savedChecklists.length > 0 && (
              <button
                onClick={() => {
                  if (window.confirm('آیا مطمئن هستید که می‌خواهید تمام پیشرفت‌های ذخیره‌شده را ریست کنید؟')) {
                    onResetAll();
                  }
                }}
                className="text-xs text-rose-600 dark:text-rose-400 hover:underline font-medium"
              >
                ریست کلی تمام درصدها
              </button>
            )}
            <button
              onClick={onClose}
              className="mr-auto px-4 py-1.5 text-xs font-semibold bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-lg"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
