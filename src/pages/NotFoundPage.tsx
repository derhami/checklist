import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, Grid } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 text-center space-y-6 max-w-md mx-auto">
      <div className="w-16 h-16 rounded-3xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold mx-auto">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-black text-stone-900 dark:text-stone-100">
          ØµÙØ­Ù‡ Ù…ÙˆØ±Ø¯ Ù†Ø¸Ø± ÛŒØ§ÙØª Ù†Ø´Ø¯ (Û´Û°Û´)
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          Ø¢Ø¯Ø±Ø³ ÙˆØ§Ø±Ø¯ Ø´Ø¯Ù‡ ÙˆØ¬ÙˆØ¯ Ù†Ø¯Ø§Ø±Ø¯ ÛŒØ§ Ù…Ù…Ú©Ù† Ø§Ø³Øª Ù…Ù†ØªÙ‚Ù„ Ø´Ø¯Ù‡ Ø¨Ø§Ø´Ø¯.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link
          to="/"
          className="px-5 py-2.5 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-bold text-xs rounded-xl inline-flex items-center gap-2"
        >
          <span>ØµÙØ­Ù‡ Ø§ØµÙ„ÛŒ</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <Link
          to="/browse"
          className="px-5 py-2.5 bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200 font-bold text-xs rounded-xl inline-flex items-center gap-2"
        >
          <Grid className="w-4 h-4" />
          <span>Ú©ØªØ§Ø¨Ø®Ø§Ù†Ù‡ Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§</span>
        </Link>
      </div>
    </div>
  );
};
