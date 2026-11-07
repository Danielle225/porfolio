# Portfolio — Danielle DOMORAUD (DDAB)

Bienvenue sur le dépôt de mon portfolio personnel ! Ce projet présente mon parcours, mes projets et mes compétences techniques, avec un formulaire de contact et mes réseaux sociaux.

## Stack technique

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/) pour le formulaire de contact

## Démarrage

Prérequis : [Git](https://git-scm.com) et [Node.js](https://nodejs.org/en).

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Vérifier le code
npm run lint

# Construire la version de production
npm run build

# Prévisualiser la version de production
npm run preview
```

## Configuration du formulaire de contact

Le formulaire utilise EmailJS. Copiez le fichier `.env.example` en `.env` et renseignez vos identifiants :

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

Sans ces variables, des valeurs par défaut sont utilisées.

## Structure

- `src/App` : point d'entrée et composant racine.
- `src/Pages` : les différentes sections du portfolio (Hero, About, Projects, Skills, Contact).
- `src/Components` : composants réutilisables de l'interface.
- `src/Constants` : contenu et données (projets, compétences, liens, textes).
- `src/assets` : images et icônes.
- `public` : polices, CV et textures servis tels quels.

## Crédits

Design initial inspiré du template open-source de [Sara Echeverria (bl33h)](https://github.com/bl33h).
