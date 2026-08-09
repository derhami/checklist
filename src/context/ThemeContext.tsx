import React, { createContext, useContext } from 'react';

interface ThemeContextType {
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

const BRAND_ACCENT: ThemeContextType['accentColorClasses'] = {
  badgeBg: 'bg-brand-100 dark:bg-brand-950/60',
  badgeText: 'text-brand-800 dark:text-brand-300',
  badgeBorder: 'border-brand-200 dark:border-brand-800/50',
  buttonBg: 'bg-brand-600 hover:bg-brand-700 text-white font-bold',
  buttonText: 'text-brand-600 dark:text-brand-400',
  textPrimary: 'text-brand-600 dark:text-brand-400',
  borderPrimary: 'border-brand-500/50',
  ringPrimary: 'focus:ring-brand-500',
  progressBg: 'bg-brand-600 dark:bg-brand-500',
  fillHex: '#1d2ea0',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ accentColorClasses: BRAND_ACCENT }}>
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
