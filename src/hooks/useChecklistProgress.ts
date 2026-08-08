import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY_PROGRESS = 'checklist_design_progress_v1';
const STORAGE_KEY_BOOKMARKS = 'checklist_design_bookmarks_v1';

export interface ProgressState {
  // Map of checklist slug -> Array of checked item IDs
  [slug: string]: string[];
}

export function useChecklistProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [progress]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(bookmarks));
    } catch (e) {
      console.error('Failed to save bookmarks to localStorage', e);
    }
  }, [bookmarks]);

  const toggleItem = useCallback((slug: string, itemId: string) => {
    setProgress((prev) => {
      const currentList = prev[slug] || [];
      const exists = currentList.includes(itemId);
      const updated = exists
        ? currentList.filter((id) => id !== itemId)
        : [...currentList, itemId];
      return { ...prev, [slug]: updated };
    });
  }, []);

  const resetChecklist = useCallback((slug: string) => {
    setProgress((prev) => {
      const next = { ...prev };
      delete next[slug];
      return next;
    });
  }, []);

  const resetAllProgress = useCallback(() => {
    setProgress({});
  }, []);

  const toggleBookmark = useCallback((slug: string) => {
    setBookmarks((prev) => {
      const isBookmarked = prev.includes(slug);
      return isBookmarked ? prev.filter((s) => s !== slug) : [...prev, slug];
    });
  }, []);

  const isBookmarked = useCallback(
    (slug: string) => bookmarks.includes(slug),
    [bookmarks]
  );

  const getCheckedCount = useCallback(
    (slug: string) => (progress[slug] || []).length,
    [progress]
  );

  const isChecked = useCallback(
    (slug: string, itemId: string) => (progress[slug] || []).includes(itemId),
    [progress]
  );

  const checkAllSection = useCallback((slug: string, itemIds: string[]) => {
    setProgress((prev) => {
      const currentList = prev[slug] || [];
      const merged = Array.from(new Set([...currentList, ...itemIds]));
      return { ...prev, [slug]: merged };
    });
  }, []);

  const uncheckAllSection = useCallback((slug: string, itemIds: string[]) => {
    setProgress((prev) => {
      const currentList = prev[slug] || [];
      const updated = currentList.filter((id) => !itemIds.includes(id));
      return { ...prev, [slug]: updated };
    });
  }, []);

  const exportData = useCallback(() => {
    return JSON.stringify({
      progress,
      bookmarks,
      exportedAt: new Date().toISOString(),
      version: '1.0',
    }, null, 2);
  }, [progress, bookmarks]);

  const importData = useCallback((jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (parsed && typeof parsed === 'object') {
        if (parsed.progress && typeof parsed.progress === 'object') {
          setProgress(parsed.progress);
        }
        if (Array.isArray(parsed.bookmarks)) {
          setBookmarks(parsed.bookmarks);
        }
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  return {
    progress,
    bookmarks,
    toggleItem,
    checkAllSection,
    uncheckAllSection,
    resetChecklist,
    resetAllProgress,
    toggleBookmark,
    isBookmarked,
    getCheckedCount,
    isChecked,
    exportData,
    importData,
  };
}
