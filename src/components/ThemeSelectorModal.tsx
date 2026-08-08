import React from 'react';
import { X, Palette, Check } from 'lucide-react';
import { AccentTheme } from '../types';
import { useThemeContext } from '../context/ThemeContext';

interface ThemeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const THEMES: { id: AccentTheme; name: string; desc: string; bgClass: string; hex: string }[] = [
  {
    id: 'amber',
    name: 'زرد کهربایی (اصلی)',
    desc: 'رنگ آکسان کلاسیک و پرانرژی طراحی UX',
    bgClass: 'bg-amber-500',
    hex: '#f59e0b',
  },
  {
    id: 'blue',
    name: 'آبی دیزاین سیستم',
    desc: 'رنگ حرفه‌ای استاندارد رابط کاربری و نرم‌افزار',
    bgClass: 'bg-blue-600',
    hex: '#2563eb',
  },
  {
    id: 'emerald',
    name: 'سبز زمردی',
    desc: 'احساس موفقیت، کیفیت و آرامش چشمی',
    bgClass: 'bg-emerald-600',
    hex: '#059669',
  },
  {
    id: 'violet',
    name: 'بنفش رویال',
    desc: 'مدرن، خلاقانه و مناسب دیزاین لوکس',
    bgClass: 'bg-violet-600',
    hex: '#7c3aed',
  },
  {
    id: 'rose',
    name: 'رز مرجانی',
    desc: 'گرم، پرشور و متمایز',
    bgClass: 'bg-rose-600',
    hex: '#e11d48',
  },
  {
    id: 'stone',
    name: 'خاکستری مونوکروم',
    desc: 'مینیمال، خنثی و بدون تمایز رنگی',
    bgClass: 'bg-stone-800 dark:bg-stone-200',
    hex: '#44403c',
  },
];

export const ThemeSelectorModal: React.FC<ThemeSelectorModalProps> = ({ isOpen, onClose }) => {
  const { accentTheme, setAccentTheme } = useThemeContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-md w-full p-6 space-y-6 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 flex items-center justify-center font-bold">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                شخصی‌سازی تم رنگی (Accent Color)
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                انتخاب رنگ آکسان برنامه‌های کاربردی
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Theme List */}
        <div className="space-y-2.5">
          {THEMES.map((theme) => {
            const isSelected = accentTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => {
                  setAccentTheme(theme.id);
                  onClose();
                }}
                className={`w-full p-3.5 rounded-2xl border text-right transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-stone-900 dark:border-stone-100 bg-stone-50 dark:bg-stone-800/80 shadow-sm'
                    : 'border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`w-5 h-5 rounded-full ${theme.bgClass} shrink-0 shadow-sm`} />
                  <div className="min-w-0">
                    <p className="font-bold text-xs text-stone-900 dark:text-stone-100 truncate">
                      {theme.name}
                    </p>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate">
                      {theme.desc}
                    </p>
                  </div>
                </div>

                {isSelected && (
                  <span className="p-1 rounded-lg bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
