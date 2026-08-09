import React from 'react';
import { X, Printer, CheckCircle2, Clock, Globe, Award, FileText } from 'lucide-react';
import { Project, RadarDimensionScore } from '../types';
import { allChecklists as checklists } from '../data/checklists';
import { categories } from '../data/categories';
import { toPersianDigits } from '../utils/persian';

interface AuditReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProject: Project;
  radarScores: RadarDimensionScore[];
  overallPercentage: number;
}

export const AuditReportModal: React.FC<AuditReportModalProps> = ({
  isOpen,
  onClose,
  activeProject,
  radarScores,
  overallPercentage,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  // Calculate total items across all checklists
  let totalItemsCount = 0;
  let checkedItemsCount = 0;

  checklists.forEach((chk) => {
    chk.sections.forEach((sec) => {
      totalItemsCount += sec.items.length;
    });
    const checkedInSlug = activeProject.progress[chk.slug] || [];
    checkedItemsCount += checkedInSlug.length;

    // custom items
    const custom = activeProject.customItems[chk.slug] || [];
    totalItemsCount += custom.length;
    checkedItemsCount += custom.filter((c) => c.checked).length;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-900/70 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white print:static">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden max-h-[92vh] flex flex-col print:max-h-none print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Modal Controls (Hidden in Print) */}
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4 shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-500 text-stone-950 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                Ú¯Ø²Ø§Ø±Ø´ Ø±Ø³Ù…ÛŒ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ UX (Executive Audit Report)
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Ù‚Ø§Ø¨Ù„ Ø§Ø±Ø§Ø¦Ù‡ Ø¨Ù‡ Ù…Ø¯ÛŒØ±Ø§Ù† Ù…Ø­ØµÙˆÙ„ØŒ Ú©Ø§Ø±ÙØ±Ù…Ø§ÛŒØ§Ù† Ùˆ ØªÛŒÙ…â€ŒÙ‡Ø§ÛŒ ÙÙ†ÛŒ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 text-xs font-bold hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Ø¯Ø§Ù†Ù„ÙˆØ¯ PDF / Ù¾Ø±ÛŒÙ†Øª</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Report Document Body */}
        <div className="flex-1 overflow-y-auto space-y-8 pr-1 print:overflow-visible print:pr-0 text-stone-900 dark:text-stone-100 print:text-black">
          
          {/* Executive Header Banner */}
          <div className="p-6 rounded-3xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-4 print:bg-stone-50 print:border-stone-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-1">
                  <Award className="w-4 h-4" />
                  <span>Ú¯Ø²Ø§Ø±Ø´ Ø±Ø³Ù…ÛŒ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ Ú©ÛŒÙÛŒØª ØªØ¬Ø±Ø¨Ù‡ Ú©Ø§Ø±Ø¨Ø±ÛŒ</span>
                </div>
                <h1 className="text-2xl font-black text-stone-900 dark:text-stone-100 print:text-black">
                  Ù¾Ø±ÙˆÚ˜Ù‡: {activeProject.name}
                </h1>
                {activeProject.clientOrTeam && (
                  <p className="text-sm font-semibold text-stone-600 dark:text-stone-400 print:text-stone-700 mt-0.5">
                    Ú©Ø§Ø±ÙØ±Ù…Ø§ / ØªÛŒÙ…: {activeProject.clientOrTeam}
                  </p>
                )}
              </div>

              <div className="text-left sm:text-right text-xs text-stone-500 dark:text-stone-400 print:text-stone-600 space-y-1">
                <p>ØªØ§Ø±ÛŒØ® Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ: {new Date().toLocaleDateString('fa-IR')}</p>
                <p className="font-sans">Ù…Ø±Ø¬Ø¹ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ: checklist.nounproject.ir</p>
              </div>
            </div>

            {/* Core Health Badge Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 print:border-stone-300">
                <span className="text-[11px] font-bold text-stone-500">Ù†Ù…Ø±Ù‡ Ø³Ù„Ø§Ù…Øª UX</span>
                <div className="text-xl font-black text-brand-500 mt-0.5">
                  Ùª{toPersianDigits(overallPercentage)}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 print:border-stone-300">
                <span className="text-[11px] font-bold text-stone-500">Ù…ÙˆØ§Ø±Ø¯ Ù¾Ø§Ø³â€ŒØ´Ø¯Ù‡</span>
                <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {toPersianDigits(checkedItemsCount)}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 print:border-stone-300">
                <span className="text-[11px] font-bold text-stone-500">Ù…ÙˆØ§Ø±Ø¯ Ù†ÛŒØ§Ø²Ù…Ù†Ø¯ Ø¨Ù‡Ø¨ÙˆØ¯</span>
                <div className="text-xl font-black text-brand-600 dark:text-brand-400 mt-0.5">
                  {toPersianDigits(totalItemsCount - checkedItemsCount)}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 print:border-stone-300">
                <span className="text-[11px] font-bold text-stone-500">Ú©Ù„ Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§</span>
                <div className="text-xl font-black text-stone-900 dark:text-stone-100 mt-0.5">
                  {toPersianDigits(totalItemsCount)}
                </div>
              </div>
            </div>
          </div>

          {/* Category Dimensions Breakdown */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 print:text-black">
              ðŸ“Š ÙˆØ¶Ø¹ÛŒØª Ø³Ù„Ø§Ù…Øª Ø¯Ø± Ø­ÙˆØ²Ù‡â€ŒÙ‡Ø§ÛŒ Ø§ØµÙ„ÛŒ (UX Radar Dimensions)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {radarScores.map((score) => (
                <div
                  key={score.categoryId}
                  className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-2 print:border-stone-300"
                >
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span>{score.title}</span>
                    <span className="text-brand-600 dark:text-brand-400">
                      Ùª{toPersianDigits(Math.round(score.percentage))} ({toPersianDigits(score.checkedItems)} Ø§Ø² {toPersianDigits(score.totalItems)})
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-stone-200 dark:bg-stone-800 overflow-hidden">
                    <div
                      className="h-full bg-brand-500 transition-all duration-300"
                      style={{ width: `${score.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Active Checklist Breakdown */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 print:text-black border-b border-stone-200 dark:border-stone-800 pb-2">
              ðŸ“ Ø¬Ø²Ø¦ÛŒØ§Øª Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§ Ùˆ ÛŒØ§Ø¯Ø¯Ø§Ø´Øªâ€ŒÙ‡Ø§ÛŒ ØªÛŒÙ…
            </h3>

            {checklists.map((chk) => {
              const checkedInSlug = activeProject.progress[chk.slug] || [];
              const notesInSlug = activeProject.notes[chk.slug] || {};
              const customInSlug = activeProject.customItems[chk.slug] || [];

              // Skip checklists with 0 activity if needed, or show all
              const hasActivity = checkedInSlug.length > 0 || Object.keys(notesInSlug).length > 0 || customInSlug.length > 0;
              if (!hasActivity) return null;

              const cat = categories.find((c) => c.id === chk.categoryId);

              return (
                <div key={chk.id} className="space-y-3 page-break-inside-avoid">
                  <div className="flex items-center justify-between bg-stone-100 dark:bg-stone-800/80 p-3 rounded-2xl border border-stone-200/80 dark:border-stone-700">
                    <div className="flex items-center gap-2 font-bold text-xs">
                      <span className="text-brand-600 dark:text-brand-400">[{cat?.title}]</span>
                      <span>{chk.title}</span>
                    </div>
                    <span className="text-xs font-semibold text-stone-500">
                      {toPersianDigits(checkedInSlug.length)} Ù…ÙˆØ±Ø¯ ØªÚ©Ù…ÛŒÙ„ Ø´Ø¯Ù‡
                    </span>
                  </div>

                  <div className="space-y-2 pr-2">
                    {chk.sections.map((sec) => (
                      <div key={sec.id} className="space-y-1.5">
                        <h4 className="text-[11px] font-bold text-stone-500 dark:text-stone-400 mt-2">
                          {sec.title}
                        </h4>
                        {sec.items.map((item) => {
                          const isDone = checkedInSlug.includes(item.id);
                          const note = notesInSlug[item.id];

                          return (
                            <div
                              key={item.id}
                              className="text-xs p-2 rounded-xl bg-stone-50/50 dark:bg-stone-950/40 border border-stone-100 dark:border-stone-800/60 flex items-start gap-2"
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              ) : (
                                <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                              )}
                              <div className="space-y-1 min-w-0">
                                <p className={`font-medium ${isDone ? 'text-stone-800 dark:text-stone-200' : 'text-stone-500 dark:text-stone-400'}`}>
                                  {item.text}
                                </p>
                                {note && (
                                  <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-950/40 border border-brand-200/60 dark:border-brand-800/60 text-[11px] text-brand-900 dark:text-brand-200 space-y-0.5">
                                    <p>ðŸ“ ÛŒØ§Ø¯Ø¯Ø§Ø´Øª ØªÛŒÙ…: {note.text}</p>
                                    {note.figmaUrl && (
                                      <a
                                        href={note.figmaUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-brand-700 dark:text-brand-300 underline font-mono dir-ltr inline-block truncate max-w-full"
                                      >
                                        Figma: {note.figmaUrl}
                                      </a>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}

                    {/* Custom Team Items */}
                    {customInSlug.length > 0 && (
                      <div className="space-y-1.5 mt-2">
                        <h4 className="text-[11px] font-bold text-brand-600 dark:text-brand-400">
                          Ø¢ÛŒØªÙ…â€ŒÙ‡Ø§ÛŒ Ø§Ø®ØªØµØ§ØµÛŒ Ø§Ø¶Ø§ÙÙ‡ Ø´Ø¯Ù‡ ØªÙˆØ³Ø· ØªÛŒÙ…:
                        </h4>
                        {customInSlug.map((c) => (
                          <div
                            key={c.id}
                            className="text-xs p-2 rounded-xl bg-brand-50/40 dark:bg-brand-950/20 border border-brand-200/50 dark:border-brand-900/40 flex items-center gap-2"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 ${c.checked ? 'text-emerald-500' : 'text-stone-400'}`}
                            />
                            <span className="font-medium text-stone-800 dark:text-stone-200">
                              {c.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Branding for Print */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex justify-between items-center text-xs text-stone-500 print:text-stone-700">
            <span>ØªÙˆØ³Ø¹Ù‡ ØªÙˆØ³Ø· Ø­Ù…ÛŒØ¯Ø±Ø¶Ø§ Ø¯Ø±Ù‡Ù…ÛŒ (derhami.com)</span>
            <span className="flex items-center gap-1 font-sans">
              <Globe className="w-3.5 h-3.5" />
              <span>checklist.nounproject.ir</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
