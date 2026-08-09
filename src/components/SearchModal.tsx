import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, CheckSquare, ArrowLeft, Bookmark } from 'lucide-react';
import { allChecklists, getTotalItemsCount } from '../data/checklists';
import { categories } from '../data/categories';
import { searchMatches, toPersianDigits } from '../utils/persian';
import { DynamicIcon } from './DynamicIcon';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: string[];
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, bookmarks }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal
          // We handle this in parent or via custom event
          const searchBtn = document.querySelector('[title*="Ctrl+K"]') as HTMLButtonElement;
          if (searchBtn) searchBtn.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim()
    ? allChecklists.filter((c) => {
        const q = query.trim();
        return (
          searchMatches(c.title, q) ||
          (c.titleEn && searchMatches(c.titleEn, q)) ||
          searchMatches(c.description, q) ||
          c.sections.some((sec) =>
            searchMatches(sec.title, q) ||
            sec.items.some((item) => searchMatches(item.text, q))
          )
        );
      })
    : allChecklists.filter((c) => c.featured).slice(0, 6);

  const handleSelect = (slug: string) => {
    onClose();
    navigate(`/checklist/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-950/60 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <div className="relative p-4 border-b border-stone-200 dark:border-stone-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ø¬Ø³ØªØ¬ÙˆÛŒ Ø¹Ù†ÙˆØ§Ù†ØŒ Ú©Ø§Ù…Ù¾ÙˆÙ†Ù†ØªØŒ ÛŒØ§ Ù…ÙˆØ¶ÙˆØ¹... (Ù…Ø«Ø§Ù„: Ø¯Ú©Ù…Ù‡ØŒ Ù„Ù†Ø¯ÛŒÙ†Ú¯ØŒ WCAG)"
            className="w-full bg-transparent text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono text-stone-500 bg-stone-100 dark:bg-stone-800 rounded hover:bg-stone-200 dark:hover:bg-stone-700"
          >
            ESC
          </button>
        </div>

        {/* Search Results List */}
        <div className="p-2 overflow-y-auto space-y-1">
          <div className="px-3 py-1.5 text-[11px] font-semibold text-stone-400 tracking-wider uppercase flex items-center justify-between">
            <span>{query.trim() ? 'Ù†ØªØ§ÛŒØ¬ Ø¬Ø³ØªØ¬Ùˆ' : 'Ú†Ú©â€ŒÙ„ÛŒØ³Øªâ€ŒÙ‡Ø§ÛŒ ÙˆÛŒÚ˜Ù‡ Ùˆ Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯ÛŒ'}</span>
            <span className="font-mono text-stone-500">{toPersianDigits(results.length)} Ù…ÙˆØ±Ø¯</span>
          </div>

          {results.length === 0 ? (
            <div className="p-8 text-center text-stone-500 space-y-2">
              <CheckSquare className="w-8 h-8 mx-auto text-stone-300 dark:text-stone-700" />
              <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
                Ú†Ú©â€ŒÙ„ÛŒØ³ØªÛŒ Ø¨Ø§ Ø¹Ø¨Ø§Ø±Øª Â«{query}Â» Ù¾ÛŒØ¯Ø§ Ù†Ø´Ø¯.
              </p>
              <p className="text-xs text-stone-400">
                Ø¹Ø¨Ø§Ø±Øª Ø¯ÛŒÚ¯Ø±ÛŒ Ù…Ø§Ù†Ù†Ø¯ Â«ÙØ±Ù…Â»ØŒ Â«Ù¾Ø±Ø¯Ø§Ø®ØªÂ»ØŒ Â«Ø¯Ø§Ø±Ú© Ù…Ø¯Â» ÛŒØ§ Â«Ø¯Ú©Ù…Ù‡Â» Ø±Ø§ Ø§Ù…ØªØ­Ø§Ù† Ú©Ù†ÛŒØ¯.
              </p>
            </div>
          ) : (
            results.map((c) => {
              const cat = categories.find((cat) => cat.id === c.categoryId);
              const isBookmarked = bookmarks.includes(c.slug);

              return (
                <button
                  key={c.id}
                  onClick={() => handleSelect(c.slug)}
                  className="w-full text-right p-3 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800/80 transition-colors flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center shrink-0 mt-0.5">
                      {cat && <DynamicIcon name={cat.icon} className="w-4 h-4" />}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                          {c.title}
                        </span>
                        {c.titleEn && (
                          <span className="text-xs font-mono text-stone-400 dark:text-stone-500 hidden sm:inline">
                            {c.titleEn}
                          </span>
                        )}
                        {isBookmarked && (
                          <Bookmark className="w-3.5 h-3.5 text-brand-500 fill-brand-500 shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-stone-500 dark:text-stone-400 truncate mt-0.5">
                        {c.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-stone-400 shrink-0">
                    <span className="hidden sm:inline font-mono">
                      {toPersianDigits(getTotalItemsCount(c))} Ø¢ÛŒØªÙ…
                    </span>
                    <ArrowLeft className="w-4 h-4 text-stone-300 dark:text-stone-600 group-hover:text-stone-900 dark:group-hover:text-stone-100 group-hover:-translate-x-1 transition-all" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-500 flex items-center justify-between">
          <span>Ø±Ø§Ù‡Ù†Ù…Ø§: Ø§Ø² Ú©Ù„ÛŒØ¯Ù‡Ø§ÛŒ âŒ˜K Ø¨Ø±Ø§ÛŒ Ø¨Ø§Ø²Ú©Ø±Ø¯Ù† Ø¬Ø³ØªØ¬Ùˆ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.</span>
          <span>Ù…Ø¬Ù…ÙˆØ¹ Û¶Û¹ Ú†Ú©â€ŒÙ„ÛŒØ³Øª Ø¢Ù†Ù„Ø§ÛŒÙ†</span>
        </div>
      </div>
    </div>
  );
};
