import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface WikiPage {
  id: string
  slug: string
  title: string
  content: string
  tags: string[]
  categories: string[]
  type: 'page' | 'snippet' | 'exercise' | 'playbook' | 'knowledge-pack'
  createdAt: string
  updatedAt: string
  backlinks: string[]
  outgoingLinks: string[]
}

export interface SearchState {
  query: string
  results: WikiPage[]
  isLoading: boolean
  filters: {
    tags: string[]
    categories: string[]
    types: string[]
  }
}

export interface WikiStore {
  // Pages
  pages: WikiPage[]
  currentPage: WikiPage | null
  
  // Search
  search: SearchState
  
  // UI State
  sidebarOpen: boolean
  viewMode: 'edit' | 'preview' | 'split'
  darkMode: boolean
  
  // Actions
  setPages: (pages: WikiPage[]) => void
  setCurrentPage: (page: WikiPage | null) => void
  setSearchQuery: (query: string) => void
  toggleSidebar: () => void
  setViewMode: (mode: 'edit' | 'preview' | 'split') => void
  toggleDarkMode: () => void
  addTag: (tag: string) => void
  removeTag: (tag: string) => void
}

export const useWikiStore = create<WikiStore>()(
  persist(
    (set, get) => ({
      // Initial State
      pages: [],
      currentPage: null,
      search: {
        query: '',
        results: [],
        isLoading: false,
        filters: {
          tags: [],
          categories: [],
          types: [],
        },
      },
      sidebarOpen: true,
      viewMode: 'preview',
      darkMode: false,

      // Actions
      setPages: (pages) => set({ pages }),
      
      setCurrentPage: (page) => set({ currentPage: page }),
      
      setSearchQuery: (query) => 
        set((state) => ({ 
          search: { ...state.search, query } 
        })),
      
      toggleSidebar: () => 
        set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      
      setViewMode: (mode) => set({ viewMode: mode }),
      
      toggleDarkMode: () => 
        set((state) => ({ darkMode: !state.darkMode })),
      
      addTag: (tag: string) =>
        set((state) => ({
          search: {
            ...state.search,
            filters: {
              ...state.search.filters,
              tags: [...state.search.filters.tags, tag],
            },
          },
        })),
      
      removeTag: (tag: string) =>
        set((state) => ({
          search: {
            ...state.search,
            filters: {
              ...state.search.filters,
              tags: state.search.filters.tags.filter((t) => t !== tag),
            },
          },
        })),
    }),
    {
      name: 'techwiki-storage',
      partialize: (state) => ({ 
        darkMode: state.darkMode,
        viewMode: state.viewMode,
      }),
    }
  )
)
