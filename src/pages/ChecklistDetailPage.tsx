import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Bookmark,
  Share2,
  RotateCcw,
  CheckCircle2,
  Star,
  Info,
  Check,
  Sparkles,
  HelpCircle,
  Copy,
  Search,
  X,
  Printer,
  ChevronDown,
  ChevronUp,
  Plus,
  MessageSquare,
  Link2,
  Trash2,
  Edit2,
} from 'lucide-react';
import { getChecklistBySlug, getTotalItemsCount } from '../data/checklists';
import { categories } from '../data/categories';
import { ProgressBar } from '../components/ProgressBar';
import { ChecklistCard } from '../components/ChecklistCard';
import { DynamicIcon } from '../components/DynamicIcon';
import { SEO } from '../components/SEO';
import { toPersianDigits, searchMatches } from '../utils/persian';
import { Project } from '../types';

interface ChecklistDetailPageProps {
  activeProject: Project;
  isChecked: (slug: string, itemId: string) => boolean;
  toggleItem: (slug: string, itemId: string) => void;
  checkAllSection?: (slug: string, itemIds: string[]) => void;
  uncheckAllSection?: (slug: string, itemIds: string[]) => void;
  resetChecklist: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  toggleBookmark: (slug: string) => void;
  getCheckedCount: (slug: string) => number;
  addCustomItem: (slug: string, text: string, explanation?: string) => void;
  toggleCustomItem: (slug: string, customItemId: string) => void;
  deleteCustomItem: (slug: string, customItemId: string) => void;
  saveItemNote: (slug: string, itemId: string, text: string, figmaUrl?: string) => void;
}

export const ChecklistDetailPage: React.FC<ChecklistDetailPageProps> = ({
  activeProject,
  isChecked,
  toggleItem,
  checkAllSection,
  uncheckAllSection,
  resetChecklist,
  isBookmarked,
  toggleBookmark,
  getCheckedCount,
  addCustomItem,
  toggleCustomItem,
  deleteCustomItem,
  saveItemNote,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [filterMode, setFilterMode] = useState<'all' | 'unchecked' | 'essential'>('all');
  const [itemQuery, setItemQuery] = useState('');
  const [expandedTips, setExpandedTips] = useState<Record<string, boolean>>({});
  const [activeNoteItemId, setActiveNoteItemId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');
  const [figmaUrl, setFigmaUrl] = useState('');

  const [isAddingCustom, setIsAddingCustom] = useState(false);
  const [customText, setCustomText] = useState('');

  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [copiedItemId, setCopiedItemId] = useState<string | null>(null);
  const [allTipsExpanded, setAllTipsExpanded] = useState(false);

  if (!slug) return null;

  const checklist = getChecklistBySlug(slug);

  if (!checklist) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
          چک‌لیست موردنظر یافت نشد.
        </h2>
        <button
          onClick={() => navigate('/browse')}
          className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold"
        >
          بازگشت به کتابخانه چک‌لیست‌ها
        </button>
      </div>
    );
  }

  const category = categories.find((c) => c.id === checklist.categoryId);
  const totalStandardItems = getTotalItemsCount(checklist);
  const customItemsForSlug = activeProject.customItems[slug] || [];
  const totalItems = totalStandardItems + customItemsForSlug.length;

  const checkedItemsCount = getCheckedCount(checklist.slug);
  const isFullyCompleted = totalItems > 0 && checkedItemsCount === totalItems;
  const bookmarked = isBookmarked(checklist.slug);

  const notesForSlug = activeProject.notes[slug] || {};

  const toggleTip = (itemId: string) => {
    setExpandedTips((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleOpenNote = (itemId: string) => {
    if (activeNoteItemId === itemId) {
      setActiveNoteItemId(null);
    } else {
      setActiveNoteItemId(itemId);
      const existing = notesForSlug[itemId];
      setNoteText(existing?.text || '');
      setFigmaUrl(existing?.figmaUrl || '');
    }
  };

  const handleSaveNoteSubmit = (itemId: string) => {
    saveItemNote(slug, itemId, noteText, figmaUrl);
    setActiveNoteItemId(null);
  };

  const handleAddCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customText.trim()) return;
    addCustomItem(slug, customText);
    setCustomText('');
    setIsAddingCustom(false);
  };

  const handleToggleAllTips = () => {
    const next = !allTipsExpanded;
    setAllTipsExpanded(next);
    const newTips: Record<string, boolean> = {};
    if (next) {
      checklist.sections.forEach((sec) => {
        sec.items.forEach((it) => {
          if (it.explanation) newTips[it.id] = true;
        });
      });
    }
    setExpandedTips(newTips);
  };

  const handleCopySingleItem = (itemText: string, itemId: string, explanation?: string) => {
    if (!navigator.clipboard) return;
    const content = explanation
      ? `[چک‌لیست ${checklist.title}] ${itemText}\nراهنما: ${explanation}`
      : `[چک‌لیست ${checklist.title}] ${itemText}`;
    navigator.clipboard.writeText(content);
    setCopiedItemId(itemId);
    setTimeout(() => setCopiedItemId(null), 2000);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleCopyMarkdown = () => {
    if (!navigator.clipboard) return;
    let md = `# چک‌لیست: ${checklist.title}\n\n`;
    md += `${checklist.description}\n\n`;
    md += `پیشرفت: ${checkedItemsCount}/${totalItems} (${Math.round((checkedItemsCount / totalItems) * 100)}%)\n\n`;

    checklist.sections.forEach((sec) => {
      md += `## ${sec.title}\n`;
      sec.items.forEach((item) => {
        const checked = isChecked(checklist.slug, item.id);
        const icon = checked ? '[x]' : '[ ]';
        const star = item.isEssential ? '⭐ ' : '';
        md += `- ${icon} ${star}${item.text}\n`;
      });
      md += '\n';
    });

    if (customItemsForSlug.length > 0) {
      md += `## موارد اختصاصی تیم\n`;
      customItemsForSlug.forEach((c) => {
        const icon = c.checked ? '[x]' : '[ ]';
        md += `- ${icon} ${c.text}\n`;
      });
    }

    navigator.clipboard.writeText(md);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const relatedChecklists = (checklist.relatedSlugs || [])
    .map((s) => getChecklistBySlug(s))
    .filter(Boolean);

  return (
    <div className="space-y-8 py-6 sm:py-8 max-w-4xl mx-auto print:py-0 print:max-w-none">
      <SEO
        title={`چک‌لیست ${checklist.title}`}
        description={`چک‌لیست تخصصی ${checklist.title}: ${checklist.description}`}
        canonicalUrl={window.location.href}
      />

      {/* Top Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 font-medium print:hidden">
        <Link to="/" className="hover:text-stone-900 dark:hover:text-stone-100">
          خانه
        </Link>
        <span>/</span>
        <Link to="/browse" className="hover:text-stone-900 dark:hover:text-stone-100">
          کتابخانه
        </Link>
        <span>/</span>
        {category && (
          <>
            <Link
              to={`/category/${category.slug}`}
              className="hover:text-stone-900 dark:hover:text-stone-100"
            >
              {category.title}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-stone-900 dark:text-stone-100 font-bold truncate">
          {checklist.title}
        </span>
      </nav>

      {/* Checklist Header Card */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm print:shadow-none print:border-none print:p-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-6 print:border-stone-300">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              {category && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                  <DynamicIcon name={category.icon} className="w-3.5 h-3.5" />
                  <span>{category.title}</span>
                </span>
              )}
              {checklist.titleEn && (
                <span className="text-xs font-mono text-stone-400">({checklist.titleEn})</span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100 tracking-tight">
              {checklist.title}
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
              {checklist.description}
            </p>
          </div>

          {/* Action Buttons Header */}
          <div className="flex flex-wrap items-center gap-2 shrink-0 print:hidden">
            <button
              onClick={() => toggleBookmark(checklist.slug)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                bookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700'
                  : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-100'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span className="hidden sm:inline">{bookmarked ? 'نشانک‌شده' : 'نشانک‌گذاری'}</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-100 transition-colors"
            >
              {copiedMarkdown ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">
                {copiedMarkdown ? 'مارک‌داون کپی شد!' : 'کپی Markdown'}
              </span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-100 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">پرینت / PDF</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-100 transition-colors"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedLink ? 'لینک کپی شد!' : 'اشتراک‌گذاری'}</span>
            </button>

            {checkedItemsCount > 0 && (
              <button
                onClick={() => {
                  if (window.confirm('آیا می‌خواهید پیشرفت این چک‌لیست پاک شود؟')) {
                    resetChecklist(checklist.slug);
                  }
                }}
                className="p-2 rounded-xl text-stone-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Progress Display Bar */}
        <div className="space-y-2 print:hidden">
          <ProgressBar completedCount={checkedItemsCount} totalCount={totalItems} size="lg" />
          {isFullyCompleted && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-800 dark:text-emerald-300 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              <span>تبریـک! تمام استانداردهای این چک‌لیست با موفقیت تایید و تکمیل شدند.</span>
            </div>
          )}
        </div>
      </div>

      {/* Filter & Internal Search Bar */}
      <div className="space-y-3 print:hidden">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-stone-100 dark:bg-stone-900 p-2.5 rounded-2xl border border-stone-200/80 dark:border-stone-800">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar text-xs font-medium">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-xl transition-colors shrink-0 ${
                filterMode === 'all'
                  ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              همه ({toPersianDigits(totalItems)})
            </button>
            <button
              onClick={() => setFilterMode('unchecked')}
              className={`px-3 py-1.5 rounded-xl transition-colors shrink-0 ${
                filterMode === 'unchecked'
                  ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              تیک‌نخورده‌ها ({toPersianDigits(totalItems - checkedItemsCount)})
            </button>
            <button
              onClick={() => setFilterMode('essential')}
              className={`px-3 py-1.5 rounded-xl transition-colors shrink-0 flex items-center gap-1 ${
                filterMode === 'essential'
                  ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span>نکات حیاتی</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={itemQuery}
                onChange={(e) => setItemQuery(e.target.value)}
                placeholder="جستجو در این چک‌لیست..."
                className="w-full pr-8 pl-7 py-1.5 text-xs bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
              {itemQuery && (
                <button
                  onClick={() => setItemQuery('')}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            <button
              onClick={handleToggleAllTips}
              className="px-2.5 py-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 rounded-xl text-xs font-semibold flex items-center gap-1 shrink-0 hover:bg-stone-50"
            >
              {allTipsExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{allTipsExpanded ? 'بستن راهنماها' : 'نمایش راهنماها'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Checklist Sections Loop */}
      <div className="space-y-6">
        {checklist.sections.map((section) => {
          let visibleItems = section.items;

          if (filterMode === 'unchecked') {
            visibleItems = visibleItems.filter((it) => !isChecked(checklist.slug, it.id));
          } else if (filterMode === 'essential') {
            visibleItems = visibleItems.filter((it) => it.isEssential);
          }

          if (itemQuery.trim()) {
            const q = itemQuery.trim();
            visibleItems = visibleItems.filter(
              (it) => searchMatches(it.text, q) || (it.explanation && searchMatches(it.explanation, q))
            );
          }

          if (visibleItems.length === 0) return null;

          return (
            <div
              key={section.id}
              className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-sm print:shadow-none print:border-none print:p-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-3">
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2 flex-wrap">
                    <span>{section.title}</span>
                    <span className="text-xs font-mono text-stone-400 font-normal">
                      ({toPersianDigits(visibleItems.length)} مورد)
                    </span>
                  </h3>
                  {section.description && (
                    <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{section.description}</p>
                  )}
                </div>

                {checkAllSection && uncheckAllSection && (
                  <div className="flex items-center gap-2 shrink-0 text-xs print:hidden pt-1 sm:pt-0">
                    <button
                      onClick={() =>
                        checkAllSection(
                          checklist.slug,
                          section.items.map((i) => i.id)
                        )
                      }
                      className="text-stone-500 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                    >
                      تایید همه این بخش
                    </button>
                    <span className="text-stone-300 dark:text-stone-700">|</span>
                    <button
                      onClick={() =>
                        uncheckAllSection(
                          checklist.slug,
                          section.items.map((i) => i.id)
                        )
                      }
                      className="text-stone-500 hover:text-rose-600 dark:hover:text-rose-400 font-medium transition-colors"
                    >
                      پاک‌کردن بخش
                    </button>
                  </div>
                )}
              </div>

              {/* Items List */}
              <div className="space-y-2.5">
                {visibleItems.map((item) => {
                  const checked = isChecked(checklist.slug, item.id);
                  const isTipOpen = expandedTips[item.id];
                  const isNoteOpen = activeNoteItemId === item.id;
                  const itemNote = notesForSlug[item.id];

                  return (
                    <div
                      key={item.id}
                      className={`group rounded-2xl border transition-all duration-150 ${
                        checked
                          ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-900/40'
                          : 'bg-stone-50/60 dark:bg-stone-800/40 border-stone-200/60 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                      }`}
                    >
                      <div
                        onClick={() => toggleItem(checklist.slug, item.id)}
                        className="p-3.5 sm:p-4 flex items-start gap-3.5 cursor-pointer select-none"
                      >
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                            checked
                              ? 'bg-emerald-500 border-emerald-500 text-white'
                              : 'bg-white dark:bg-stone-900 border-stone-300 dark:border-stone-600 group-hover:border-stone-400'
                          }`}
                        >
                          {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>

                        <div className="flex-1 space-y-1">
                          <div className="flex items-start justify-between gap-2">
                            <p
                              className={`text-xs sm:text-sm font-medium leading-relaxed transition-colors ${
                                checked
                                  ? 'text-stone-500 dark:text-stone-400 line-through'
                                  : 'text-stone-900 dark:text-stone-100'
                              }`}
                            >
                              {item.text}
                            </p>

                            {item.isEssential && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 shrink-0">
                                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                الزامی
                              </span>
                            )}
                          </div>

                          {/* Existing Saved Note Badge */}
                          {itemNote && (
                            <div className="mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                              <p className="font-medium flex items-center gap-1.5">
                                <MessageSquare className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                <span>یادداشت تیم: {itemNote.text}</span>
                              </p>
                              {itemNote.figmaUrl && (
                                <a
                                  href={itemNote.figmaUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-[11px] font-mono text-amber-700 dark:text-amber-300 underline inline-flex items-center gap-1 dir-ltr truncate max-w-full"
                                >
                                  <Link2 className="w-3 h-3 shrink-0" />
                                  <span>{itemNote.figmaUrl}</span>
                                </a>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-1 print:hidden" onClick={(e) => e.stopPropagation()}>
                          {/* Note Button */}
                          <button
                            onClick={() => handleOpenNote(item.id)}
                            className={`p-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                              itemNote
                                ? 'text-amber-600 dark:text-amber-400 bg-amber-100/60 dark:bg-amber-950/60'
                                : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
                            }`}
                            title="افزودن یادداشت یا لینک فیگما"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handleCopySingleItem(item.text, item.id, item.explanation)}
                            className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded shrink-0 transition-colors"
                          >
                            {copiedItemId === item.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {item.explanation && (
                            <button
                              onClick={() => toggleTip(item.id)}
                              className={`p-1.5 rounded shrink-0 transition-colors ${
                                isTipOpen
                                  ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50'
                                  : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
                              }`}
                            >
                              <HelpCircle className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Expandable Note Input Box */}
                      {isNoteOpen && (
                        <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-amber-50/50 dark:bg-amber-950/20 rounded-b-2xl space-y-3">
                          <h4 className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                            <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
                            <span>ثبت یادداشت یا لینک فیگما برای این آیتم:</span>
                          </h4>
                          <textarea
                            rows={2}
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            placeholder="یادداشت تیم (مثلاً: نیاز به چک مجدد با طراح ارشد)..."
                            className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-2.5 text-xs text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-amber-500/50"
                          />
                          <input
                            type="text"
                            value={figmaUrl}
                            onChange={(e) => setFigmaUrl(e.target.value)}
                            placeholder="لینک فریم فیگما یا تیکت (https://figma.com/...)"
                            className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl px-3 py-1.5 text-xs text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-amber-500/50 dir-ltr text-left font-mono"
                          />
                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => setActiveNoteItemId(null)}
                              className="px-3 py-1.5 rounded-xl text-xs text-stone-500 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                            >
                              انصراف
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSaveNoteSubmit(item.id)}
                              className="px-4 py-1.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-600 transition-colors"
                            >
                              ذخیره یادداشت
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Explanation Tip Box */}
                      {item.explanation && isTipOpen && (
                        <div className="px-4 pb-4 pt-2 border-t border-stone-200/50 dark:border-stone-800/50 text-xs text-stone-600 dark:text-stone-300 bg-stone-100/50 dark:bg-stone-900/50 rounded-b-2xl space-y-1">
                          <div className="flex items-center gap-1.5 font-bold text-stone-800 dark:text-stone-200">
                            <Info className="w-3.5 h-3.5 text-amber-500" />
                            <span>راهنمای UX و استاندارد طراحی:</span>
                          </div>
                          <p className="leading-relaxed">{item.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Team Custom Checklist Items Box */}
      <div className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 rounded-3xl p-6 space-y-4 print:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">
              آیتم‌های اختصاصی اضافه شده توسط تیم ({toPersianDigits(customItemsForSlug.length)})
            </h3>
          </div>
          {!isAddingCustom && (
            <button
              onClick={() => setIsAddingCustom(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-bold transition-all shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>افزودن چک‌باکس جدید</span>
            </button>
          )}
        </div>

        {/* Add Custom Form */}
        {isAddingCustom && (
          <form onSubmit={handleAddCustomSubmit} className="bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-3">
            <input
              type="text"
              required
              autoFocus
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="عنوان آیتم اختصاصی (مثلاً: چک مجدد با لید فرانت‌اند)..."
              className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-amber-500/50"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddingCustom(false)}
                className="px-3 py-1.5 rounded-xl text-xs text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800"
              >
                انصراف
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-600"
              >
                افزودن آیتم
              </button>
            </div>
          </form>
        )}

        {/* Custom Items List */}
        {customItemsForSlug.length > 0 && (
          <div className="space-y-2">
            {customItemsForSlug.map((cItem) => (
              <div
                key={cItem.id}
                className="p-3 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-between gap-3"
              >
                <div
                  onClick={() => toggleCustomItem(slug, cItem.id)}
                  className="flex items-center gap-3 cursor-pointer min-w-0"
                >
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                      cItem.checked
                        ? 'bg-emerald-500 border-emerald-500 text-white'
                        : 'border-stone-300 dark:border-stone-600'
                    }`}
                  >
                    {cItem.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      cItem.checked ? 'text-stone-400 line-through' : 'text-stone-900 dark:text-stone-100'
                    }`}
                  >
                    {cItem.text}
                  </span>
                </div>

                <button
                  onClick={() => deleteCustomItem(slug, cItem.id)}
                  className="p-1.5 text-stone-400 hover:text-rose-600 rounded-lg shrink-0"
                  title="حذف آیتم اختصاصی"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Related Checklists Section */}
      {relatedChecklists.length > 0 && (
        <div className="space-y-4 pt-8 border-t border-stone-200 dark:border-stone-800 print:hidden">
          <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100">
            چک‌لیست‌های مرتبط پیشنهادشده
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedChecklists.map((rel) => {
              if (!rel) return null;
              return (
                <ChecklistCard
                  key={rel.id}
                  checklist={rel}
                  checkedCount={getCheckedCount(rel.slug)}
                  isBookmarked={isBookmarked(rel.slug)}
                  onToggleBookmark={toggleBookmark}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

