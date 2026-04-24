import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  Book, 
  Code2, 
  Wrench, 
  Dumbbell, 
  Network,
  FileText,
  ChevronRight,
  ChevronDown,
  FolderOpen,
  Tag
} from 'lucide-react'
import { useWikiStore } from '@stores/wikiStore'
import { clsx } from 'clsx'

interface NavItem {
  icon: React.ReactNode
  label: string
  path?: string
  children?: NavItem[]
}

const mainNav: NavItem[] = [
  { icon: <Book className="h-4 w-4" />, label: 'Pages', path: '/' },
  { icon: <Code2 className="h-4 w-4" />, label: 'Snippets', path: '/snippets' },
  { icon: <Wrench className="h-4 w-4" />, label: 'Troubleshooting', path: '/troubleshooting' },
  { icon: <Dumbbell className="h-4 w-4" />, label: 'Exercices', path: '/exercises' },
  { icon: <Network className="h-4 w-4" />, label: 'Mind Map', path: '/mindmap' },
]

const samplePages = [
  { title: 'Introduction à JavaFX', slug: 'intro-javafx' },
  { title: 'Configuration Gradle', slug: 'config-gradle' },
  { title: 'Commandes Git essentielles', slug: 'git-commandes' },
  { title: 'Débogage Linux', slug: 'debug-linux' },
]

const sampleTags = ['javafx', 'gradle', 'git', 'linux', 'css', 'build', 'network']

export function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const pages = useWikiStore((state) => state.pages)
  const [expandedSections, setExpandedSections] = useState({
    pages: true,
    tags: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="flex flex-col h-full">
      {/* Main Navigation */}
      <nav className="p-4 space-y-1">
        {mainNav.map((item) => (
          <button
            key={item.label}
            onClick={() => item.path && navigate(item.path)}
            className={clsx(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              location.pathname === item.path
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Pages Section */}
      <div className="border-t mt-2 pt-2">
        <button
          onClick={() => toggleSection('pages')}
          className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
        >
          <span>Pages</span>
          {expandedSections.pages ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>

        {expandedSections.pages && (
          <div className="px-2 space-y-1">
            {(pages.length > 0 ? pages : samplePages).map((page: any) => (
              <button
                key={page.slug}
                onClick={() => navigate(`/wiki/${page.slug}`)}
                className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span className="truncate">{page.title || page}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tags Section */}
      <div className="border-t mt-2 pt-2">
        <button
          onClick={() => toggleSection('tags')}
          className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
        >
          <span>Tags</span>
          {expandedSections.tags ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>

        {expandedSections.tags && (
          <div className="px-4 py-2 flex flex-wrap gap-2">
            {sampleTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Recent Files */}
      <div className="border-t mt-auto pt-4 p-4">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Récents
        </div>
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Aucun fichier récent</div>
        </div>
      </div>
    </div>
  )
}
