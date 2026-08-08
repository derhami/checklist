import { useState, useEffect, useCallback, useMemo } from 'react';
import { Project, CustomItem, ItemNote } from '../types';

const STORAGE_KEY_PROJECTS = 'ux_checklist_projects_v2';
const STORAGE_KEY_ACTIVE_PROJECT = 'ux_checklist_active_project_id_v2';

const DEFAULT_PROJECT: Project = {
  id: 'default-project',
  name: 'پروژه اصلی من',
  clientOrTeam: 'تیم محصول',
  description: 'ارزیابی کلی استانداردهای تجربه کاربری و رابط کاربری',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  progress: {},
  customItems: {},
  notes: {},
  bookmarks: [],
};

export function useProjectManager() {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROJECTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      // Migration check from v1 legacy progress
      const legacyProgress = localStorage.getItem('checklist_design_progress_v1');
      const legacyBookmarks = localStorage.getItem('checklist_design_bookmarks_v1');
      const initialProject = { ...DEFAULT_PROJECT };
      if (legacyProgress) {
        try { initialProject.progress = JSON.parse(legacyProgress); } catch {}
      }
      if (legacyBookmarks) {
        try { initialProject.bookmarks = JSON.parse(legacyBookmarks); } catch {}
      }
      return [initialProject];
    } catch {
      return [DEFAULT_PROJECT];
    }
  });

  const [activeProjectId, setActiveProjectIdState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_PROJECT);
      return saved || 'default-project';
    } catch {
      return 'default-project';
    }
  });

  // Save projects to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error('Failed to save projects', e);
    }
  }, [projects]);

  // Save active project id
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE_PROJECT, activeProjectId);
    } catch (e) {
      console.error('Failed to save active project id', e);
    }
  }, [activeProjectId]);

  // Active Project Reference
  const activeProject = useMemo(() => {
    return projects.find((p) => p.id === activeProjectId) || projects[0] || DEFAULT_PROJECT;
  }, [projects, activeProjectId]);

  const setActiveProjectId = useCallback((id: string) => {
    if (projects.some((p) => p.id === id)) {
      setActiveProjectIdState(id);
    }
  }, [projects]);

  // Create Project
  const createProject = useCallback((name: string, clientOrTeam?: string, description?: string) => {
    const newProj: Project = {
      id: `proj_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim() || 'پروژه جدید',
      clientOrTeam: clientOrTeam?.trim() || '',
      description: description?.trim() || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      progress: {},
      customItems: {},
      notes: {},
      bookmarks: [],
    };
    setProjects((prev) => [newProj, ...prev]);
    setActiveProjectIdState(newProj.id);
    return newProj.id;
  }, []);

  // Update Project Info
  const updateProject = useCallback((id: string, updates: Partial<Pick<Project, 'name' | 'clientOrTeam' | 'description'>>) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, ...updates, updatedAt: new Date().toISOString() }
          : p
      )
    );
  }, []);

  // Delete Project
  const deleteProject = useCallback((id: string) => {
    setProjects((prev) => {
      if (prev.length <= 1) return prev; // Keep at least one project
      const filtered = prev.filter((p) => p.id !== id);
      return filtered;
    });
    setActiveProjectIdState((prevId) => {
      if (prevId === id) {
        const remaining = projects.filter((p) => p.id !== id);
        return remaining[0]?.id || 'default-project';
      }
      return prevId;
    });
  }, [projects]);

  // Project Progress actions
  const toggleItem = useCallback((slug: string, itemId: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProjectId) return p;
        const currentList = p.progress[slug] || [];
        const exists = currentList.includes(itemId);
        const updated = exists
          ? currentList.filter((id) => id !== itemId)
          : [...currentList, itemId];
        return {
          ...p,
          updatedAt: new Date().toISOString(),
          progress: { ...p.progress, [slug]: updated },
        };
      })
    );
  }, [activeProjectId]);

  const checkAllSection = useCallback((slug: string, itemIds: string[]) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProjectId) return p;
        const currentList = p.progress[slug] || [];
        const merged = Array.from(new Set([...currentList, ...itemIds]));
        return {
          ...p,
          updatedAt: new Date().toISOString(),
          progress: { ...p.progress, [slug]: merged },
        };
      })
    );
  }, [activeProjectId]);

  const uncheckAllSection = useCallback((slug: string, itemIds: string[]) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProjectId) return p;
        const currentList = p.progress[slug] || [];
        const updated = currentList.filter((id) => !itemIds.includes(id));
        return {
          ...p,
          updatedAt: new Date().toISOString(),
          progress: { ...p.progress, [slug]: updated },
        };
      })
    );
  }, [activeProjectId]);

  const resetChecklist = useCallback((slug: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProjectId) return p;
        const nextProgress = { ...p.progress };
        delete nextProgress[slug];
        return {
          ...p,
          updatedAt: new Date().toISOString(),
          progress: nextProgress,
        };
      })
    );
  }, [activeProjectId]);

  const resetAllProgress = useCallback(() => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProjectId) return p;
        return {
          ...p,
          updatedAt: new Date().toISOString(),
          progress: {},
          customItems: {},
          notes: {},
        };
      })
    );
  }, [activeProjectId]);

  // Bookmarks
  const toggleBookmark = useCallback((slug: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProjectId) return p;
        const exists = p.bookmarks.includes(slug);
        const updated = exists ? p.bookmarks.filter((s) => s !== slug) : [...p.bookmarks, slug];
        return {
          ...p,
          updatedAt: new Date().toISOString(),
          bookmarks: updated,
        };
      })
    );
  }, [activeProjectId]);

  // Custom Items
  const addCustomItem = useCallback((slug: string, text: string, explanation?: string) => {
    if (!text.trim()) return;
    const newItem: CustomItem = {
      id: `custom_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      text: text.trim(),
      explanation: explanation?.trim(),
      checked: false,
      createdAt: new Date().toISOString(),
    };

    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProjectId) return p;
        const currentCustom = p.customItems[slug] || [];
        return {
          ...p,
          updatedAt: new Date().toISOString(),
          customItems: {
            ...p.customItems,
            [slug]: [...currentCustom, newItem],
          },
        };
      })
    );
  }, [activeProjectId]);

  const toggleCustomItem = useCallback((slug: string, customItemId: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProjectId) return p;
        const currentCustom = p.customItems[slug] || [];
        const updated = currentCustom.map((item) =>
          item.id === customItemId ? { ...item, checked: !item.checked } : item
        );
        return {
          ...p,
          updatedAt: new Date().toISOString(),
          customItems: {
            ...p.customItems,
            [slug]: updated,
          },
        };
      })
    );
  }, [activeProjectId]);

  const deleteCustomItem = useCallback((slug: string, customItemId: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProjectId) return p;
        const currentCustom = p.customItems[slug] || [];
        const updated = currentCustom.filter((item) => item.id !== customItemId);
        return {
          ...p,
          updatedAt: new Date().toISOString(),
          customItems: {
            ...p.customItems,
            [slug]: updated,
          },
        };
      })
    );
  }, [activeProjectId]);

  // Notes
  const saveItemNote = useCallback((slug: string, itemId: string, text: string, figmaUrl?: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== activeProjectId) return p;
        const slugNotes = p.notes[slug] || {};
        const updatedSlugNotes = { ...slugNotes };

        if (!text.trim() && !figmaUrl?.trim()) {
          delete updatedSlugNotes[itemId];
        } else {
          updatedSlugNotes[itemId] = {
            text: text.trim(),
            figmaUrl: figmaUrl?.trim() || undefined,
            updatedAt: new Date().toISOString(),
          };
        }

        return {
          ...p,
          updatedAt: new Date().toISOString(),
          notes: {
            ...p.notes,
            [slug]: updatedSlugNotes,
          },
        };
      })
    );
  }, [activeProjectId]);

  // Helper selectors
  const isChecked = useCallback(
    (slug: string, itemId: string) => (activeProject.progress[slug] || []).includes(itemId),
    [activeProject]
  );

  const getCheckedCount = useCallback(
    (slug: string) => {
      const standardCount = (activeProject.progress[slug] || []).length;
      const customItems = activeProject.customItems[slug] || [];
      const checkedCustom = customItems.filter((i) => i.checked).length;
      return standardCount + checkedCustom;
    },
    [activeProject]
  );

  const isBookmarked = useCallback(
    (slug: string) => activeProject.bookmarks.includes(slug),
    [activeProject]
  );

  // Share / Snapshot encoder
  const generateShareSnapshotUrl = useCallback(() => {
    try {
      const payload = {
        name: activeProject.name,
        clientOrTeam: activeProject.clientOrTeam,
        progress: activeProject.progress,
        customItems: activeProject.customItems,
        notes: activeProject.notes,
        exportedAt: new Date().toISOString(),
      };
      const jsonStr = JSON.stringify(payload);
      const base64Str = btoa(encodeURIComponent(jsonStr));
      const url = new URL(window.location.origin + window.location.pathname);
      url.searchParams.set('snapshot', base64Str);
      return url.toString();
    } catch {
      return window.location.href;
    }
  }, [activeProject]);

  // Import shared snapshot
  const importSharedSnapshot = useCallback((encodedSnapshot: string): string | null => {
    try {
      const jsonStr = decodeURIComponent(atob(encodedSnapshot));
      const payload = JSON.parse(jsonStr);
      if (payload && payload.name && payload.progress) {
        const newProjId = createProject(
          `${payload.name} (اشتراک‌گذاری)`,
          payload.clientOrTeam || 'تیم مشترک',
          `وارد شده از لینک اشتراک‌گذاری در ${new Date().toLocaleDateString('fa-IR')}`
        );
        setProjects((prev) =>
          prev.map((p) =>
            p.id === newProjId
              ? {
                  ...p,
                  progress: payload.progress || {},
                  customItems: payload.customItems || {},
                  notes: payload.notes || {},
                }
              : p
          )
        );
        return newProjId;
      }
    } catch (e) {
      console.error('Failed to import snapshot', e);
    }
    return null;
  }, [createProject]);

  // Export / Import entire state backup
  const exportData = useCallback(() => {
    return JSON.stringify(projects, null, 2);
  }, [projects]);

  const importData = useCallback((jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].id && parsed[0].progress) {
        setProjects(parsed);
        setActiveProjectIdState(parsed[0].id);
        return true;
      }
    } catch (e) {
      console.error('Failed to import data backup', e);
    }
    return false;
  }, []);

  return {
    projects,
    activeProject,
    activeProjectId,
    setActiveProjectId,
    createProject,
    updateProject,
    deleteProject,
    toggleItem,
    checkAllSection,
    uncheckAllSection,
    resetChecklist,
    resetAllProgress,
    toggleBookmark,
    addCustomItem,
    toggleCustomItem,
    deleteCustomItem,
    saveItemNote,
    isChecked,
    getCheckedCount,
    isBookmarked,
    generateShareSnapshotUrl,
    importSharedSnapshot,
    exportData,
    importData,
  };
}
