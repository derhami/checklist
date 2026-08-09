import React, { useState } from 'react';
import { X, Copy, Check, Share2, Link, Download, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ShareSnapshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeProject: Project;
  shareUrl: string;
  onImportSnapshot: (encodedSnapshot: string) => string | null;
}

export const ShareSnapshotModal: React.FC<ShareSnapshotModalProps> = ({
  isOpen,
  onClose,
  activeProject,
  shareUrl,
  onImportSnapshot,
}) => {
  const [copied, setCopied] = useState(false);
  const [importCode, setImportCode] = useState('');
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleImportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!importCode.trim()) return;

    let snapshotCode = importCode.trim();
    if (snapshotCode.includes('snapshot=')) {
      try {
        const urlObj = new URL(snapshotCode);
        snapshotCode = urlObj.searchParams.get('snapshot') || snapshotCode;
      } catch {
        // fallback to raw
      }
    }

    const importedId = onImportSnapshot(snapshotCode);
    if (importedId) {
      setImportStatus('success');
      setTimeout(() => {
        setImportStatus('idle');
        setImportCode('');
        onClose();
      }, 1500);
    } else {
      setImportStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-100 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                اشتراک‌گذاری لینک زنده پروژه
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                ایجاد Snapshot بدون نیاز به دیتابیس برای اعضای تیم
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Copy Active Project Share URL */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-stone-900 dark:text-stone-100">
              لینک اختصاصی پروژه: «{activeProject.name}»
            </span>
            <span className="text-stone-400">رمزنگاری شده در URL</span>
          </div>

          <div className="flex items-center gap-2 bg-stone-50 dark:bg-stone-950 p-2.5 rounded-2xl border border-stone-200 dark:border-stone-800">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 bg-transparent text-xs font-mono text-stone-600 dark:text-stone-300 outline-none truncate dir-ltr text-left"
            />
            <button
              onClick={handleCopy}
              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-stone-950 text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>کپی شد!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>کپی لینک</span>
                </>
              )}
            </button>
          </div>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
            💡 هر فردی که این لینک را باز کند، تمام آیتم‌های بررسی‌شده، یادداشت‌ها و موارد اختصاصی پروژه شما را به‌صورت پروژه جدید در سیستم خود دریافت می‌کند.
          </p>
        </div>

        <div className="border-t border-stone-100 dark:border-stone-800 pt-4"></div>

        {/* Section 2: Import Shared Snapshot URL or Code */}
        <form onSubmit={handleImportSubmit} className="space-y-3">
          <label className="block text-xs font-bold text-stone-900 dark:text-stone-100">
            دریافت پروژه مشترک (Paste Link or Code)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={importCode}
              onChange={(e) => setImportCode(e.target.value)}
              placeholder="لینک اشتراک‌گذاری یا کد Snapshot را اینجا وارد کنید..."
              className="flex-1 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 text-xs font-bold hover:bg-stone-800 dark:hover:bg-white transition-colors shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>فراخوانی</span>
            </button>
          </div>

          {importStatus === 'success' && (
            <p className="text-xs text-emerald-600 font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>پروژه مشترک با موفقیت وارد شد و فعال گردید!</span>
            </p>
          )}

          {importStatus === 'error' && (
            <p className="text-xs text-rose-600 font-semibold">
              ⚠️ کد یا لینک وارد شده معتبر نیست. لطفاً مجدداً بررسی کنید.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
