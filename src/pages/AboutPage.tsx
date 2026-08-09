import React from 'react';
import { CheckSquare, Heart, Shield, Sparkles, Compass, Target, Code, CheckCircle2, Globe } from 'lucide-react';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-10 py-6 sm:py-8 max-w-4xl mx-auto">
      <SEO
        title="Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ù…Ø±Ø¬Ø¹ ØªØ®ØµØµÛŒ Ú†Ú©â€ŒÙ„ÛŒØ³Øª Ø·Ø±Ø§Ø­ÛŒ UX"
        description="Ø¢Ø´Ù†Ø§ÛŒÛŒ Ø¨Ø§ Ø§Ù‡Ø¯Ø§ÙØŒ Ø¯Ø§Ø³ØªØ§Ù† Ø´Ú©Ù„â€ŒÚ¯ÛŒØ±ÛŒ Ùˆ Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯Ù‡Ø§ÛŒ Ù…Ø±Ø¬Ø¹ Ø¬Ø§Ù…Ø¹ Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§ÛŒ ØªØ®ØµØµÛŒ UI/UX Ø¨Ø±Ø§ÛŒ Ø¬Ø§Ù…Ø¹Ù‡ Ø·Ø±Ø§Ø­Ø§Ù† Ùˆ ØªÙˆØ³Ø¹Ù‡â€ŒØ¯Ù‡Ù†Ø¯Ú¯Ø§Ù†."
      />
      {/* Hero Header Banner */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-semibold w-fit border border-brand-200 dark:border-brand-900">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ØªÙ‚Ø¯ÛŒÙ… Ø¨Ù‡ Ø¬Ø§Ù…Ø¹Ù‡ Ø·Ø±Ø§Ø­Ø§Ù† Ù…Ø­ØµÙˆÙ„ Ùˆ ÙˆØ¨ Ø§ÛŒØ±Ø§Ù†</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-black text-stone-900 dark:text-stone-100 tracking-tight leading-tight">
            Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ù…Ø±Ø¬Ø¹ Â«Ú†Ú©â€ŒÙ„ÛŒØ³Øª Ø·Ø±Ø§Ø­ÛŒÂ»
          </h1>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-medium">
            ÛŒÚ© Ø§Ø¨Ø²Ø§Ø± ØªØ®ØµØµÛŒ Ùˆ Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯Ø³Ø§Ø² Ø¨Ø±Ø§ÛŒ ØªÙ…Ø§Ù… Ø·Ø±Ø§Ø­Ø§Ù† Ø±Ø§Ø¨Ø· Ú©Ø§Ø±Ø¨Ø±ÛŒ (UI)ØŒ ØªØ¬Ø±Ø¨Ù‡ Ú©Ø§Ø±Ø¨Ø±ÛŒ (UX)ØŒ Ù…Ø¯ÛŒØ±Ø§Ù† Ù…Ø­ØµÙˆÙ„ Ùˆ ØªÙˆØ³Ø¹Ù‡â€ŒØ¯Ù‡Ù†Ø¯Ú¯Ø§Ù† ÙˆØ¨ Ø¯Ø± Ø³Ø±Ø§Ø³Ø± Ø§ÛŒØ±Ø§Ù†.
          </p>
        </div>

        <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-3 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
          <span>Ø·Ø±Ø§Ø­ÛŒ Ùˆ ØªÙˆØ³Ø¹Ù‡ ÛŒØ§ÙØªÙ‡ ØªÙˆØ³Ø·</span>
          <a
            href="https://nounproject.ir"
            target="_blank"
            rel="noopener noreferrer"
            title="Noun Project - پلتفرم ابزارهای تیم درهمی"
            className="inline-flex items-center gap-1.5 font-bold text-stone-900 dark:text-stone-100 hover:text-brand-600 dark:hover:text-brand-400 transition-colors bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700"
          >
            <Globe className="w-3.5 h-3.5 text-brand-500" />
            <span>Noun Project - تیم درهمی</span>
          </a>
        </div>
      </div>

      {/* Story & Philosophy Section */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 flex items-center justify-center font-bold">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-stone-900 dark:text-stone-100">
              Ú†Ø±Ø§ Ø§ÛŒÙ† Ù¾Ø±ÙˆÚ˜Ù‡ Ø´Ú©Ù„ Ú¯Ø±ÙØªØŸ
            </h2>
            <span className="text-xs text-stone-500">ÙÙ„Ø³ÙÙ‡ Ø®Ù„Ù‚Øª Ùˆ Ø±ÙˆÛŒØ§ÛŒ Ú©ÛŒÙÛŒØª Ø¨ÛŒØ´ØªØ± Ø¯Ø± Ù…Ø­ØµÙˆÙ„Ø§Øª ÙØ§Ø±Ø³ÛŒ</span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
          <p>
            Ø®Ù„Ù‚ ÛŒÚ© Ù…Ø­ØµÙˆÙ„ ÙÙˆÙ‚â€ŒØ§Ù„Ø¹Ø§Ø¯Ù‡ ØªÙ†Ù‡Ø§ Ø¨Ù‡ ØªØ±Ú©ÛŒØ¨ Ø±Ù†Ú¯â€ŒÙ‡Ø§ÛŒ Ø¬Ø°Ø§Ø¨ Ùˆ ÙÙˆÙ†Øªâ€ŒÙ‡Ø§ÛŒ Ø²ÛŒØ¨Ø§ Ø®Ù„Ø§ØµÙ‡ Ù†Ù…ÛŒâ€ŒØ´ÙˆØ¯Ø› Ø§Ø±Ø²Ø´ ÙˆØ§Ù‚Ø¹ÛŒ ÛŒÚ© Ø·Ø±Ø­ Ø¯Ø± Ø¬Ø²Ø¦ÛŒØ§Øª Ù¾Ù†Ù‡Ø§Ù†ÛŒ Ù†Ù‡ÙØªÙ‡ Ø§Ø³Øª Ú©Ù‡ Ø§ØºÙ„Ø¨ ØªØ§ Ø²Ù…Ø§Ù† Ù…ÙˆØ§Ø¬Ù‡Ù‡ Ú©Ø§Ø±Ø¨Ø± Ø¨Ø§ Ù…Ø­ØµÙˆÙ„ Ø¯ÛŒØ¯Ù‡ Ù†Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯: Ø­Ø§Ù„Øªâ€ŒÙ‡Ø§ÛŒ Ø®Ø·Ø§ (Error States)ØŒ Ø±ÙØªØ§Ø± ÙØ±Ù…â€ŒÙ‡Ø§ Ø¯Ø± Ø§ÛŒÙ†ØªØ±Ù†Øª Ú©Ù†Ø¯ØŒ Ø¯Ø³ØªØ±Ø³ÛŒâ€ŒÙ¾Ø°ÛŒØ±ÛŒ Ø¨Ø±Ø§ÛŒ Ø§ÙØ±Ø§Ø¯ Ú©Ù…â€ŒØªÙˆØ§Ù†ØŒ Ùˆ Ù‡Ù…Ø§Ù‡Ù†Ú¯ÛŒ Ø¯Ù‚ÛŒÙ‚ Ú©Ø§Ù…Ù¾ÙˆÙ†Ù†Øªâ€ŒÙ‡Ø§ Ø¯Ø± Ø³Ù†Ø§Ø±ÛŒÙˆÙ‡Ø§ÛŒ Ù¾ÛŒÚ†ÛŒØ¯Ù‡.
          </p>

          <p>
            Ù¾Ø±ÙˆÚ˜Ù‡ Â«Ú†Ú©â€ŒÙ„ÛŒØ³Øª Ø·Ø±Ø§Ø­ÛŒÂ» Ø¨Ø§ Ø§ÛŒÙ† Ù‡Ø¯Ù Ù…ØªÙˆÙ„Ø¯ Ø´Ø¯ Ú©Ù‡ Ù…Ø±Ø¬Ø¹ÛŒ Ø¬Ø§Ù…Ø¹ØŒ Ù…ØªÙ…Ø±Ú©Ø² Ùˆ Ú©Ø§Ù…Ù„Ø§Ù‹ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ Ø±Ø§ Ø¨Ù‡ Ø²Ø¨Ø§Ù† ÙØ§Ø±Ø³ÛŒ Ø¯Ø± Ø§Ø®ØªÛŒØ§Ø± Ø¬Ø§Ù…Ø¹Ù‡ Ø®Ù„Ø§Ù‚ Ùˆ Ù¾Ø±ØªÙ„Ø§Ø´ Ø·Ø±Ø§Ø­Ø§Ù† Ùˆ ØªÙˆØ³Ø¹Ù‡â€ŒØ¯Ù‡Ù†Ø¯Ú¯Ø§Ù† Ø§ÛŒØ±Ø§Ù† Ù‚Ø±Ø§Ø± Ø¯Ù‡Ø¯. Ø§ÛŒÙ† Ø³Ø§Ù…Ø§Ù†Ù‡ Ø´Ø§Ù…Ù„ Ø¨ÛŒØ´ Ø§Ø² Û¶Û¹ Ú†Ú©â€ŒÙ„ÛŒØ³Øª Ú©Ø§Ù…Ù„ Ùˆ Ø¨ÛŒØ´ Ø§Ø² Û±Û°Û°Û° Ù…Ø¹ÛŒØ§Ø± Ø³Ù†Ø¬Ø´ Ø¯Ù‚ÛŒÙ‚ Ø¯Ø± Ø¨Ø®Ø´â€ŒÙ‡Ø§ÛŒ Ú©Ø§Ù…Ù¾ÙˆÙ†Ù†Øªâ€ŒÙ‡Ø§ØŒ Ø¬Ø±ÛŒØ§Ù†â€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±ÛŒ (Flows)ØŒ Ø§ØµÙˆÙ„ ÙˆØ¨â€ŒØ³Ø§ÛŒØªØŒ Ø¨Ø±Ù†Ø¯ÛŒÙ†Ú¯ Ùˆ Ù…Ø¨Ø§Ø­Ø« ØªØ®ØµØµÛŒ UX Ø§Ø³Øª.
          </p>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
            Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯Ø³Ø§Ø²ÛŒ Ùˆ Ø³Ù†Ø¬Ø´ Ú©ÛŒÙÛŒØª
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            ØªØ¯ÙˆÛŒÙ†â€ŒØ´Ø¯Ù‡ Ø¨Ø± Ø§Ø³Ø§Ø³ Ø±Ø§Ù‡Ù†Ù…Ø§Ù‡Ø§ÛŒ Ù…Ø¹ØªØ¨Ø± Ø¬Ù‡Ø§Ù†ÛŒ Ø§Ø² Ø¬Ù…Ù„Ù‡ WCAG 2.1ØŒ Ù‚ÙˆØ§Ù†ÛŒÙ† Nielsen Norman Group Ùˆ Ø³ÛŒØ³ØªÙ…â€ŒÙ‡Ø§ÛŒ Ø·Ø±Ø§Ø­ÛŒ Ù…Ø¯Ø±Ù† Ø¨ÛŒÙ†â€ŒØ§Ù„Ù…Ù„Ù„ÛŒ Ø¨Ø§ ØªØ·Ø¨ÛŒÙ‚ Ú©Ø§Ù…Ù„ Ø¨Ø± Ù†ÛŒØ§Ø²Ù‡Ø§ÛŒ ÙˆØ¨ ÙØ§Ø±Ø³ÛŒ.
          </p>
        </div>

        <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
            <Code className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
            Ø§Ø¨Ø²Ø§Ø± ØªØ¹Ø§Ù…Ù„ÛŒ Ø¨Ø±Ø§ÛŒ ØªÛŒÙ…â€ŒÙ‡Ø§ÛŒ ÙÙ†ÛŒ Ùˆ Ù…Ø­ØµÙˆÙ„
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            Ø§Ù…Ú©Ø§Ù† Ø®Ø±ÙˆØ¬ÛŒ Ú¯Ø±ÙØªÙ† Ú©Ù„ Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§ Ø¨Ù‡ ÙØ±Ù…Øª Markdown Ø¬Ù‡Øª Ú©Ù¾ÛŒâ€ŒÙ¾ÛŒØ³Øª Ø³Ø±ÛŒØ¹ Ø¯Ø± ÙØ§ÛŒÙ„â€ŒÙ‡Ø§ÛŒ JiraØŒ NotionØŒ GitHub ÛŒØ§ Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø·Ø±Ø§Ø­ÛŒ ØªÛŒÙ….
          </p>
        </div>

        <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
            Ø°Ø®ÛŒØ±Ù‡â€ŒØ³Ø§Ø²ÛŒ Û±Û°Û°Ùª Ù…Ø­Ù„ÛŒ Ùˆ Ø§Ù…Ù†
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            ØªÙ…Ø§Ù…ÛŒ ØªÛŒÚ©â€ŒÙ‡Ø§ØŒ Ø¯Ø±ØµØ¯ Ù¾ÛŒØ´Ø±ÙØª Ùˆ Ù„ÛŒØ³Øªâ€ŒÙ‡Ø§ÛŒ Ù†Ø´Ø§Ù†Ú©â€ŒØ´Ø¯Ù‡ Ø¯Ø±ÙˆÙ† Ù…Ø±ÙˆØ±Ú¯Ø± Ø´Ù…Ø§ (localStorage) Ø¨Ø§Ù‚ÛŒ Ù…ÛŒâ€ŒÙ…Ø§Ù†Ø¯ Ùˆ Ø­ØªÛŒ Ø§Ù…Ú©Ø§Ù† Ø¯Ø§Ù†Ù„ÙˆØ¯ Ùˆ Ø¨Ø§Ø±Ú¯Ø°Ø§Ø±ÛŒ ÙØ§ÛŒÙ„ Ù¾Ø´ØªÛŒØ¨Ø§Ù† JSON ÙˆØ¬ÙˆØ¯ Ø¯Ø§Ø±Ø¯.
          </p>
        </div>

        <div className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
            Ú©Ø§Ù…Ù„Ø§Ù‹ Ø±Ø§ÛŒÚ¯Ø§Ù† Ùˆ Ø¨Ø¯ÙˆÙ† ØªØ¨Ù„ÛŒØºØ§Øª
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            ØªÙˆØ³Ø¹Ù‡â€ŒÛŒØ§ÙØªÙ‡ Ø¨Ù‡ Ø¹Ù†ÙˆØ§Ù† ÛŒÚ© Ù‡Ø¯ÛŒÙ‡ Ùˆ Ø§Ø¨Ø²Ø§Ø± Ù‡Ù…ÛŒØ´Ú¯ÛŒ Ø¨Ø±Ø§ÛŒ Ø§Ø±ØªÙ‚Ø§ÛŒ Ø³Ø·Ø­ Ú©ÛŒÙÛŒ Ù…Ø­ØµÙˆÙ„Ø§Øª Ø¯ÛŒØ¬ÛŒØªØ§Ù„ Ø§ÛŒØ±Ø§Ù† Ø¨Ø¯ÙˆÙ† Ù‡ÛŒÚ†â€ŒÚ¯ÙˆÙ†Ù‡ Ù…Ø­Ø¯ÙˆØ¯ÛŒØª Ø¯Ø± Ø§Ø³ØªÙØ§Ø¯Ù‡.
          </p>
        </div>
      </div>

      {/* Personal Note Card */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-stone-100 rounded-3xl p-6 sm:p-10 space-y-4 shadow-xl border border-stone-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <p className="text-sm sm:text-base leading-relaxed font-medium italic text-stone-200">
          Â«Ø§Ù…ÛŒØ¯ÙˆØ§Ø±Ù… Ø§ÛŒÙ† Ù…Ø±Ø¬Ø¹ Ú©Ù…Ú© Ú©Ù†Ø¯ ØªØ§ Ù‡Ù…Ù‡ Ù…Ø§ Ø¨Ù‡ Ø¹Ù†ÙˆØ§Ù† ÙØ¹Ø§Ù„Ø§Ù† ØµÙ†Ø¹Øª Ù…Ø­ØµÙˆÙ„ Ø¯ÛŒØ¬ÛŒØªØ§Ù„ØŒ Ú¯Ø§Ù…ÛŒ Ø¨Ù‡ Ø³ÙˆÛŒ Ø®Ø±ÙˆØ¬ÛŒâ€ŒÙ‡Ø§ÛŒ Ø¯Ù‚ÛŒÙ‚â€ŒØªØ±ØŒ Ø³Ù†Ø§Ø±ÛŒÙˆÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±ÛŒ Ø¨ÛŒâ€ŒÙ†Ù‚Øµâ€ŒØªØ± Ùˆ Ø§Ø­ØªØ±Ø§Ù… Ø¨ÛŒØ´ØªØ± Ø¨Ù‡ ØªØ¬Ø±Ø¨Ù‡ Ú©Ø§Ø±Ø¨Ø±Ø§Ù† Ø¨Ø±Ø¯Ø§Ø±ÛŒÙ….Â»
        </p>

        <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-800 border border-stone-700 flex items-center justify-center font-black text-brand-400">
              HD
            </div>
            <div>
              <span className="block font-bold text-sm text-stone-100">
                Ø­Ù…ÛŒØ¯Ø±Ø¶Ø§ Ø¯Ø±Ù‡Ù…ÛŒ
              </span>
              <a
                href="https://nounproject.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-400 hover:underline"
              >
                Noun Project
              </a>
            </div>
          </div>
          <span className="text-xs text-stone-500 font-mono">Ø³Ø§Ù„ Û±Û´Û°Û´ / Û²Û°Û²Û¶</span>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
          Ù¾Ø±Ø³Ø´â€ŒÙ‡Ø§ÛŒ Ù…ØªØ¯Ø§ÙˆÙ„
        </h2>

        <div className="space-y-4 text-xs sm:text-sm">
          <div className="space-y-1.5 border-b border-stone-100 dark:border-stone-800 pb-4">
            <h3 className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Ú†Ú¯ÙˆÙ†Ù‡ Ø§Ø² Ø§ÛŒÙ† Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§ Ø¯Ø± ÙØ±Ø¢ÛŒÙ†Ø¯ Ø·Ø±Ø§Ø­ÛŒ Ùˆ Ø±ÛŒÙˆÛŒÙˆ ØªÛŒÙ… Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒÙ…ØŸ</span>
            </h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed pr-6">
              Ù‚Ø¨Ù„ Ø§Ø² ØªØ­ÙˆÛŒÙ„ ÙØ§ÛŒÙ„ Figma Ø¨Ù‡ ØªÛŒÙ… ØªÙˆØ³Ø¹Ù‡ ÛŒØ§ Ø¨Ø±Ú¯Ø²Ø§Ø±ÛŒ Ø¬Ù„Ø³Ù‡ Design ReviewØŒ Ù…ÙˆØ§Ø±Ø¯ Ù…Ø±Ø¨ÙˆØ· Ø¨Ù‡ Ú©Ø§Ù…Ù¾ÙˆÙ†Ù†Øªâ€ŒÙ‡Ø§ ÛŒØ§ Ø¬Ø±ÛŒØ§Ù† Ú©Ø§Ø±Ø¨Ø±ÛŒ Ù…ÙˆØ±Ø¯ Ù†Ø¸Ø± Ø±Ø§ Ú†Ú© Ú©Ù†ÛŒØ¯ ØªØ§ Ù…Ø·Ù…Ø¦Ù† Ø´ÙˆÛŒØ¯ ØªÙ…Ø§Ù… Ø­Ø§Ù„Øªâ€ŒÙ‡Ø§ÛŒ Ù„ÙˆØ¯ÛŒÙ†Ú¯ØŒ Ø®Ø·Ø§ØŒ Ø®Ø§Ù„ÛŒ Ø¨ÙˆØ¯Ù† (Empty States) Ùˆ ØªØ¹Ø§Ù…Ù„Ø§Øª Ú©ÛŒØ¨ÙˆØ±Ø¯ Ø±Ø¹Ø§ÛŒØª Ø´Ø¯Ù‡â€ŒØ§Ù†Ø¯.
            </p>
          </div>

          <div className="space-y-1.5 border-b border-stone-100 dark:border-stone-800 pb-4">
            <h3 className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Ø¢ÛŒØ§ Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ù¾ÛŒØ´Ø±ÙØª Ù…Ù† Ø¨Ø§ Ø¨Ø³ØªÙ† Ù…Ø±ÙˆØ±Ú¯Ø± Ù¾Ø§Ú© Ù…ÛŒâ€ŒØ´ÙˆØ¯ØŸ</span>
            </h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed pr-6">
              Ø®ÛŒØ±. Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ÛŒ Ø´Ù…Ø§ Ø¯Ø± Ø­Ø§ÙØ¸Ù‡ Ù…Ø­Ù„ÛŒ Ù…Ø±ÙˆØ±Ú¯Ø± (localStorage) Ø°Ø®ÛŒØ±Ù‡ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯. Ù‡Ù…Ú†Ù†ÛŒÙ† Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒØ¯ Ø¯Ø± Ø¨Ø®Ø´ Ù†Ø´Ø§Ù†Ú©â€ŒÙ‡Ø§ØŒ Ø®Ø±ÙˆØ¬ÛŒ ÙØ§ÛŒÙ„ Ù¾Ø´ØªÛŒØ¨Ø§Ù† JSON Ø¨Ú¯ÛŒØ±ÛŒØ¯ Ùˆ Ø¢Ù† Ø±Ø§ Ø¯Ø± Ù…Ø±ÙˆØ±Ú¯Ø± Ø¯ÛŒÚ¯Ø± Ø¨Ø§Ø²ÛŒØ§Ø¨ÛŒ Ú©Ù†ÛŒØ¯.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

