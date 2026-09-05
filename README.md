# Kasa

Kasa est une plateforme de mise en location d'appartements entre particuliers. Ce dépôt contient la refonte front-end du site, développée en React avec Vite.

Ce projet a été réalisé dans le cadre d'une formation, en simulant une mission freelance pour une refonte technique complète : passage d'un ancien site en ASP.NET vers une stack full JavaScript (React côté front-end, Node.js côté back-end).

## Stack technique

- [React](https://react.dev/) — bibliothèque UI
- [React Router](https://reactrouter.com/) — gestion des routes
- [Vite](https://vite.dev/) — outil de build et serveur de développement
- [Sass](https://sass-lang.com/) — préprocesseur CSS

## Installation

Cloner le dépôt puis installer les dépendances :

```bash
git clone <url-du-repo>
cd kasa
npm install
```

## Lancer le projet en développement

```bash
npm start
```

L'application est alors accessible sur [http://localhost:5173](http://localhost:5173).

## Pages

- **Accueil** (`/`) — liste des logements disponibles
- **Logement** (`/logement/:id`) — détail d'un logement (carrousel photo, description, équipements), redirige vers la page d'erreur si l'id ne correspond à aucun logement
- **À propos** (`/a-propos`) — présentation des valeurs de Kasa
- **Erreur 404** — affichée pour toute route inexistante

## Composants principaux

`Header`, `Footer` et `Layout` (structure commune à toutes les pages), `Banner`, `Card`, `Collapse` (accordéon réutilisable), `Slideshow` (carrousel photo), `Tag` et `Rating`.

## Statut du projet

✅ Projet finalisé : toutes les pages et fonctionnalités prévues sont développées.

## Auteur

Chevassus Baptiste, apprenti développeur front-end chez OpenClassrooms.
