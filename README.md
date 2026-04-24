# Advanced Markdown-based Wiki

Un wiki personnel avancé développé avec Tauri, basé sur des fichiers Markdown, destiné à remplacer progressivement l'assistance d'une IA dans le travail quotidien d'un développeur.

## 🚀 Lancement en local

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (v18 ou supérieur) - [Télécharger](https://nodejs.org/)
- **npm** ou **yarn** - Inclus avec Node.js
- **Rust** (v1.70 ou supérieur) - [Installer](https://www.rust-lang.org/tools/install)
- **Tauri CLI** - Sera installé automatiquement

### Installation

1. **Cloner le repository** (si ce n'est pas déjà fait) :
```bash
cd /workspace
```

2. **Installer les dépendances frontend** :
```bash
npm install
```

3. **Installer les dépendances Rust/Tauri** :
```bash
cargo install create-tauri-app
```

### Lancement en mode développement

Pour lancer l'application en mode développement avec rechargement automatique :

```bash
npm run tauri dev
```

Cette commande va :
- Compiler le frontend React
- Démarrer le serveur de développement Tauri
- Ouvrir une fenêtre avec l'application

### Build de production

Pour créer une version de production de l'application :

```bash
npm run tauri build
```

Les binaires générés seront disponibles dans `src-tauri/target/release/`.

### Structure du projet

```
/workspace
├── src-tauri/          # Backend Rust (Tauri)
│   ├── src/           # Code Rust principal
│   ├── Cargo.toml     # Dépendances Rust
│   └── tauri.conf.json # Configuration Tauri
├── dist/              # Frontend compilé (React)
├── wiki/              # Fichiers Markdown du wiki
├── package.json       # Dépendances Node.js
└── README.md          # Ce fichier
```

## 📚 Fonctionnalités

- **Indexation automatique** des fichiers Markdown
- **Moteur de recherche avancé** (texte, tags, catégories)
- **Liens croisés automatiques** entre pages
- **Modules de troubleshooting** avec arbres de décision
- **Playbooks de résolution** de problèmes
- **Analyseur d'erreurs** (stack traces)
- **Glossaire technique dynamique**
- **Snippets intelligents** avec copie rapide
- **Système d'exercices** pour l'apprentissage
- **Mode Cheat Sheet** pour les commandes essentielles

## 🛠️ Technologies utilisées

- **Tauri** - Framework desktop Rust
- **React** - Interface utilisateur
- **Markdown** - Format de contenu
- **Mermaid** - Diagrammes
- **JavaFX-style UI** - Interface moderne inspirée de JavaFX

## 📖 Utilisation

Une fois l'application lancée, vous pouvez :

1. Naviguer dans vos documents Markdown
2. Rechercher par mots-clés, tags ou catégories
3. Consulter les playbooks de troubleshooting
4. Accéder aux snippets de code
5. Résoudre des exercices pratiques

## 🔧 Commandes utiles

```bash
# Vérifier l'installation de Tauri
npm run tauri info

# Nettoyer le projet
npm run clean

# Linter le code
npm run lint

# Tests (à implémenter)
npm run test
```

## 🤝 Contribution

Ce wiki est conçu pour être extensible. Vous pouvez ajouter :
- De nouveaux modules
- De nouveaux types de pages
- De nouvelles sources Markdown
- Des playbooks personnalisés

## 📄 Licence

Usage personnel - Wiki de développement
