import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  CheckCircle,
  ArrowLeft,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Grid,
  Bookmark,
  CheckSquare,
  BookOpen
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { categories } from '../data/categories';
import { getFeaturedChecklists, getTotalItemsCount, allChecklists } from '../data/checklists';
import { CategoryCard } from '../components/CategoryCard';
import { ChecklistCard } from '../components/ChecklistCard';
import { toPersianDigits } from '../utils/persian';

interface HomePageProps {
  getCheckedCount: (slug: string) => number;
  isBookmarked: (slug: string) => boolean;
  onToggleBookmark: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  getCheckedCount,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const featured = getFeaturedChecklists();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/browse');
    }
  };

  const totalChecklistsCount = allChecklists.length;
  const totalItemsCount = allChecklists.reduce(
    (acc, curr) => acc + getTotalItemsCount(curr),
    0
  );

  return (
    <div className="space-y-16 py-6 sm:py-10">
      <SEO
        title="Ú†Ú©â€ŒÙ„ÛŒØ³Øª Ø·Ø±Ø§Ø­ÛŒ UX | Ù…Ø±Ø¬Ø¹ Ø¬Ø§Ù…Ø¹ Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯Ù‡Ø§ÛŒ Ø±Ø§Ø¨Ø· Ùˆ ØªØ¬Ø±Ø¨Ù‡ Ú©Ø§Ø±Ø¨Ø±"
        description="Ù…Ø±Ø¬Ø¹ ØªØ®ØµØµÛŒ Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ UI/UXØŒ Ø¯Ø³ØªØ±Ø³ÛŒâ€ŒÙ¾Ø°ÛŒØ±ÛŒ WCAGØŒ ÙØ±Ù…â€ŒÙ‡Ø§ Ùˆ Ú©Ø§Ù…Ù¾ÙˆÙ†Ù†Øªâ€ŒÙ‡Ø§ÛŒ Ù…Ø­ØµÙˆÙ„ Ø¨Ø±Ø§ÛŒ Ø·Ø±Ø§Ø­Ø§Ù† ÙˆØ¨ Ùˆ Ù†Ø±Ù…â€ŒØ§ÙØ²Ø§Ø±."
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-stone-100 to-stone-50 dark:from-stone-900/90 dark:to-stone-950 border border-stone-200/80 dark:border-stone-800 p-6 sm:p-12 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold mb-6 border border-stone-300/60 dark:border-stone-700">
          <Sparkles className="w-3.5 h-3.5 text-brand-500 fill-brand-500" />
          <span>Ù…Ø±Ø¬Ø¹ ÙØ§Ø±Ø³ÛŒ Ùˆ ØªØ®ØµØµÛŒ Ø·Ø±Ø§Ø­Ø§Ù† UI/UXØŒ ÙˆØ¨ Ùˆ Ù…Ø­ØµÙˆÙ„</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-stone-100 tracking-tight leading-[1.25] mb-6 max-w-3xl mx-auto">
          Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§ÛŒ ØªØ®ØµØµÛŒ Ø¨Ø±Ø§ÛŒ Ø·Ø±Ø§Ø­ÛŒ Ø¨Ø¯ÙˆÙ† Ù†Ù‚Øµ ÙˆØ¨ Ùˆ Ù†Ø±Ù…â€ŒØ§ÙØ²Ø§Ø±
        </h1>

        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
          Ù…Ø¬Ù…ÙˆØ¹Ù‡â€ŒØ§ÛŒ Ø¬Ø§Ù…Ø¹ Ø§Ø² Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯Ù‡Ø§ÛŒ ØªØ¬Ø±Ø¨Ù‡ Ú©Ø§Ø±Ø¨Ø±ÛŒØŒ Ø¯Ø³ØªØ±Ø³ÛŒâ€ŒÙ¾Ø°ÛŒØ±ÛŒØŒ Ø­Ø§Ù„Øªâ€ŒÙ‡Ø§ÛŒ Ù…Ø®ØªÙ„Ù Ú©Ø§Ù…Ù¾ÙˆÙ†Ù†Øªâ€ŒÙ‡Ø§ Ùˆ Ø¬Ø±ÛŒØ§Ù†â€ŒÙ‡Ø§ÛŒ Ù…Ø­ØµÙˆÙ„ Ø¨Ù‡ Ø²Ø¨Ø§Ù† ÙØ§Ø±Ø³ÛŒ Ø¨Ø§ Ù‚Ø§Ø¨Ù„ÛŒØª Ø«Ø¨Øª Ù¾ÛŒØ´Ø±ÙØª.
        </p>

        {/* Hero Search Box */}
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-xl mx-auto relative flex items-center shadow-lg shadow-stone-200/50 dark:shadow-none rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 overflow-hidden mb-8"
        >
          <Search className="w-5 h-5 text-stone-400 mr-4 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ú†Ù‡ Ú†ÛŒØ²ÛŒ Ù…ÛŒâ€ŒØ®ÙˆØ§Ù‡ÛŒØ¯ Ø·Ø±Ø§Ø­ÛŒ Ú©Ù†ÛŒØ¯ØŸ (Ù…Ø«Ù„Ø§: Ø¯Ú©Ù…Ù‡ØŒ Ù„Ù†Ø¯ÛŒÙ†Ú¯ØŒ ÙØ±Ù… Ø«Ø¨Øªâ€ŒÙ†Ø§Ù…)"
            className="w-full py-3.5 px-3 text-sm text-stone-900 dark:text-stone-100 bg-transparent placeholder-stone-400 focus:outline-none"
          />
          <button
            type="submit"
            className="m-1.5 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-stone-100 dark:text-stone-900 font-bold text-xs rounded-xl transition-all shrink-0"
          >
            Ø¬Ø³ØªØ¬Ùˆ
          </button>
        </form>

        {/* Quick Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-stone-200/80 dark:border-stone-800 text-xs">
          <div className="p-2.5 rounded-xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800">
            <span className="block font-bold text-base text-stone-900 dark:text-stone-100">
              {toPersianDigits(totalChecklistsCount)}
            </span>
            <span className="text-stone-500">Ú†Ú©â€ŒÙ„ÛŒØ³Øª Ø¢Ù†Ù„Ø§ÛŒÙ†</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800">
            <span className="block font-bold text-base text-stone-900 dark:text-stone-100">
              +{toPersianDigits(totalItemsCount)}
            </span>
            <span className="text-stone-500">Ù†Ú©ØªÙ‡ Ùˆ Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯ UX</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800">
            <span className="block font-bold text-base text-stone-900 dark:text-stone-100">
              WCAG 2.1
            </span>
            <span className="text-stone-500">Ù¾ÙˆØ´Ø´ Ø¯Ø³ØªØ±Ø³ÛŒâ€ŒÙ¾Ø°ÛŒØ±ÛŒ</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800">
            <span className="block font-bold text-base text-stone-900 dark:text-stone-100">
              ÙªÛ±Û°Û° Ø¢ÙÙ„Ø§ÛŒÙ†
            </span>
            <span className="text-stone-500">Ø°Ø®ÛŒØ±Ù‡ Ø¯Ø± Ù…Ø±ÙˆØ±Ú¯Ø±</span>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
              Ø¯Ø³ØªÙ‡â€ŒØ¨Ù†Ø¯ÛŒâ€ŒÙ‡Ø§ÛŒ Ø§ØµÙ„ÛŒ
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
              Ù…Ø¬Ù…ÙˆØ¹Ù‡â€ŒÙ‡Ø§ Ø¨Ø± Ø§Ø³Ø§Ø³ Ø³Ø§Ø®ØªØ§Ø± Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯ Ù…Ø­ØµÙˆÙ„Ø§Øª ÙˆØ¨ ØªÙ‚Ø³ÛŒÙ… Ø´Ø¯Ù‡â€ŒØ§Ù†Ø¯
            </p>
          </div>
          <Link
            to="/browse"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 sm:p-0 rounded-xl bg-stone-100 dark:bg-stone-800 sm:bg-transparent sm:dark:bg-transparent text-xs font-bold text-stone-900 dark:text-stone-100 hover:text-brand-600 dark:hover:text-brand-400 hover:underline whitespace-nowrap transition-colors"
          >
            <span>Ù…Ø´Ø§Ù‡Ø¯Ù‡ Ù‡Ù…Ù‡</span>
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Featured Checklists */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
              Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§ÛŒ Ø¨Ø±Ú¯Ø²ÛŒØ¯Ù‡ Ùˆ Ú©Ù„ÛŒØ¯ÛŒ
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
              Ù…Ø­Ø¨ÙˆØ¨â€ŒØªØ±ÛŒÙ† Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ Ø¨Ø±Ø§ÛŒ Ø´Ø±ÙˆØ¹ Ù‡Ø± Ù¾Ø±ÙˆÚ˜Ù‡ Ø¬Ø¯ÛŒØ¯
            </p>
          </div>
          <Link
            to="/browse"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 sm:p-0 rounded-xl bg-stone-100 dark:bg-stone-800 sm:bg-transparent sm:dark:bg-transparent text-xs font-bold text-stone-900 dark:text-stone-100 hover:text-brand-600 dark:hover:text-brand-400 hover:underline whitespace-nowrap transition-colors"
          >
            <span>Ú©ØªØ§Ø¨Ø®Ø§Ù†Ù‡ Ú©Ø§Ù…Ù„</span>
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((item) => (
            <ChecklistCard
              key={item.id}
              checklist={item}
              checkedCount={getCheckedCount(item.slug)}
              isBookmarked={isBookmarked(item.slug)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      </section>

      {/* Product Philosophy Pillars */}
      <section className="bg-stone-100/80 dark:bg-stone-900/50 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 space-y-8">
        <div className="max-w-2xl text-right">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
            Ú†Ø±Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Ú†Ú©â€ŒÙ„ÛŒØ³Øª Ø¯Ø± Ø·Ø±Ø§Ø­ÛŒ Ø¶Ø±ÙˆØ±ÛŒ Ø§Ø³ØªØŸ
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
            Ø·Ø±Ø§Ø­ÛŒ Ù…Ø­ØµÙˆÙ„ Ø´Ø§Ù…Ù„ Ø¬Ø²Ø¦ÛŒØ§Øª Ø¨ÛŒâ€ŒØ´Ù…Ø§Ø±ÛŒ Ø§Ø² Ø­Ø§Ù„Øªâ€ŒÙ‡Ø§ÛŒ Ø®Ø·Ø§ ØªØ§ Ø¯Ø³ØªØ±Ø³â€ŒÙ¾Ø°ÛŒØ±ÛŒ Ø§Ø³Øª. Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§ Ù…Ø§Ù†Ø¹ ÙØ±Ø§Ù…ÙˆØ´ÛŒ Ù†Ú©Ø§Øª Ø­ÛŒØ§ØªÛŒ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">
              Ø¬Ù„ÙˆÚ¯ÛŒØ±ÛŒ Ø§Ø² Ø®Ø·Ø§Ù‡Ø§ÛŒ Ø±Ø§ÛŒØ¬
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              Ø¨Ø±Ø±Ø³ÛŒ Ú©Ø§Ù…Ù„ ØªÙ…Ø§Ù… Ø­Ø§Ù„Øªâ€ŒÙ‡Ø§ÛŒ ØªØ¹Ø§Ù…Ù„ÛŒ (Hover, Focus, Loading, Disabled) Ù¾ÛŒØ´ Ø§Ø² ØªØ­ÙˆÛŒÙ„ Ø·Ø±Ø­ Ø¨Ù‡ ØªÛŒÙ… ØªÙˆØ³Ø¹Ù‡.
            </p>
          </div>

          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">
              Ø§ÙØ²Ø§ÛŒØ´ Ù†Ø±Ø® ØªØ¨Ø¯ÛŒÙ„ (CRO)
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              Ú©Ø§Ù‡Ø´ Ø§ØµØ·Ú©Ø§Ú© Ú©Ø§Ø±Ø¨Ø±Ø§Ù† Ø¯Ø± ÙØ±Ù…â€ŒÙ‡Ø§ØŒ ØµÙØ­Ø§Øª ØªØ³ÙˆÛŒÙ‡â€ŒØ­Ø³Ø§Ø¨ Ùˆ ÙˆØ±ÙˆØ¯ Ø¨Ø±Ø§ÛŒ Ø¯Ø³ØªÛŒØ§Ø¨ÛŒ Ø¨Ù‡ Ø¨Ø§Ù„Ø§ØªØ±ÛŒÙ† Ø¨Ø§Ø²Ø¯Ù‡ÛŒ.
            </p>
          </div>

          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">
              Ø¯Ø³ØªØ±Ø³â€ŒÙ¾Ø°ÛŒØ±ÛŒ Ù‡Ù…Ú¯Ø§Ù†ÛŒ (a11y)
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              Ø§Ø·Ù…ÛŒÙ†Ø§Ù† Ø§Ø² Ù¾Ø§Ø³ Ø´Ø¯Ù† Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯Ù‡Ø§ÛŒ Ú©Ù†ØªØ±Ø§Ø³Øª Ø±Ù†Ú¯ÛŒØŒ ØµÙØ­Ù‡â€ŒØ®ÙˆØ§Ù†â€ŒÙ‡Ø§ Ùˆ Ù¾ÛŒÙ…Ø§ÛŒØ´ Ø±Ø§Ø­Øª Ø¨Ø§ Ú©ÛŒØ¨ÙˆØ±Ø¯.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Ø¢Ù…Ø§Ø¯Ù‡â€ŒØ§ÛŒØ¯ Ø·Ø±Ø§Ø­ÛŒ Ù¾Ø±ÙˆÚ˜Ù‡ Ø®ÙˆØ¯ Ø±Ø§ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ Ú©Ù†ÛŒØ¯ØŸ
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 dark:text-stone-700 max-w-xl mx-auto leading-relaxed">
          ÙˆØ±ÙˆØ¯ Ø¨Ù‡ Ø¢Ø±Ø´ÛŒÙˆ Ú©Ø§Ù…Ù„ Û¶Û¹ Ú†Ú©â€ŒÙ„ÛŒØ³Øª ÙØ§Ø±Ø³ÛŒ Ùˆ Ø°Ø®ÛŒØ±Ù‡ Ø¯Ø±ØµØ¯ Ù¾ÛŒØ´Ø±ÙØª Ú©Ø§Ø± Ø±ÙˆÛŒ Ù…Ø±ÙˆØ±Ú¯Ø± Ø´Ù…Ø§.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/browse"
            className="px-6 py-3 bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-bold text-xs rounded-xl shadow-md hover:bg-stone-100 transition-all inline-flex items-center gap-2"
          >
            <Grid className="w-4 h-4" />
            <span>ÙˆØ±ÙˆØ¯ Ø¨Ù‡ Ú©ØªØ§Ø¨Ø®Ø§Ù†Ù‡ Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§</span>
          </Link>
          <Link
            to="/guide"
            className="px-6 py-3 bg-stone-800 dark:bg-stone-200 text-stone-200 dark:text-stone-800 font-bold text-xs rounded-xl hover:bg-stone-700 transition-all inline-flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Ù…Ø·Ø§Ù„Ø¹Ù‡ Ø±Ø§Ù‡Ù†Ù…Ø§ÛŒ UX</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
