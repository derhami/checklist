import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  FileText,
  Share2,
  Calendar,
  ChevronLeft,
  CheckCircle2,
  ListTodo,
  Sparkles,
  ArrowRight,
  Palette,
  MessageSquare,
  FileCode2,
} from 'lucide-react';
import { Project, RadarDimensionScore } from '../types';
import { categories } from '../data/categories';
import { allChecklists as checklists } from '../data/checklists';
import { RadarChart } from '../components/RadarChart';
import { toPersianDigits } from '../utils/persian';
import { generateAuditICalFile } from '../utils/calendarReminder';
import { useThemeContext } from '../context/ThemeContext';

interface DashboardPageProps {
  activeProject: Project;
  projects: Project[];
  onOpenProjectModal: () => void;
  onOpenShareModal: () => void;
  onOpenReportModal: () => void;
  onOpenThemeModal: () => void;
  getCheckedCount: (slug: string) => number;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  activeProject,
  projects,
  onOpenProjectModal,
  onOpenShareModal,
  onOpenReportModal,
  onOpenThemeModal,
  getCheckedCount,
}) => {
  const { accentColorClasses } = useThemeContext();
  const [reminderSaved, setReminderSaved] = useState(false);

  // Calculate radar scores per category
  const radarScores: RadarDimensionScore[] = categories.map((cat) => {
    const categoryChecklists = checklists.filter((c) => c.categoryId === cat.id);
    let totalItems = 0;
    let checkedItems = 0;

    categoryChecklists.forEach((chk) => {
      chk.sections.forEach((sec) => {
        totalItems += sec.items.length;
      });
      const checkedInSlug = activeProject.progress[chk.slug] || [];
      checkedItems += checkedInSlug.length;

      // Custom items
      const custom = activeProject.customItems[chk.slug] || [];
      totalItems += custom.length;
      checkedItems += custom.filter((c) => c.checked).length;
    });

    const percentage = totalItems > 0 ? (checkedItems / totalItems) * 100 : 0;

    return {
      categoryId: cat.id,
      title: cat.title,
      totalItems,
      checkedItems,
      percentage,
    };
  });

  // Calculate overall UX Health Score
  const totalItemsAll = radarScores.reduce((acc, curr) => acc + curr.totalItems, 0);
  const checkedItemsAll = radarScores.reduce((acc, curr) => acc + curr.checkedItems, 0);
  const overallPercentage = totalItemsAll > 0 ? Math.round((checkedItemsAll / totalItemsAll) * 100) : 0;

  const handleDownloadReminder = () => {
    generateAuditICalFile(activeProject.name, activeProject.clientOrTeam);
    setReminderSaved(true);
    setTimeout(() => setReminderSaved(false), 3000);
  };

  return (
    <div className="space-y-8 py-6 animate-fade-in">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-stone-100 relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Briefcase className="w-3.5 h-3.5" />
              <span>پروژه فعال: {activeProject.name}</span>
            </span>
            {activeProject.clientOrTeam && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-stone-800 text-stone-300">
                {activeProject.clientOrTeam}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-black leading-tight">
            داشبورد سلامت UX و ارزیابی کیفیت
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
            تحلیل هوشمند شاخص‌های تجربه کاربری، میزان پیشرفت پروژه و تولید خروجی‌های مدیریتی استاندارد.
          </p>

          {/* Quick Actions Bar */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <button
              onClick={onOpenProjectModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs font-bold transition-all border border-stone-700"
            >
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>تغییر پروژه ({toPersianDigits(projects.length)})</span>
            </button>

            <button
              onClick={onOpenReportModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-bold transition-all shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>دانلود گزارش PDF</span>
            </button>

            <button
              onClick={onOpenShareModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs font-bold transition-all border border-stone-700"
            >
              <Share2 className="w-4 h-4 text-blue-400" />
              <span>لینک زنده اشتراک</span>
            </button>

            <button
              onClick={handleDownloadReminder}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs font-bold transition-all border border-stone-700"
              title="دانلود فایل iCal یادآور ارزیابی دوره‌ای ۳ ماهه"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>{reminderSaved ? 'تقویم ذخیره شد!' : 'یادآور ۳ ماهه (iCal)'}</span>
            </button>

            <button
              onClick={onOpenThemeModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs font-bold transition-all border border-stone-700"
            >
              <Palette className="w-4 h-4 text-violet-400" />
              <span>تم رنگی</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid Layout: Radar Chart & Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Radar Chart Card */}
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-6 shadow-sm flex flex-col items-center justify-center">
          <div className="w-full flex justify-between items-center border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-stone-900 dark:text-stone-100">
                نمودار راداری بلوغ UX (Radar Health Score)
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                توزیع تعادل کیفیت تجربه کاربری در ۵ حوزه کلیدی
              </p>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-bold text-stone-500 uppercase">نمره سلامت</span>
              <div className="text-2xl font-black text-amber-500">
                ٪{toPersianDigits(overallPercentage)}
              </div>
            </div>
          </div>

          <div className="py-4">
            <RadarChart
              scores={radarScores}
              size={300}
              accentColor={accentColorClasses.fillHex}
            />
          </div>
        </div>

        {/* Overall Progress Gauge & Dimension Cards */}
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 dark:text-stone-400">
                خلاصه وضعیت بررسی
              </span>
              <span className="text-xs font-black text-amber-500">
                {toPersianDigits(checkedItemsAll)} از {toPersianDigits(totalItemsAll)} مورد
              </span>
            </div>

            <div className="w-full h-3 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
              <div
                className={`h-full ${accentColorClasses.progressBg} transition-all duration-500`}
                style={{ width: `${overallPercentage}%` }}
              />
            </div>

            <p className="text-xs text-stone-500 leading-relaxed">
              {overallPercentage >= 80
                ? '🌟 فوق‌العاده! پروژه شما از درجه بلوغ بالای ۸۰ درصد برخوردار است.'
                : overallPercentage >= 50
                ? '👍 خوب! بیش از ۵۰ درصد استانداردهای کلیدی بررسی شده‌اند.'
                : '🎯 در حال ارزیابی. چک‌لیست‌های مربوط به دسترسی‌پذیری و فرم‌ها را بررسی کنید.'}
            </p>
          </div>

          {/* Dimension Mini List */}
          <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 shadow-sm">
            <h3 className="text-xs font-bold text-stone-900 dark:text-stone-100 mb-2">
              تککیک ۵ حوزه اصلی:
            </h3>
            {radarScores.map((score) => (
              <div key={score.categoryId} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-stone-700 dark:text-stone-300">{score.title}</span>
                  <span className="text-amber-600 dark:text-amber-400">
                    ٪{toPersianDigits(Math.round(score.percentage))}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
                  <div
                    className="h-full bg-amber-500 transition-all duration-300"
                    style={{ width: `${score.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories & Checklist Direct Launch Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
          دسترسی سریع به چک‌لیست‌های پروژه
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {checklists.map((chk) => {
            const cat = categories.find((c) => c.id === chk.categoryId);
            const total = chk.sections.reduce((a, b) => a + b.items.length, 0);
            const done = getCheckedCount(chk.slug);
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;

            return (
              <Link
                key={chk.id}
                to={`/checklist/${chk.slug}`}
                className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-400 dark:hover:border-amber-600 transition-all shadow-sm group flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                      {cat?.title}
                    </span>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      ٪{toPersianDigits(pct)}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {chk.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2">
                    {chk.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-800/60">
                  <div className="w-full h-1.5 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
                    <div
                      className="h-full bg-amber-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-stone-500">
                    <span>{toPersianDigits(done)} از {toPersianDigits(total)} مورد</span>
                    <span className="flex items-center gap-1 font-bold text-stone-800 dark:text-stone-200 group-hover:translate-x-[-2px] transition-transform">
                      مشاهده چک‌لیست
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
