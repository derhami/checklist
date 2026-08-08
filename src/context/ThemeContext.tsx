import React, { createContext, useContext, useState, useEffect } from 'react';
import { AccentTheme } from '../types';

interface ThemeContextType {
  accentTheme: AccentTheme;
  setAccentTheme: (theme: AccentTheme) => void;
  accentColorClasses: {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    buttonBg: string;
    buttonText: string;
    textPrimary: string;
    borderPrimary: string;
    ringPrimary: string;
    progressBg: string;
    fillHex: string;
  };
}

const STORAGE_KEY_THEME = 'ux_checklist_accent_theme_v1';

const THEME_CLASSES: Record<AccentTheme, ThemeContextType['accentColorClasses']> = {
  amber: {
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60',
    badgeText: 'text-amber-800 dark:text-amber-300',
    badgeBorder: 'border-amber-200 dark:border-amber-800/50',
    buttonBg: 'bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold',
    buttonText: 'text-amber-600 dark:text-amber-400',
    textPrimary: 'text-amber-600 dark:text-amber-400',
    borderPrimary: 'border-amber-500/50',
    ringPrimary: 'focus:ring-amber-500',
    progressBg: 'bg-amber-500',
    fillHex: '#f59e0b',
  },
  blue: {
    badgeBg: 'bg-blue-100 dark:bg-blue-950/60',
    badgeText: 'text-blue-800 dark:text-blue-300',
    badgeBorder: 'border-blue-200 dark:border-blue-800/50',
    buttonBg: 'bg-blue-600 hover:bg-blue-700 text-white font-bold',
    buttonText: 'text-blue-600 dark:text-blue-400',
    textPrimary: 'text-blue-600 dark:text-blue-400',
    borderPrimary: 'border-blue-500/50',
    ringPrimary: 'focus:ring-blue-500',
    progressBg: 'bg-blue-600',
    fillHex: '#2563eb',
  },
  emerald: {
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/60',
    badgeText: 'text-emerald-800 dark:text-emerald-300',
    badgeBorder: 'border-emerald-200 dark:border-emerald-800/50',
    buttonBg: 'bg-emerald-600 hover:bg-emerald-700 text-white font-bold',
    buttonText: 'text-emerald-600 dark:text-emerald-400',
    textPrimary: 'text-emerald-600 dark:text-emerald-400',
    borderPrimary: 'border-emerald-500/50',
    ringPrimary: 'focus:ring-emerald-500',
    progressBg: 'bg-emerald-600',
    fillHex: '#059669',
  },
  violet: {
    badgeBg: 'bg-violet-100 dark:bg-violet-950/60',
    badgeText: 'text-violet-800 dark:text-violet-300',
    badgeBorder: 'border-violet-200 dark:border-violet-800/50',
    buttonBg: 'bg-violet-600 hover:bg-violet-700 text-white font-bold',
    buttonText: 'text-violet-600 dark:text-violet-400',
    textPrimary: 'text-violet-600 dark:text-violet-400',
    borderPrimary: 'border-violet-500/50',
    ringPrimary: 'focus:ring-violet-500',
    progressBg: 'bg-violet-600',
    fillHex: '#7c3aed',
  },
  rose: {
    badgeBg: 'bg-rose-100 dark:bg-rose-950/60',
    badgeText: 'text-rose-800 dark:text-rose-300',
    badgeBorder: 'border-rose-200 dark:border-rose-800/50',
    buttonBg: 'bg-rose-600 hover:bg-rose-700 text-white font-bold',
    buttonText: 'text-rose-600 dark:text-rose-400',
    textPrimary: 'text-rose-600 dark:text-rose-400',
    borderPrimary: 'border-rose-500/50',
    ringPrimary: 'focus:ring-rose-500',
    progressBg: 'bg-rose-600',
    fillHex: '#e11d48',
  },
  stone: {
    badgeBg: 'bg-stone-200 dark:bg-stone-800',
    badgeText: 'text-stone-900 dark:text-stone-100',
    badgeBorder: 'border-stone-300 dark:border-stone-700',
    buttonBg: 'bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 font-bold',
    buttonText: 'text-stone-900 dark:text-stone-100',
    textPrimary: 'text-stone-900 dark:text-stone-100',
    borderPrimary: 'border-stone-400 dark:border-stone-600',
    ringPrimary: 'focus:ring-stone-500',
    progressBg: 'bg-stone-900 dark:bg-stone-100',
    fillHex: '#44403c',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accentTheme, setAccentThemeState] = useState<AccentTheme>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_THEME);
      if (saved && saved in THEME_CLASSES) return saved as AccentTheme;
    } catch {
      // fallback
    }
    return 'amber';
  });

  const setAccentTheme = (theme: AccentTheme) => {
    setAccentThemeState(theme);
    try {
      localStorage.setItem(STORAGE_KEY_THEME, theme);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-accent-theme', accentTheme);
  }, [accentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        accentTheme,
        setAccentTheme,
        accentColorClasses: THEME_CLASSES[accentTheme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
