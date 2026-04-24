import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from '@components/layout/Layout'
import HomePage from '@pages/HomePage'
import WikiPage from '@pages/WikiPage'
import SearchPage from '@pages/SearchPage'
import SnippetsPage from '@pages/SnippetsPage'
import TroubleshootingPage from '@pages/TroubleshootingPage'
import ExercisesPage from '@pages/ExercisesPage'
import MindMapPage from '@pages/MindMapPage'

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="wiki/:slug" element={<WikiPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="snippets" element={<SnippetsPage />} />
            <Route path="troubleshooting" element={<TroubleshootingPage />} />
            <Route path="exercises" element={<ExercisesPage />} />
            <Route path="mindmap" element={<MindMapPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
