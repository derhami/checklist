import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Bookmark,
  Sun,
  Moon,
  Menu,
  X,
  BookOpen,
  Info,
  Grid,
  Globe,
  LayoutDashboard,
  FolderKanban,
} from 'lucide-react';
import { toPersianDigits } from '../utils/persian';

interface HeaderProps {
  isDark: boolean;
  onToggleDark: () => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  bookmarksCount: number;
  activeProjectName?: string;
  onOpenProjectModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDark,
  onToggleDark,
  onOpenSearch,
  onOpenBookmarks,
  bookmarksCount,
  activeProjectName,
  onOpenProjectModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 dark:border-stone-800/80 bg-white/90 dark:bg-stone-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo & Desktop Nav */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0 min-w-0">
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-xl shrink-0"
            title="چک‌لیست طراحی UX - صفحه اصلی"
          >
            <img
              src="/logo.svg"
              alt="چک‌لیست طراحی UX"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg shadow-sm group-hover:scale-105 transition-transform shrink-0"
            />
            
            <div className="flex flex-col min-w-0">
              <span className="font-black text-stone-900 dark:text-stone-100 text-xs sm:text-base leading-tight tracking-tight whitespace-nowrap truncate">
                چک‌لیست طراحی
              </span>
              <span className="hidden sm:block text-[10px] text-stone-500 dark:text-stone-400 font-medium whitespace-nowrap truncate">
                مرجع تخصصی طراحان وب و محصول
              </span>
            </div>
          </Link>

          {/* Active Project Quick Badge */}
          {activeProjectName && onOpenProjectModal && (
            <button
              onClick={onOpenProjectModal}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 transition-colors max-w-[140px] truncate"
              title="مدیریت و تغییر پروژه فعال"
            >
              <FolderKanban className="w-3.5 h-3.5 text-brand-500 shrink-0" />
              <span className="truncate">{activeProjectName}</span>
            </button>
          )}

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 mr-2 text-xs font-semibold">
            <Link
              to="/dashboard"
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                isActive('/dashboard')
                  ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/60 dark:hover:bg-stone-900'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-brand-500" />
              <span>داشبورد UX</span>
            </Link>
            <Link
              to="/browse"
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                isActive('/browse')
                  ? 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/60 dark:hover:bg-stone-900'
              }`}
            >
              کتابخانه چک‌لیست‌ها
            </Link>
            <Link
              to="/guide"
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                isActive('/guide')
                  ? 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/60 dark:hover:bg-stone-900'
              }`}
            >
              راهنمای اصول UX
            </Link>
            <Link
              to="/about"
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                isActive('/about')
                  ? 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/60 dark:hover:bg-stone-900'
              }`}
            >
              درباره مرجع
            </Link>
          </nav>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Prominent Backlink Badge to nounproject.ir on Desktop */}
          <a
            href="https://nounproject.ir"
            target="_blank"
            rel="noopener noreferrer"
            title="Noun Project - پلتفرم ابزارهای تیم درهمی"
            className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold text-stone-700 dark:text-stone-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40 transition-colors border border-stone-200/80 dark:border-stone-800 ml-1"
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shrink-0"></span>
            <span>Noun Project</span>
          </a>

          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="h-9 px-2 sm:px-3 flex items-center gap-1.5 text-xs font-medium text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-xl border border-stone-200/60 dark:border-stone-800 transition-colors shrink-0"
            title="جستجوی سریع (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-stone-400 shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">جستجو...</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-stone-200/80 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-md mr-1">
              ⌘K
            </kbd>
          </button>

          {/* Bookmarks Trigger */}
          <button
            onClick={onOpenBookmarks}
            className="relative h-9 px-2 sm:px-3 flex items-center gap-1 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-xl border border-stone-200/60 dark:border-stone-800 transition-colors shrink-0"
            title="چک‌لیست‌های ذخیره‌شده (⌘B)"
          >
            <Bookmark className={`w-4 h-4 ${bookmarksCount > 0 ? 'fill-brand-500 text-brand-500' : 'text-stone-400'}`} />
            <span className="hidden sm:inline whitespace-nowrap">نشانک‌ها</span>
            {bookmarksCount > 0 && (
              <span className="px-1.5 py-0.5 bg-brand-500 text-stone-950 font-bold text-[10px] rounded-full min-w-[18px] text-center shadow-sm">
                {toPersianDigits(bookmarksCount)}
              </span>
            )}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDark}
            className="h-9 w-9 flex items-center justify-center text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-xl border border-stone-200/60 dark:border-stone-800 transition-colors shrink-0"
            title={isDark ? 'تغییر به حالت روز' : 'تغییر به حالت شب'}
          >
            {isDark ? <Sun className="w-4 h-4 text-brand-400" /> : <Moon className="w-4 h-4 text-stone-700 dark:text-stone-300" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden h-9 w-9 flex items-center justify-center text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-xl border border-stone-200/60 dark:border-stone-800 transition-colors shrink-0"
            aria-label="منوی موبایل"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {activeProjectName && onOpenProjectModal && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-brand-50 dark:bg-brand-950/40 text-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60"
            >
              <div className="flex items-center gap-2">
                <FolderKanban className="w-4 h-4 text-brand-600" />
                <span>پروژه فعال:</span>
                <span className="font-bold truncate max-w-[150px]">{activeProjectName}</span>
              </div>
              <span className="text-[10px] underline">تغییر</span>
            </button>
          )}

          <Link
            to="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-colors ${
              isActive('/dashboard')
                ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold'
                : 'text-stone-700 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-brand-500" />
            داشبورد سلامت UX
          </Link>
          <Link
            to="/browse"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-colors ${
              isActive('/browse')
                ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold'
                : 'text-stone-700 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800'
            }`}
          >
            <Grid className="w-4 h-4 text-stone-500" />
            کتابخانه همه چک‌لیست‌ها
          </Link>
          <Link
            to="/guide"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-colors ${
              isActive('/guide')
                ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold'
                : 'text-stone-700 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800'
            }`}
          >
            <BookOpen className="w-4 h-4 text-stone-500" />
            راهنمای اصول UX
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-colors ${
              isActive('/about')
                ? 'bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold'
                : 'text-stone-700 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800'
            }`}
          >
            <Info className="w-4 h-4 text-stone-500" />
            درباره مرجع
          </Link>

          {/* Backlink in mobile drawer */}
          <a
            href="https://nounproject.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold text-brand-700 dark:text-brand-300 bg-brand-50/60 dark:bg-brand-950/40 hover:bg-brand-100 dark:hover:bg-brand-900/60 transition-colors border border-brand-200/60 dark:border-brand-800/60 mt-2"
          >
            <Globe className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span>Noun Project - پلتفرم تیم درهمی</span>
          </a>
        </div>
      )}
    </header>
  );
};
