import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWikiStore } from '@stores/wikiStore'
import { Menu, Search, Sun, Moon, Settings, User } from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export function Header() {
  const navigate = useNavigate()
  const toggleSidebar = useWikiStore((state) => state.toggleSidebar)
  const darkMode = useWikiStore((state) => state.darkMode)
  const toggleDarkMode = useWikiStore((state) => state.toggleDarkMode)
  const setSearchQuery = useWikiStore((state) => state.setSearchQuery)
  
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(searchValue)
    navigate(`/search?q=${encodeURIComponent(searchValue)}`)
  }

  return (
    <header className="border-b bg-card px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-primary">TechWiki</h1>
        </div>

        {/* Center: Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher dans le wiki... (Ctrl+K)"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10"
            />
          </div>
        </form>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
