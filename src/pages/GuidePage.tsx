import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import {
  BookOpen,
  CheckCircle,
  ShieldCheck,
  Type,
  Layout,
  Eye,
  Palette,
  Smartphone,
  Calculator,
  Sliders,
  Check,
  X,
  Sparkles,
} from 'lucide-react';
import { toPersianDigits } from '../utils/persian';

export const GuidePage: React.FC = () => {
  // Contrast Checker States
  const [textColor, setTextColor] = useState('#2B2F29'); // stone-900
  const [bgColor, setBgColor] = useState('#F2F3F8'); // stone-50
  const [fontSize, setFontSize] = useState(16);

  // Helper for luminance & contrast calculation
  const getRGB = (hex: string) => {
    let clean = hex.replace('#', '');
    if (clean.length === 3) {
      clean = clean.split('').map((c) => c + c).join('');
    }
    const num = parseInt(clean, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  };

  const getLuminance = (r: number, g: number, b: number) => {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const calculateContrast = (hex1: string, hex2: string) => {
    try {
      const rgb1 = getRGB(hex1);
      const rgb2 = getRGB(hex2);
      const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
      const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
      const brightest = Math.max(l1, l2);
      const darkest = Math.min(l1, l2);
      return (brightest + 0.05) / (darkest + 0.05);
    } catch {
      return 1;
    }
  };

  const contrastRatio = calculateContrast(textColor, bgColor);
  const passAANormal = contrastRatio >= 4.5;
  const passAALarge = contrastRatio >= 3.0;
  const passAAANormal = contrastRatio >= 7.0;

  // Typographic Scale State
  const [baseSize, setBaseSize] = useState(16);
  const [ratio, setRatio] = useState(1.25); // Major Third

  return (
    <div className="space-y-10 py-6 sm:py-8 max-w-4xl mx-auto">
      <SEO
        title="Ø±Ø§Ù‡Ù†Ù…Ø§ÛŒ Ø§ØµÙˆÙ„ UX Ùˆ Ø§Ø¨Ø²Ø§Ø±Ù‡Ø§ÛŒ ØªØ¹Ø§Ù…Ù„ÛŒ Ú©Ù†ØªØ±Ø§Ø³Øª Ùˆ ØªØ§ÛŒÙ¾ÙˆÚ¯Ø±Ø§ÙÛŒ"
        description="Ú©ØªØ§Ø¨Ú†Ù‡ Ø±Ø§Ù‡Ù†Ù…Ø§ÛŒ Ø§ØµÙˆÙ„ UXØŒ Ù‚ÙˆØ§Ù†ÛŒÙ† ØªØ§ÛŒÙ¾ÙˆÚ¯Ø±Ø§ÙÛŒØŒ Ø´Ø¨Ú©Ù‡ Û¸ Ù¾ÛŒÚ©Ø³Ù„ÛŒØŒ Ø§Ø¨Ø²Ø§Ø± Ø³Ù†Ø¬Ø´ Ú©Ù†ØªØ±Ø§Ø³Øª WCAG Ùˆ Ù…Ø­Ø§Ø³Ø¨Ù‡â€ŒÚ¯Ø± Ù†Ø³Ø¨Øª Ø§Ù†Ø¯Ø§Ø²Ù‡â€ŒÙ‡Ø§ÛŒ Ù‚Ù„Ù… Ø¨Ø±Ø§ÛŒ Ø·Ø±Ø§Ø­Ø§Ù†."
      />
      {/* Header Banner */}
      <div className="bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 rounded-3xl p-6 sm:p-10 space-y-4 shadow-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 dark:bg-stone-200 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-brand-400 dark:text-brand-600" />
          <span>Ú©ØªØ§Ø¨Ú†Ù‡ Ø±Ø§Ù‡Ù†Ù…Ø§ÛŒ Ø§ØµÙˆÙ„ Ùˆ Ø§Ø¨Ø²Ø§Ø±Ù‡Ø§ÛŒ ØªØ¹Ø§Ù…Ù„ÛŒ Ø·Ø±Ø§Ø­ÛŒ</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
          Ø±Ø§Ù‡Ù†Ù…Ø§ÛŒ Ø¬Ø§Ù…Ø¹ Ø§ØµÙˆÙ„ UX Ùˆ Ù‚ÙˆØ§Ù†ÛŒÙ† Ø·Ø±Ø§Ø­ÛŒ Ø±Ø§Ø¨Ø· Ú©Ø§Ø±Ø¨Ø±ÛŒ
        </h1>
        <p className="text-xs sm:text-sm text-stone-300 dark:text-stone-700 leading-relaxed max-w-2xl">
          Ø®Ù„Ø§ØµÙ‡â€ŒØ§ÛŒ ØªØ¯ÙˆÛŒÙ†â€ŒØ´Ø¯Ù‡ Ø§Ø² Ù…Ù‡Ù…â€ŒØªØ±ÛŒÙ† Ù‚ÙˆØ§Ù†ÛŒÙ† ØªØ§ÛŒÙ¾ÙˆÚ¯Ø±Ø§ÙÛŒØŒ Ø³ÛŒØ³ØªÙ… ÙÙˆØ§ØµÙ„ Ø´Ø¨Ú©Ù‡ Û¸ Ù¾ÛŒÚ©Ø³Ù„ÛŒØŒ Ø§Ø¨Ø²Ø§Ø± Ø³Ù†Ø¬Ø´ Ú©Ù†ØªØ±Ø§Ø³Øª WCAG Ùˆ Ù…Ø­Ø§Ø³Ø¨Ø© Ù†Ø³Ø¨Øªâ€ŒÙ‡Ø§ÛŒ Ù…ØªÙ†ÛŒ.
        </p>
      </div>

      {/* Interactive Tool 1: WCAG Contrast Checker */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
                Ø³Ù†Ø¬Ø´ Ø²Ù†Ø¯Ù‡ Ú©Ù†ØªØ±Ø§Ø³Øª Ø±Ù†Ú¯â€ŒÙ‡Ø§ (WCAG Contrast Checker)
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ Ø¯Ø³ØªØ±Ø³ÛŒâ€ŒÙ¾Ø°ÛŒØ±ÛŒ Ø±Ù†Ú¯ Ù…ØªÙ† Ùˆ Ù¾Ø³â€ŒØ²Ù…ÛŒÙ†Ù‡ Ø¨Ø± Ø§Ø³Ø§Ø³ Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯ Û².Û±</p>
            </div>
          </div>
          <span className="self-start sm:self-auto text-xs font-mono font-bold px-3 py-1 bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 rounded-full border border-brand-200 dark:border-brand-800 shrink-0">
            {contrastRatio.toFixed(2)}:1
          </span>
        </div>

        {/* Inputs & Live Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Controls */}
          <div className="space-y-4 text-xs font-medium">
            <div className="space-y-1.5">
              <label className="text-stone-700 dark:text-stone-300">Ø±Ù†Ú¯ Ù…ØªÙ† (Text Color):</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-9 h-9 rounded-lg border border-stone-300 dark:border-stone-700 cursor-pointer p-0.5"
                />
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full font-mono px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 uppercase"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-stone-700 dark:text-stone-300">Ø±Ù†Ú¯ Ù¾Ø³â€ŒØ²Ù…ÛŒÙ†Ù‡ (Background Color):</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-9 h-9 rounded-lg border border-stone-300 dark:border-stone-700 cursor-pointer p-0.5"
                />
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full font-mono px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100 uppercase"
                />
              </div>
            </div>

            {/* Quick Presets */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-stone-400 text-[11px]">Ù¾ÛŒØ´â€ŒÙØ±Ø¶â€ŒÙ‡Ø§:</span>
              <button
                onClick={() => { setTextColor('#2B2F29'); setBgColor('#F2F3F8'); }}
                className="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 rounded-md hover:bg-stone-200 text-[11px]"
              >
                ØªÛŒØ±Ù‡ Ø±ÙˆÛŒ Ø±ÙˆØ´Ù†
              </button>
              <button
                onClick={() => { setTextColor('#f5f5f4'); setBgColor('#0c0a09'); }}
                className="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 rounded-md hover:bg-stone-200 text-[11px]"
              >
                Ø±ÙˆØ´Ù† Ø±ÙˆÛŒ ØªÛŒØ±Ù‡
              </button>
            </div>
          </div>

          {/* Live Render Card & Status Badges */}
          <div className="space-y-4">
            <div
              className="p-6 rounded-2xl border transition-colors flex flex-col justify-center min-h-[120px] shadow-sm"
              style={{ backgroundColor: bgColor, color: textColor }}
            >
              <p className="font-bold text-base sm:text-lg">Ù…ØªÙ† Ù†Ù…ÙˆÙ†Ù‡ Ø¨Ø§ Ø³Ø§ÛŒØ² {toPersianDigits(fontSize)}px</p>
              <p className="text-xs opacity-90 mt-1">
                Ø§ÛŒÙ† ÛŒÚ© Ù†Ù…ÙˆÙ†Ù‡ Ù…ØªÙ† ÙØ§Ø±Ø³ÛŒ Ø¨Ø±Ø§ÛŒ Ø¨Ø±Ø±Ø³ÛŒ Ø®ÙˆØ§Ù†Ø§ÛŒÛŒ Ùˆ Ú©Ù†ØªØ±Ø§Ø³Øª Ø¨ØµØ±ÛŒ Ø±ÙˆÛŒ Ø§ÛŒÙ† Ù¾Ø³â€ŒØ²Ù…ÛŒÙ†Ù‡ Ø§Ø³Øª.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className={`p-2 rounded-xl border ${passAANormal ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
                <span className="block font-bold">AA Ø¹Ø§Ø¯ÛŒ</span>
                <span className="text-[10px]">{passAANormal ? 'Ù¾Ø§Ø³ Ø´Ø¯ (Û´.Ûµ)' : 'Ø±Ø¯ Ø´Ø¯'}</span>
              </div>

              <div className={`p-2 rounded-xl border ${passAALarge ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
                <span className="block font-bold">AA ØªÛŒØªØ±</span>
                <span className="text-[10px]">{passAALarge ? 'Ù¾Ø§Ø³ Ø´Ø¯ (Û³.Û°)' : 'Ø±Ø¯ Ø´Ø¯'}</span>
              </div>

              <div className={`p-2 rounded-xl border ${passAAANormal ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
                <span className="block font-bold">AAA Ø¹Ø§Ù„ÛŒ</span>
                <span className="text-[10px]">{passAAANormal ? 'Ù¾Ø§Ø³ Ø´Ø¯ (Û·.Û°)' : 'Ø±Ø¯ Ø´Ø¯'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool 2: Typographic Scale Generator */}
      <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-6 shadow-sm">
        <div className="flex items-center gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
              Ù…Ø­Ø§Ø³Ø¨Ù‡â€ŒÚ¯Ø± Ù…Ù‚ÛŒØ§Ø³ ØªØ§ÛŒÙ¾ÙˆÚ¯Ø±Ø§ÙÛŒ (Type Scale Generator)
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">Ø§ÛŒØ¬Ø§Ø¯ Ù‡Ø§Ø±Ù…ÙˆÙ†ÛŒ Ùˆ Ù†Ø³Ø¨Øªâ€ŒÙ‡Ø§ÛŒ Ø±ÛŒØ§Ø¶ÛŒ Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯ Ø¨Ø±Ø§ÛŒ Ø§Ù†Ø¯Ø§Ø²Ù‡â€ŒÙ‡Ø§ÛŒ ØªÛŒØªØ± Ùˆ Ø¨Ø¯Ù†Ù‡</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
          <div className="space-y-1.5">
            <label className="text-stone-700 dark:text-stone-300">Ø§Ù†Ø¯Ø§Ø²Ù‡ ÙÙˆÙ†Øª Ù¾Ø§ÛŒÙ‡ (Base Size):</label>
            <select
              value={baseSize}
              onChange={(e) => setBaseSize(Number(e.target.value))}
              className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100"
            >
              <option value={14}>Û±Û´px (ÙØ´Ø±Ø¯Ù‡)</option>
              <option value={16}>Û±Û¶px (Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯ Ø¯Ø³Ú©ØªØ§Ù¾/Ù…ÙˆØ¨Ø§ÛŒÙ„)</option>
              <option value={18}>Û±Û¸px (Ø¨Ø²Ø±Ú¯ Ùˆ Ù…Ù‚Ø§Ù„Ù‡â€ŒØ§ÛŒ)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-stone-700 dark:text-stone-300">Ù†Ø³Ø¨Øª Ú¯Ø§Ù…â€ŒØ¨Ù†Ø¯ÛŒ (Scale Ratio):</label>
            <select
              value={ratio}
              onChange={(e) => setRatio(Number(e.target.value))}
              className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-stone-100"
            >
              <option value={1.125}>Major Second (1.125) - Ù…Ø­ØµÙˆÙ„Ø§Øª Ù…ØªØ±Ø§Ú©Ù…</option>
              <option value={1.2}>Minor Third (1.200) - Ø¯Ø§Ø´Ø¨ÙˆØ±Ø¯Ù‡Ø§</option>
              <option value={1.25}>Major Third (1.250) - ÙˆØ¨â€ŒØ³Ø§ÛŒØªâ€ŒÙ‡Ø§ÛŒ Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯</option>
              <option value={1.333}>Perfect Fourth (1.333) - Ù„Ù†Ø¯ÛŒÙ†Ú¯â€ŒÙ¾ÛŒØ¬â€ŒÙ‡Ø§ÛŒ Ù¾Ø±Ú©Ù†ØªØ±Ø§Ø³Øª</option>
            </select>
          </div>
        </div>

        {/* Generated Scale Preview */}
        <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-2xl border border-stone-200/80 dark:border-stone-800 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800 text-stone-500 font-bold">
            <span>Ø³Ø·Ø­ (Level)</span>
            <span>Ø§Ù†Ø¯Ø§Ø²Ù‡ Ø§ØµÙ„ÛŒ</span>
            <span>Ù†Ù…Ø§ÛŒØ´ Ø²Ù†Ø¯Ù‡</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-stone-400">H1 (ØªÛŒØªØ± Ø§ØµÙ„ÛŒ)</span>
            <span className="font-bold text-brand-600">{Math.round(baseSize * Math.pow(ratio, 4))}px</span>
            <span className="font-sans font-black text-stone-900 dark:text-stone-100" style={{ fontSize: `${Math.min(Math.round(baseSize * Math.pow(ratio, 4)), 36)}px` }}>
              Ø¹Ù†ÙˆØ§Ù† Ø§ØµÙ„ÛŒ Ù…Ù‚Ø§Ù„Ù‡
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-stone-400">H2 (ØªÛŒØªØ± Ø¨Ø®Ø´)</span>
            <span className="font-bold text-brand-600">{Math.round(baseSize * Math.pow(ratio, 3))}px</span>
            <span className="font-sans font-extrabold text-stone-900 dark:text-stone-100" style={{ fontSize: `${Math.round(baseSize * Math.pow(ratio, 3))}px` }}>
              Ø¹Ù†ÙˆØ§Ù† Ø¨Ø®Ø´ Ø§ÙˆÙ„
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-stone-400">H3 (Ø²ÛŒØ±Ø¹Ù†ÙˆØ§Ù†)</span>
            <span className="font-bold text-brand-600">{Math.round(baseSize * Math.pow(ratio, 2))}px</span>
            <span className="font-sans font-bold text-stone-900 dark:text-stone-100" style={{ fontSize: `${Math.round(baseSize * Math.pow(ratio, 2))}px` }}>
              Ø²ÛŒØ±Ù…Ø¬Ù…ÙˆØ¹Ù‡ Ú©Ø§Ø±Øªâ€ŒÙ‡Ø§
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-stone-400">Body (Ø¨Ø¯Ù†Ù‡ Ù…ØªÙ†)</span>
            <span className="font-bold text-emerald-600">{baseSize}px</span>
            <span className="font-sans text-stone-800 dark:text-stone-200" style={{ fontSize: `${baseSize}px` }}>
              Ù…ØªÙ† ØªÙˆØ¶ÛŒØ­Ø§Øª Ø¨Ø¯Ù†Ù‡ Ùˆ Ù…Ù‚Ø§Ù„Ø§Øª
            </span>
          </div>
        </div>
      </section>

      {/* Static Guide Modules Grid */}
      <div className="space-y-8">
        {/* Module 1: Typography */}
        <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
              <Type className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Û±. Ø§ØµÙˆÙ„ ØªØ§ÛŒÙ¾ÙˆÚ¯Ø±Ø§ÙÛŒ Ùˆ Ø®ÙˆØ§Ù†Ø§ÛŒÛŒ Ù…ØªÙˆÙ† ÙØ§Ø±Ø³ÛŒ
            </h2>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ø§Ù†Ø¯Ø§Ø²Ù‡ Ù¾Ø§ÛŒÙ‡ Ø¨Ø¯Ù†Ù‡ Ù…ØªÙˆÙ†:</strong> Ø­Ø¯Ø§Ù‚Ù„ Ø§Ù†Ø¯Ø§Ø²Ù‡ ÙÙˆÙ†Øª Ø¨Ø¯Ù†Ù‡ Ø¨Ø±Ø§ÛŒ Ø®ÙˆØ§Ù†Ø§ÛŒÛŒ Ú©Ø§Ù…Ù„ Ø¯Ø± Ø¯Ø³Ú©ØªØ§Ù¾ Ùˆ Ù…ÙˆØ¨Ø§ÛŒÙ„ Û±Û¶ Ù¾ÛŒÚ©Ø³Ù„ Ø§Ø³Øª.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ø§Ø±ØªÙØ§Ø¹ Ø®Ø· (Line-Height):</strong> Ø¨Ø±Ø§ÛŒ Ù…ØªÙˆÙ† ÙØ§Ø±Ø³ÛŒØŒ Ø§Ø±ØªÙØ§Ø¹ Ø®Ø· Ù…ØªÙˆÙ† Ø§ØµÙ„ÛŒ Ø¨Ø§ÛŒØ¯ Ø¨ÛŒÙ† Û±.Û¶ ØªØ§ Û±.Û¸ Ø¨Ø±Ø§Ø¨Ø± Ø§Ù†Ø¯Ø§Ø²Ù‡ ÙÙˆÙ†Øª Ø¨Ø§Ø´Ø¯ (Ù…Ø«Ù„Ø§ Ø¨Ø±Ø§ÛŒ Û±Û¶pxØŒ Ø§Ø±ØªÙØ§Ø¹ Ø®Ø· Û²Û¶px ØªØ§ Û²Û¸px Ù…Ù†Ø§Ø³Ø¨ Ø§Ø³Øª).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ø·ÙˆÙ„ Ø³Ø·Ø± Ù…ØªÙ†ÛŒ:</strong> Ø¬Ù‡Øª Ø¬Ù„ÙˆÚ¯ÛŒØ±ÛŒ Ø§Ø² Ø®Ø³ØªÚ¯ÛŒ Ú†Ø´Ù…ØŒ Ø·ÙˆÙ„ Ø³Ø·Ø±Ù‡Ø§ÛŒ Ù…ØªÙ†ÛŒ Ø¯Ø± Ù…Ù‚Ø§Ù„Ø§Øª Ùˆ ØªÙˆØ¶ÛŒØ­Ø§Øª Ø¨Ø§ÛŒØ¯ Ø¨ÛŒÙ† Û´Ûµ ØªØ§ Û·Ûµ Ú©Ø§Ø±Ø§Ú©ØªØ± Ù…Ø­Ø¯ÙˆØ¯ Ø´ÙˆØ¯.</span>
            </li>
          </ul>
        </section>

        {/* Module 2: Spacing & Grid */}
        <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <Layout className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Û². Ø³ÛŒØ³ØªÙ… ÙÙˆØ§ØµÙ„ Ùˆ Ø´Ø¨Ú©Ù‡ Û¸ Ù¾ÛŒÚ©Ø³Ù„ÛŒ (8pt Grid)
            </h2>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ù…Ø¶Ø§Ø±Ø¨ Û¸ Ù¾ÛŒÚ©Ø³Ù„:</strong> ØªÙ…Ø§Ù… ÙÙˆØ§ØµÙ„ (Padding, Margin, Gap) Ø¨Ø§ÛŒØ¯ Ø§Ø² Ù…Ø¶Ø§Ø±Ø¨ Ø´Ø¨Ú©Ù‡ Û¸ Ù¾ÛŒÚ©Ø³Ù„ÛŒ Ù¾ÛŒØ±ÙˆÛŒ Ú©Ù†Ù†Ø¯ (Û¸, Û±Û¶, Û²Û´, Û³Û², Û´Û¸, Û¶Û´).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ù‚Ø§Ø¹Ø¯Ù‡ Ù¾Ø¯ÛŒÙ†Ú¯ Ø®Ø§Ø±Ø¬ÛŒ Ø¨Ù‡ Ø¯Ø§Ø®Ù„ÛŒ:</strong> Ù¾Ø¯ÛŒÙ†Ú¯ Ø¨ÛŒØ±ÙˆÙ†ÛŒ ÛŒÚ© Ú©Ø§Ø±Øª Ù‡Ù…ÙˆØ§Ø±Ù‡ Ø¨Ø§ÛŒØ¯ Ù…Ø³Ø§ÙˆÛŒ ÛŒØ§ Ø¨Ø²Ø±Ú¯ØªØ± Ø§Ø² Ù¾Ø¯ÛŒÙ†Ú¯ Ø¯Ø§Ø®Ù„ÛŒ Ø¹Ù†Ø§ØµØ± Ø¯Ø±ÙˆÙ† Ø¢Ù† Ú©Ø§Ø±Øª Ø¨Ø§Ø´Ø¯ (Ø­Ø¯Ø§Ù‚Ù„ Ù¾Ø¯ÛŒÙ†Ú¯ Ú©Ø§Ø±Øª Û±Û¶px Ø§Ø³Øª).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ù‚Ø§Ø¹Ø¯Ù‡ Ø´Ø¹Ø§Ø¹ Ú¯ÙˆØ´Ù‡â€ŒÙ‡Ø§ÛŒ ØªÙˆÛŒ Ø¯Ø± ØªÙˆ:</strong> Ø´Ø¹Ø§Ø¹ Ú¯ÙˆØ´Ù‡ Ú©Ø§Ø±Øª Ø¯Ø§Ø®Ù„ÛŒ = Ø´Ø¹Ø§Ø¹ Ú¯ÙˆØ´Ù‡ Ú©Ø§Ø±Øª Ø¨ÛŒØ±ÙˆÙ†ÛŒ Ù…Ù†Ù‡Ø§ÛŒ ÙØ§ØµÙ„Ù‡ Ø¨ÛŒÙ† Ø¯Ùˆ Ú©Ø§Ø±Øª.</span>
            </li>
          </ul>
        </section>

        {/* Module 3: Accessibility */}
        <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Û³. Ø¯Ø³ØªØ±Ø³ÛŒâ€ŒÙ¾Ø°ÛŒØ±ÛŒ Ùˆ Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯Ù‡Ø§ÛŒ WCAG 2.1
            </h2>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ù†Ø³Ø¨Øª Ú©Ù†ØªØ±Ø§Ø³Øª Ù…ØªÙ†:</strong> Ú©Ù†ØªØ±Ø§Ø³Øª Ù…ØªÙ†â€ŒÙ‡Ø§ÛŒ Ø¹Ø§Ø¯ÛŒ Ø¨Ø§ Ù¾Ø³â€ŒØ²Ù…ÛŒÙ†Ù‡ Ø¨Ø§ÛŒØ¯ Ø­Ø¯Ø§Ù‚Ù„ 4.5:1 Ùˆ Ø¨Ø±Ø§ÛŒ Ù…ØªÙ†â€ŒÙ‡Ø§ÛŒ Ø¨Ø²Ø±Ú¯ 3:1 Ø¨Ø§Ø´Ø¯.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ù¾ÛŒÙ…Ø§ÛŒØ´ Ø¨Ø§ Ú©ÛŒØ¨ÙˆØ±Ø¯:</strong> ØªÙ…Ø§Ù… Ø¯Ú©Ù…Ù‡â€ŒÙ‡Ø§ØŒ ÙˆØ±ÙˆØ¯ÛŒâ€ŒÙ‡Ø§ Ùˆ Ù„ÛŒÙ†Ú©â€ŒÙ‡Ø§ Ø¨Ø§ÛŒØ¯ Ø¯Ø§Ø±Ø§ÛŒ Outline ÙÙˆÚ©ÙˆØ³ Ø´ÙØ§Ù Ø¨Ø±Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø§Ù† Ú©ÛŒØ¨ÙˆØ±Ø¯ Ø¨Ø§Ø´Ù†Ø¯.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ø§Ù†ØªÙ‚Ø§Ù„ Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ø¨Ø¯ÙˆÙ† Ø§ØªÚ©Ø§ Ø¨Ù‡ Ø±Ù†Ú¯:</strong> Ù¾ÛŒØ§Ù…â€ŒÙ‡Ø§ÛŒ Ø®Ø·Ø§ Ø­ØªÙ…Ø§ Ù‡Ù…Ø±Ø§Ù‡ Ø¨Ø§ Ø¢ÛŒÚ©ÙˆÙ† Ùˆ Ù…ØªÙ† Ø¨Ø§Ø´Ù†Ø¯ØŒ Ù†Ù‡ ØµØ±ÙØ§ Ø±Ù†Ú¯ Ù‚Ø±Ù…Ø².</span>
            </li>
          </ul>
        </section>

        {/* Module 4: Mobile & Touch */}
        <section className="bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Û´. Ø§Ø¨Ø¹Ø§Ø¯ Ù„Ù…Ø³ÛŒ Ùˆ ØªØ¬Ø±Ø¨Ù‡ Ú©Ø§Ø±Ø¨Ø±ÛŒ Ù…ÙˆØ¨Ø§ÛŒÙ„
            </h2>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ø­Ø¯Ø§Ù‚Ù„ Ù…Ù†Ø·Ù‚Ù‡ Ù„Ù…Ø³ÛŒ (Touch Target):</strong> Ø§Ø¨Ø¹Ø§Ø¯ Ù‡Ø± Ø¹Ù†ØµØ± Ú©Ù„ÛŒÚ©â€ŒÙ¾Ø°ÛŒØ± Ø¯Ø± Ù…ÙˆØ¨Ø§ÛŒÙ„ Ø¨Ø§ÛŒØ¯ Ø­Ø¯Ø§Ù‚Ù„ Û´Û´Ã—Û´Û´ Ù¾ÛŒÚ©Ø³Ù„ Ø¨Ø§Ø´Ø¯.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Ù…Ù†Ø·Ù‚Ù‡ Ø´Ø³Øª Ø¯Ø³Øª (Thumb Zone):</strong> Ø¯Ú©Ù…Ù‡â€ŒÙ‡Ø§ÛŒ Ø§Ù‚Ø¯Ø§Ù… Ø§ØµÙ„ÛŒ (CTA) ØªØ±Ø¬ÛŒØ­Ø§Ù‹ Ø¯Ø± Ø¨Ø®Ø´ Ù¾Ø§ÛŒÛŒÙ†ÛŒ ØµÙØ­Ù‡ Ù‚Ø±Ø§Ø± Ú¯ÛŒØ±Ù†Ø¯.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

