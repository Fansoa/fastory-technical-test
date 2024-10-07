[Lien du repo détaillant les spécifications du test technique](https://github.com/KrashStudio/react-exercice)

# Fastory - Test technique

## Description

Ce projet est une application web composée d'une API développée avec Hapi.js et d'un front-end en React.js. L'objectif est de fournir un back-end pour gérer des données via une API et une interface utilisateur dynamique pour interagir avec ces données.

## Table des matières

- [Installation](#installation)
- [Lancement du projet](#lancement-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Screenshots](#Screenshots)

## Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- Pour une meilleure expérience, utilisez le navigateur Chrome sur un support PC
- L'ambiance sonore compte aussi, alors pensez à monter le son

### Étapes d'installation

1. Clonez ce dépôt sur votre machine locale :

    ```bash
    git clone https://github.com/Fansoa/fastory-technical-test.git
    cd fastory-technical-test
    ```

2. Installez les dépendances pour l'API (back-end Hapi.js) et le front-end (React.js) :

    ```bash
    # Installation pour le back-end
    cd backend
    npm install

    # Installation pour le front-end
    cd ../frontend
    npm install
    ```

## Lancement du projet

### Démarrer le serveur API (Hapi.js)

1. Depuis le répertoire `backend`, démarrez le serveur :

    ```bash
      npm i
      npm run dev
    ```

2. Le serveur devrait démarrer sur [http://localhost:3000](http://localhost:3000).

### Démarrer le front-end (React.js)

1. Depuis le répertoire `frontend`, démarrez l'application React :

    ```bash
      npm i
      npm run dev
    ```

2. Le front-end sera accessible via [http://localhost:3001](http://localhost:3001).

## Technologies utilisées

### Back-end (API)

- **Hapi.js** : Framework web pour Node.js, utilisé pour créer l'API.
- **Node.js** : Environnement d'exécution JavaScript côté serveur.

### Front-end

- **React.js** : Bibliothèque JavaScript pour construire des interfaces utilisateur interactives.
- **Tanstack Query** : Pour la gestion des requêtes et des états.
- **Zustand** : Pour l'implémentation d'un store type Redux minimaliste.
- **React Hook Form** : Pour la gestion des formulaires cotés clients.
- **React Three Fiber** : Pour l'utilisation du moteur graphique WebGL des navigateurs.
- **React Router** : Pour la navigation entre les différentes pages de l'application.
- **Tailwind.css** : Pour la gestion du style de l'application.

### Outils supplémentaires

- **TypeScript** : Pour typer le code JavaScript.
- 
## Fonctionnalités

### API

- **Récupération de donnée** : Consommation de donnée d'une [API tierce](https://swapi.dev/documentation).
- **Authentification** : Cookie, Token
- **Validation** : Gestion des données entrantes
- **Gestion des erreurs** : Gestion des erreurs et des réponses adéquates (ex : 404, 500, etc.).

### Front-end

- **Liste des éléments** : Affichage d'une liste d'éléments provenant de l'API.
- **Ajout / Modification / Suppression d'éléments** : Formulaires pour ajouter, modifier ou supprimer des éléments.
- **Navigation** : Une interface réactive avec des transitions fluides entre les pages.

## Structure du projet

### Backend (Hapi.js)

Voici un aperçu de la structure des fichiers pour l'API :

```bash
api/                        # Back-end
├── controllers/            # Gère les opérations logiques
│   └── auth.js
│   └── search.js
├── mock/                   # Mocking des utilisateurs
├── routes/                 # Définition des routes API
│   └── auth.js
│   └── search.js
│   └── index.js            # Union des routes API
├── utils/                  # Dossier contenant des outils, methods, constants..
│   └── index.js            # Définition des routes API
├── server.js               # Configuration du serveur Hapi.js
└── package.json            # Dépendances et scripts npm
app/                        # Front-end
├── src/
│   ├── components/         # Composants React (ex: Overlay, TextInput)
│   ├── pages/              # Pages (ex: LoginPage, SpywareSystemPage)
│   ├── hooks/              # Hooks Custom hook pour une optimisations des performances et une meilleure séparation des responsabilités
│   ├── stores/             # Store Pour une gestion des états en dehors du VDOM React
│   ├── styles/             # Module css
├── ├──utils/               # Dossier contenant des outils, methods, constants..
│   ├── services/
│   │   └── api.js          # Service pour interagir avec l'API Hapi
│   ├── App.js              # Composant principal avec les providers de context
│   └── index.js            # Point d'entrée de l'application
└── package.json            # Dépendances et scripts npm```
```

# Screenshots

![localhost_5173_login (1)](https://github.com/user-attachments/assets/96f09f99-1e5e-487b-8a45-ce07e12bea0f)

![localhost_5173_login (3)](https://github.com/user-attachments/assets/37bf0d99-c2d1-49a9-b021-38f00942170b)
