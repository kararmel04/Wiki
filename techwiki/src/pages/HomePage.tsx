import { motion } from 'framer-motion'
import { BookOpen, Search, Wrench, Code2, Dumbbell, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@components/ui/Button'

const features = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Documentation',
    description: 'Centralisez toutes vos connaissances techniques',
    path: '/wiki',
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: 'Recherche Avancée',
    description: 'Trouvez rapidement l\'information dont vous avez besoin',
    path: '/search',
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: 'Troubleshooting',
    description: 'Diagnostiquez et résolvez vos problèmes étape par étape',
    path: '/troubleshooting',
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Snippets',
    description: 'Bibliothèque de code réutilisable',
    path: '/snippets',
  },
  {
    icon: <Dumbbell className="h-8 w-8" />,
    title: 'Exercices',
    description: 'Pratiquez et améliorez vos compétences',
    path: '/exercises',
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Knowledge Packs',
    description: 'Synthèses complètes sur des sujets complexes',
    path: '/wiki/knowledge-packs',
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          Bienvenue sur <span className="text-primary">TechWiki</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Votre wiki personnel avancé pour la documentation technique, le troubleshooting et l'apprentissage autonome.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-12"
      >
        <div className="bg-card rounded-lg p-6 text-center border">
          <div className="text-3xl font-bold text-primary">0</div>
          <div className="text-sm text-muted-foreground mt-1">Pages</div>
        </div>
        <div className="bg-card rounded-lg p-6 text-center border">
          <div className="text-3xl font-bold text-primary">0</div>
          <div className="text-sm text-muted-foreground mt-1">Snippets</div>
        </div>
        <div className="bg-card rounded-lg p-6 text-center border">
          <div className="text-3xl font-bold text-primary">0</div>
          <div className="text-sm text-muted-foreground mt-1">Playbooks</div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(feature.path)}
          >
            <div className="text-primary mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {feature.description}
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Accéder
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 bg-card rounded-lg p-6 border"
      >
        <h2 className="text-xl font-semibold mb-4">Actions Rapides</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Nouvelle Page</Button>
          <Button variant="secondary">Importer Markdown</Button>
          <Button variant="outline">Voir Mind Map</Button>
          <Button variant="ghost">Cheat Sheets</Button>
        </div>
      </motion.div>
    </div>
  )
}
