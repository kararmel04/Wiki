# TechWiki - Wiki Personnel Avancé pour Développeurs

## 🎯 Vision

Un système de documentation technique intelligent qui remplace progressivement l'assistance IA dans le travail quotidien d'un développeur.

### Objectifs Principaux

- **Référentiel technique personnel** : Centraliser toutes les connaissances
- **Outil de diagnostic autonome** : Résoudre les problèmes sans assistance externe
- **Mémoire de travail** : Garder trace des découvertes et solutions
- **Guide d'apprentissage progressif** : Structurer la montée en compétences
- **Boîte à outils interactive** : Accéder rapidement aux snippets et commandes

---

## 🏗️ Architecture Globale

```
┌─────────────────────────────────────────────────────────────────┐
│                         UI Layer (React)                        │
│  ┌─────────────┬─────────────┬─────────────┬─────────────────┐  │
│  │   Sidebar   │   Editor    │   Preview   │   Tools Panel   │  │
│  │  Navigation │  Markdown   │   Rendu     │  Search/Diag    │  │
│  └─────────────┴─────────────┴─────────────┴─────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                    Core Engine (Rust/Tauri)                     │
│  ┌─────────────┬─────────────┬─────────────┬─────────────────┐  │
│  │   Indexer   │   Search    │   Links     │   Analytics     │  │
│  │   Scanner   │   Engine    │   Graph     │   Learning      │  │
│  └─────────────┴─────────────┴─────────────┴─────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                      Modules Spécialisés                        │
│  ┌─────────────┬─────────────┬─────────────┬─────────────────┐  │
│  │Troubleshoot │  Snippets   │  Exercises  │   Knowledge     │  │
│  │   Trees     │  Library    │   System    │     Packs       │  │
│  └─────────────┴─────────────┴─────────────┴─────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                    Data Layer (Markdown + JSON)                 │
│  ┌─────────────┬─────────────┬─────────────┬─────────────────┐  │
│  │   Pages     │   Tags      │   Graph     │   User Data     │  │
│  │   .md       │   Index     │   DB        │   Settings      │  │
│  └─────────────┴─────────────┴─────────────┴─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Structure du Projet

```
techwiki/
├── src-tauri/                 # Backend Rust (Tauri)
│   ├── src/
│   │   ├── main.rs            # Point d'entrée
│   │   ├── lib.rs             # Bibliothèque core
│   │   ├── commands/          # Commandes Tauri
│   │   │   ├── mod.rs
│   │   │   ├── wiki.rs        # Gestion des pages
│   │   │   ├── search.rs      # Moteur de recherche
│   │   │   ├── index.rs       # Indexation
│   │   │   ├── links.rs       # Liens croisés
│   │   │   └── diagnose.rs    # Diagnostic
│   │   ├── core/              # Logique métier
│   │   │   ├── mod.rs
│   │   │   ├── indexer.rs     # Indexation Markdown
│   │   │   ├── search.rs      # Algorithmes de recherche
│   │   │   ├── graph.rs       # Graphe de connaissances
│   │   │   └── analyzer.rs    # Analyse d'erreurs
│   │   ├── modules/           # Modules spécialisés
│   │   │   ├── mod.rs
│   │   │   ├── troubleshooting/
│   │   │   ├── snippets/
│   │   │   ├── exercises/
│   │   │   └── knowledge/
│   │   └── db/                # Stockage
│   │       ├── mod.rs
│   │       ├── graph.rs       # Graphe Neo4j-like
│   │       └── store.rs       # KV Store
│   ├── Cargo.toml
│   └── tauri.conf.json
│
├── src/                       # Frontend React
│   ├── components/
│   │   ├── layout/
│   │   ├── editor/
│   │   ├── preview/
│   │   ├── search/
│   │   ├── navigation/
│   │   └── modules/
│   ├── hooks/
│   ├── stores/                # State management
│   ├── utils/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
│
├── wiki/                      # Contenu Markdown
│   ├── pages/                 # Pages principales
│   ├── snippets/              # Snippets de code
│   ├── playbooks/             # Playbooks de troubleshooting
│   ├── exercises/             # Exercices
│   ├── knowledge-packs/       # Knowledge Packs
│   └── templates/             # Templates
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🔧 Stack Technique

### Backend (Rust/Tauri)

| Composant | Technologie | Rôle |
|-----------|-------------|------|
| Framework | Tauri v2 | Application desktop sécurisée |
| Langage | Rust | Performance, sécurité mémoire |
| Parsing MD | pulldown-cmark | Rendu Markdown |
| Search | tantivy | Moteur de recherche full-text |
| Graph | petgraph | Graphe de connaissances |
| Storage | sled | Base de données embarquée |

### Frontend (React)

| Composant | Technologie | Rôle |
|-----------|-------------|------|
| Framework | React 18 + TypeScript | UI moderne |
| Build | Vite | Development rapide |
| State | Zustand | Gestion d'état légère |
| Routing | React Router | Navigation |
| Markdown | react-markdown + remark | Rendu MD |
| Diagrammes | mermaid | Graphiques et flowcharts |
| UI Components | shadcn/ui | Composants modernes |
| Icons | lucide-react | Iconographie |
| Animations | framer-motion | Transitions fluides |

---

## 📦 Modules Fonctionnels

### 1. Indexation Automatique

```rust
// Structure d'une page indexée
pub struct IndexedPage {
    pub id: String,              // UUID unique
    pub path: PathBuf,           // Chemin du fichier
    pub title: String,           // Titre extrait
    pub tags: Vec<String>,       // Tags extraits
    pub categories: Vec<String>, // Catégories
    pub word_count: usize,       // Nombre de mots
    pub created_at: DateTime,    // Date de création
    pub updated_at: DateTime,    // Date de modification
    pub backlinks: Vec<String>,  // Pages qui pointent vers celle-ci
    pub outgoing_links: Vec<String>, // Pages liées
    pub content_hash: String,    // Hash pour détection de changements
}
```

**Fonctionnalités :**
- Scan récursif du dossier `wiki/`
- Extraction automatique des métadonnées (frontmatter)
- Détection des liens internes `[[lien]]`
- Mise à jour incrémentielle (watch mode)
- Génération du graphe de connaissances

---

### 2. Moteur de Recherche Avancé

```rust
pub enum SearchType {
    FullText(String),           // Recherche textuelle
    ByTag(Vec<String>),         // Par tags
    ByCategory(Vec<String>),    // Par catégories
    ByErrorType(ErrorType),     // Par type d'erreur
    Similarity(String),         // Pages similaires
}

pub struct SearchResult {
    pub page: IndexedPage,
    pub score: f32,
    pub highlights: Vec<Highlight>,
    pub match_type: MatchType,
}
```

**Types de recherche :**
- **Full-text** : Recherche dans tout le contenu
- **Tags** : Filtrage par tags multiples
- **Catégories** : Navigation thématique
- **Type de problème** : build, runtime, réseau, etc.
- **Similarité** : Suggestions de pages liées

---

### 3. Liens Croisés Automatiques

```rust
pub struct LinkGraph {
    nodes: HashMap<String, Node>,
    edges: Vec<Edge>,
}

pub struct LinkSuggestion {
    pub target_page: String,
    pub confidence: f32,
    pub reason: SuggestionReason,
    pub context_keywords: Vec<String>,
}

enum SuggestionReason {
    KeywordMatch,
    SemanticSimilarity,
    CommonTags,
    FrequentlyAccessedTogether,
}
```

**Détections :**
- Mots-clés techniques → pages pertinentes
- Erreurs similaires → playbooks associés
- Snippets complémentaires
- Concepts liés

---

### 4. Système de Troubleshooting

#### Arbres de Décision

```typescript
interface DecisionTree {
  id: string;
  title: string;
  rootNode: DecisionNode;
  tags: string[];
  lastUpdated: Date;
}

interface DecisionNode {
  id: string;
  question: string;
  symptom?: string;
  options: DecisionOption[];
}

interface DecisionOption {
  label: string;
  nextNode?: string;
  result?: DiagnosisResult;
  command?: string;
}

interface DiagnosisResult {
  diagnosis: string;
  confidence: number;
  solutions: Solution[];
  relatedPages: string[];
}
```

#### Playbooks de Résolution

```markdown
---
title: "Erreur Gradle: Could not resolve all dependencies"
tags: [gradle, build, dependencies, network]
category: "Build Errors"
severity: "high"
---

## Symptômes

```
FAILURE: Build failed with an exception.
* What went wrong:
Could not resolve all dependencies for configuration ':compileClasspath'.
```

## Causes Probables

1. **Problème réseau** - Repository inaccessible
2. **Cache corrompu** - Cache Gradle endommagé
3. **Version incompatible** - Dépendance inexistante
4. **Proxy/Firewall** - Blocage réseau

## Diagnostic

### Étape 1: Vérifier la connectivité

```bash
curl -I https://repo.maven.apache.org/maven2/
```

### Étape 2: Nettoyer le cache

```bash
./gradlew --stop
rm -rf ~/.gradle/caches
```

### Étape 3: Vérifier les dépendances

```bash
./gradlew dependencies --refresh-dependencies
```

## Solutions

### Solution A: Forcer la refresh
```bash
./gradlew build --refresh-dependencies --no-daemon
```

### Solution B: Mode offline (si cache local)
```bash
./gradlew build --offline
```

## Vérification

- [ ] Build successful
- [ ] Tests pass
- [ ] Plus d'erreurs de résolution

## Pages Associées

- [[Configuration Gradle]]
- [[Gestion des Dépendances]]
- [[Problèmes Réseau]]
```

#### Analyseur d'Erreurs

```rust
pub struct ErrorAnalyzer {
    patterns: Vec<ErrorPattern>,
}

pub struct ErrorPattern {
    pub regex: Regex,
    pub error_type: ErrorType,
    pub technology: Technology,
    pub severity: Severity,
    pub suggested_playbooks: Vec<String>,
    pub quick_fixes: Vec<QuickFix>,
}

pub async fn analyze_error(stacktrace: &str) -> AnalysisResult {
    // Détection du pattern
    // Identification technologie
    // Suggestions de solutions
    // Liens vers pages pertinentes
}
```

---

### 5. Snippets Intelligents

```typescript
interface Snippet {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  tags: string[];
  category: string;
  usage: string;
  warnings?: string[];
  relatedSnippets: string[];
  lastUsed?: Date;
  useCount: number;
}
```

**Fonctionnalités :**
- Syntax highlighting
- Bouton copier
- Variables substituables
- Contexte d'utilisation
- Notes personnelles

---

### 6. Système d'Exercices

```typescript
interface Exercise {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topic: string;
  description: string;
  hints: Hint[];
  solution: Solution;
  explanation: string;
  relatedConcepts: string[];
  estimatedTime: number; // minutes
}

interface Hint {
  level: number;
  text: string;
  revealed: boolean;
}
```

---

### 7. Knowledge Packs

Synthèses complètes sur un sujet :

```markdown
---
type: knowledge-pack
title: "Architecture JavaFX Modulaire"
version: "1.0"
lastUpdated: "2024-01-15"
prerequisites: ["Java Basics", "FXML"]
estimatedStudyTime: 120 # minutes
---

# Architecture JavaFX Modulaire

## Overview

[Description générale]

## Concepts Clés

### 1. Modularité
[Explication]

### 2. Injection de Dépendances
[Explication]

## Patterns

### MVC avec JavaFX
[Code + explication]

## Anti-patterns

❌ **À éviter :**
- Controller trop gros
- Couplage fort

✅ **Bonnes pratiques :**
- Séparation claire
- Events bus

## Ressources

- [[FXML Best Practices]]
- [[CSS JavaFX]]
- [[Dependency Injection]]
```

---

## 🎨 Interface Utilisateur

### Layout Principal

```
┌────────────────────────────────────────────────────────────┐
│  ☰  TechWiki                    🔍 Search...    ⚙️ 👤     │
├──────────┬────────────────────────────┬───────────────────┤
│          │                            │                   │
│  PAGES   │      EDITOR / PREVIEW      │    TOOLS          │
│          │                            │                   │
│  📄 Home │  # Title                   │  🔍 Search        │
│  ├─ Java │  Content here...           │  ├─ Results       │
│  ├─ Git  │                            │                   │
│  └─ Linux│  [Split view toggle]       │  🔗 Links         │
│          │                            │  ├─ Backlinks     │
│  TAGS    │  [Mode: Edit | Preview]    │  └─ Suggestions   │
│  #gradle │                            │                   │
│  #javafx │                            │  📊 Stats         │
│  #css    │                            │                   │
│          │                            │  🛠️ Quick Actions  │
│  RECENT  │                            │  - New Page       │
│  Today   │                            │  - Import         │
│  Yesterday│                           │  - Export         │
│          │                            │                   │
└──────────┴────────────────────────────┴───────────────────┘
```

### Modes d'Affichage

1. **Mode Lecture** : Rendu Markdown complet
2. **Mode Édition** : Éditeur Markdown avec preview
3. **Split View** : Éditeur + Preview côte à côte
4. **Mode Focus** : Plein écran sur le contenu
5. **Mind Map** : Visualisation graphique des liens

---

## 🔄 Workflows Utilisateur

### Workflow 1: Résolution de Problème

```
1. Utilisateur rencontre une erreur
   ↓
2. Ouvre TechWiki → "Analyseur d'erreurs"
   ↓
3. Colle la stacktrace
   ↓
4. Le système identifie :
   - Type d'erreur
   - Technologie
   - Playbooks pertinents
   ↓
5. Suit le playbook étape par étape
   ↓
6. Exécute les commandes suggérées
   ↓
7. Marque le problème comme résolu
   ↓
8. Ajoute des notes personnelles si nécessaire
```

### Workflow 2: Apprentissage

```
1. Utilisateur veut apprendre un sujet
   ↓
2. Recherche le Knowledge Pack correspondant
   ↓
3. Suit la structure progressive :
   - Concepts de base
   - Exemples
   - Exercices
   ↓
4. Fait les exercices interactifs
   ↓
5. Consulte les snippets associés
   ↓
6. Marque les concepts comme "acquis"
   ↓
7. Le système propose des révisions espacées
```

### Workflow 3: Documentation

```
1. Utilisateur résout un nouveau problème
   ↓
2. Crée une nouvelle page depuis template
   ↓
3. Remplit les sections :
   - Problème
   - Solution
   - Commandes
   ↓
4. Ajoute tags et catégories
   ↓
5. Le système suggère des liens vers pages existantes
   ↓
6. Sauvegarde → Indexation automatique
   ↓
7. Disponible pour recherche future
```

---

## 📊 Formats de Données

### Frontmatter Standard

```yaml
---
title: "Titre de la page"
tags: [tag1, tag2, tag3]
categories: [cat1, cat2]
type: page | snippet | exercise | playbook | knowledge-pack
created: 2024-01-15
updated: 2024-01-20
related: [[Page1]], [[Page2]]
status: draft | published | archived
---
```

### Graphe de Connaissances (JSON)

```json
{
  "nodes": [
    {
      "id": "page-uuid",
      "type": "page",
      "label": "Titre",
      "tags": ["gradle", "build"],
      "weight": 1.0
    }
  ],
  "edges": [
    {
      "source": "page-uuid-1",
      "target": "page-uuid-2",
      "type": "link",
      "strength": 0.8
    }
  ]
}
```

---

## 🚀 Roadmap

### Phase 1: Foundation (Semaines 1-2)
- [ ] Setup Tauri + React
- [ ] Structure de base
- [ ] Lecture/Écriture Markdown
- [ ] Navigation simple

### Phase 2: Core Features (Semaines 3-4)
- [ ] Indexation automatique
- [ ] Moteur de recherche
- [ ] Liens croisés
- [ ] UI complète

### Phase 3: Troubleshooting (Semaines 5-6)
- [ ] Arbres de décision
- [ ] Playbooks
- [ ] Analyseur d'erreurs

### Phase 4: Learning (Semaines 7-8)
- [ ] Knowledge Packs
- [ ] Snippets
- [ ] Exercices

### Phase 5: Polish (Semaines 9-10)
- [ ] Animations
- [ ] Mind Map
- [ ] Sync (optionnel)
- [ ] Plugins

---

## 🎯 Critères de Succès

- ✅ Résoudre 80% des problèmes courants sans IA
- ✅ Temps de recherche < 5 secondes
- ✅ Navigation intuitive en moins de 3 clics
- ✅ Indexation en temps réel
- ✅ UI fluide et responsive
- ✅ Extensible facilement

---

## 📝 Bonnes Pratiques de Contenu

1. **Une idée par page** : Garder les pages focalisées
2. **Liens riches** : Relier les concepts entre eux
3. **Tags cohérents** : Utiliser une taxonomie définie
4. **Exemples concrets** : Toujours inclure du code
5. **Mise à jour régulière** : Réviser le contenu obsolète
6. **Notes personnelles** : Ajouter son contexte

---

## 🔮 Évolutions Possibles

- **IA Locale** : Integration de modèles locaux pour suggestions
- **Sync Cloud** : Synchronisation multi-appareils
- **Plugins** : Système d'extensions communautaires
- **API** : Exposition des données pour outils externes
- **Collaboration** : Mode équipe (optionnel)
- **Voice** : Commandes vocales pour hands-free

---

## License

MIT - Projet personnel open-source
