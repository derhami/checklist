export type CategoryType = 'website' | 'components' | 'flows' | 'topics' | 'brands';

export interface Category {
  id: CategoryType;
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  icon: string;
  badgeCount?: number;
}

export interface ChecklistItem {
  id: string;
  text: string;
  explanation?: string;
  isEssential?: boolean;
}

export interface ChecklistSection {
  id: string;
  title: string;
  description?: string;
  items: ChecklistItem[];
}

export interface Checklist {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  categoryId: CategoryType;
  icon?: string;
  featured?: boolean;
  sections: ChecklistSection[];
  relatedSlugs?: string[];
}

export type SortOption = 'popular' | 'newest' | 'alphabetical' | 'itemCount';

export interface FilterState {
  searchQuery: string;
  category: CategoryType | 'all';
  sortBy: SortOption;
  onlyBookmarked?: boolean;
}

export interface CustomItem {
  id: string;
  text: string;
  explanation?: string;
  checked: boolean;
  createdAt: string;
}

export interface ItemNote {
  text: string;
  figmaUrl?: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  clientOrTeam?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  // Map of checklist slug -> Array of checked item IDs
  progress: Record<string, string[]>;
  // Map of checklist slug -> Array of CustomItem
  customItems: Record<string, CustomItem[]>;
  // Map of checklist slug -> (Map of itemId -> ItemNote)
  notes: Record<string, Record<string, ItemNote>>;
  // Bookmarked checklist slugs
  bookmarks: string[];
}

export interface RadarDimensionScore {
  categoryId: CategoryType;
  title: string;
  totalItems: number;
  checkedItems: number;
  percentage: number;
}

