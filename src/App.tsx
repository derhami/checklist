import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';
import { useProjectManager } from './hooks/useProjectManager';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PageLoader } from './components/PageLoader';
import { categories } from './data/categories';
import { allChecklists } from './data/checklists';
import { RadarDimensionScore } from './types';

// Lazy loading secondary routes and heavy interactive modals for optimal initial page load
const DashboardPage = lazy(() => import('./pages/DashboardPage').then(module => ({ default: module.DashboardPage })));
const BrowsePage = lazy(() => import('./pages/BrowsePage').then(module => ({ default: module.BrowsePage })));
const CategoryPage = lazy(() => import('./pages/CategoryPage').then(module => ({ default: module.CategoryPage })));
const ChecklistDetailPage = lazy(() => import('./pages/ChecklistDetailPage').then(module => ({ default: module.ChecklistDetailPage })));
const GuidePage = lazy(() => import('./pages/GuidePage').then(module => ({ default: module.GuidePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));

const SearchModal = lazy(() => import('./components/SearchModal').then(module => ({ default: module.SearchModal })));
const BookmarksDrawer = lazy(() => import('./components/BookmarksDrawer').then(module => ({ default: module.BookmarksDrawer })));

const ProjectManagerModal = lazy(() => import('./components/ProjectManagerModal').then(module => ({ default: module.ProjectManagerModal })));
const ShareSnapshotModal = lazy(() => import('./components/ShareSnapshotModal').then(module => ({ default: module.ShareSnapshotModal })));
const AuditReportModal = lazy(() => import('./components/AuditReportModal').then(module => ({ default: module.AuditReportModal })));
function ScrollToTopHelper() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const {
    projects,
    activeProjectId,
    activeProject,
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
    isBookmarked,
    getCheckedCount,
    isChecked,
    addCustomItem,
    toggleCustomItem,
    deleteCustomItem,
    saveItemNote,
    generateShareSnapshotUrl,
    importSharedSnapshot,
    exportData,
    importData,
  } = useProjectManager();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  // Compute Radar scores for the report modal
  const radarScores: RadarDimensionScore[] = categories.map((cat) => {
    const categoryChecklists = allChecklists.filter((c) => c.categoryId === cat.id);
    let totalItems = 0;
    let checkedItems = 0;

    categoryChecklists.forEach((chk) => {
      chk.sections.forEach((sec) => {
        totalItems += sec.items.length;
      });
      const checkedInSlug = activeProject.progress[chk.slug] || [];
      checkedItems += checkedInSlug.length;

      const custom = activeProject.customItems[chk.slug] || [];
      totalItems += custom.length;
      checkedItems += custom.filter((c) => c.checked).length;
    });

    const percentage = totalItems > 0 ? (checkedItems / totalItems) * 100 : 0;

    return {
      categoryId: cat.id,
      title: cat.title,
      totalItems,
      checkedItems,
      percentage,
    };
  });

  const totalItemsAll = radarScores.reduce((acc, curr) => acc + curr.totalItems, 0);
  const checkedItemsAll = radarScores.reduce((acc, curr) => acc + curr.checkedItems, 0);
  const overallPercentage = totalItemsAll > 0 ? Math.round((checkedItemsAll / totalItemsAll) * 100) : 0;

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopHelper />
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col justify-between selection:bg-brand-200 selection:text-stone-900 transition-colors">
          {/* Header Navigation */}
          <Header
            isDark={isDark}
            onToggleDark={toggleDarkMode}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenBookmarks={() => setIsBookmarksOpen(true)}
            bookmarksCount={activeProject.bookmarks.length}
            activeProjectName={activeProject.name}
            onOpenProjectModal={() => setIsProjectModalOpen(true)}
          />

          {/* Main Route Content with Lazy Suspense */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      getCheckedCount={getCheckedCount}
                      isBookmarked={isBookmarked}
                      onToggleBookmark={toggleBookmark}
                    />
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <DashboardPage
                      activeProject={activeProject}
                      projects={projects}
                      onOpenProjectModal={() => setIsProjectModalOpen(true)}
                      onOpenShareModal={() => setIsShareModalOpen(true)}
                      onOpenReportModal={() => setIsReportModalOpen(true)}
                      getCheckedCount={getCheckedCount}
                    />
                  }
                />
                <Route
                  path="/browse"
                  element={
                    <BrowsePage
                      getCheckedCount={getCheckedCount}
                      isBookmarked={isBookmarked}
                      onToggleBookmark={toggleBookmark}
                      bookmarks={activeProject.bookmarks}
                    />
                  }
                />
                <Route
                  path="/category/:slug"
                  element={
                    <CategoryPage
                      getCheckedCount={getCheckedCount}
                      isBookmarked={isBookmarked}
                      onToggleBookmark={toggleBookmark}
                    />
                  }
                />
                <Route
                  path="/checklist/:slug"
                  element={
                    <ChecklistDetailPage
                      activeProject={activeProject}
                      isChecked={isChecked}
                      toggleItem={toggleItem}
                      checkAllSection={checkAllSection}
                      uncheckAllSection={uncheckAllSection}
                      resetChecklist={resetChecklist}
                      isBookmarked={isBookmarked}
                      toggleBookmark={toggleBookmark}
                      getCheckedCount={getCheckedCount}
                      addCustomItem={addCustomItem}
                      toggleCustomItem={toggleCustomItem}
                      deleteCustomItem={deleteCustomItem}
                      saveItemNote={saveItemNote}
                    />
                  }
                />
                <Route path="/guide" element={<GuidePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          {/* Footer */}
          <Footer />

          {/* Modals Lazy Loaded */}
          {isSearchOpen && (
            <Suspense fallback={null}>
              <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                bookmarks={activeProject.bookmarks}
              />
            </Suspense>
          )}

          {isBookmarksOpen && (
            <Suspense fallback={null}>
              <BookmarksDrawer
                isOpen={isBookmarksOpen}
                onClose={() => setIsBookmarksOpen(false)}
                bookmarks={activeProject.bookmarks}
                onToggleBookmark={toggleBookmark}
                getCheckedCount={getCheckedCount}
                onResetAll={resetAllProgress}
                onExport={exportData}
                onImport={importData}
              />
            </Suspense>
          )}

          {isProjectModalOpen && (
            <Suspense fallback={null}>
              <ProjectManagerModal
                isOpen={isProjectModalOpen}
                onClose={() => setIsProjectModalOpen(false)}
                projects={projects}
                activeProjectId={activeProjectId}
                onSelectProject={setActiveProjectId}
                onCreateProject={createProject}
                onUpdateProject={updateProject}
                onDeleteProject={deleteProject}
              />
            </Suspense>
          )}

          {isShareModalOpen && (
            <Suspense fallback={null}>
              <ShareSnapshotModal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                activeProject={activeProject}
                shareUrl={generateShareSnapshotUrl()}
                onImportSnapshot={importSharedSnapshot}
              />
            </Suspense>
          )}

          {isReportModalOpen && (
            <Suspense fallback={null}>
              <AuditReportModal
                isOpen={isReportModalOpen}
                onClose={() => setIsReportModalOpen(false)}
                activeProject={activeProject}
                radarScores={radarScores}
                overallPercentage={overallPercentage}
              />
            </Suspense>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}
