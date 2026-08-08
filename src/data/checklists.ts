import { Checklist, CategoryType, SortOption, FilterState } from '../types';
import { websiteChecklists } from './checklistsWebsite';
import { componentsChecklists } from './checklistsComponents';
import { flowsChecklists } from './checklistsFlows';
import { topicsChecklists } from './checklistsTopics';
import { brandsChecklists } from './checklistsBrands';
import { searchMatches } from '../utils/persian';

export const allChecklists: Checklist[] = [
  ...websiteChecklists,
  ...componentsChecklists,
  ...flowsChecklists,
  ...topicsChecklists,
  ...brandsChecklists,
];

export function getChecklistBySlug(slug: string): Checklist | undefined {
  return allChecklists.find((c) => c.slug === slug);
}

export function getChecklistsByCategory(category: CategoryType): Checklist[] {
  return allChecklists.filter((c) => c.categoryId === category);
}

export function getFeaturedChecklists(): Checklist[] {
  return allChecklists.filter((c) => c.featured);
}

export function getTotalItemsCount(checklist: Checklist): number {
  return checklist.sections.reduce((acc, sec) => acc + sec.items.length, 0);
}

export function filterChecklists(
  checklists: Checklist[],
  filters: FilterState,
  bookmarkedSlugs: string[] = []
): Checklist[] {
  let result = [...checklists];

  // 1. Filter by category
  if (filters.category && filters.category !== 'all') {
    result = result.filter((c) => c.categoryId === filters.category);
  }

  // 2. Filter by bookmarked
  if (filters.onlyBookmarked) {
    result = result.filter((c) => bookmarkedSlugs.includes(c.slug));
  }

  // 3. Search query
  if (filters.searchQuery.trim()) {
    const q = filters.searchQuery.trim();
    result = result.filter((c) => {
      const matchTitle = searchMatches(c.title, q);
      const matchTitleEn = c.titleEn ? searchMatches(c.titleEn, q) : false;
      const matchDesc = searchMatches(c.description, q);
      const matchSection = c.sections.some(
        (sec) =>
          searchMatches(sec.title, q) ||
          sec.items.some((item) => searchMatches(item.text, q))
      );
      return matchTitle || matchTitleEn || matchDesc || matchSection;
    });
  }

  // 4. Sorting
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'popular':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'itemCount':
        result.sort((a, b) => getTotalItemsCount(b) - getTotalItemsCount(a));
        break;
      case 'alphabetical':
        result.sort((a, b) => a.title.localeCompare(b.title, 'fa'));
        break;
      case 'newest':
      default:
        // preserve natural order
        break;
    }
  }

  return result;
}
