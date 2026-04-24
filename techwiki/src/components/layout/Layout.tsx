import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { useWikiStore } from '@stores/wikiStore'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export function Layout() {
  const sidebarOpen = useWikiStore((state) => state.sidebarOpen)
  const darkMode = useWikiStore((state) => state.darkMode)

  return (
    <div className={clsx("flex h-screen overflow-hidden", darkMode && "dark")}>
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 0, opacity: sidebarOpen ? 1 : 0 }}
        className="border-r bg-card overflow-hidden"
      >
        <Sidebar />
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
