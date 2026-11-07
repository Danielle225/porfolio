/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  nextIcon,
  jsIcon,
  nestIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  postgresIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  trellotech,
  pawsitivePrototype,
  memoryGame,
  Yowl,
  trello,
  postit,
  bricabrac,
  gestionHotel,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  nextIcon,
  nestIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  postgresIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Bonjour, moi c'est Danielle Domoraud.",
    "Je suis développeuse Fullstack, avec une forte orientation Backend et une formation en sciences informatiques.",
    "J'interviens dans la conception et le développement d'applications web, de solutions métier et d'API. J'accorde une attention particulière à la logique métier, à l'architecture logicielle, à la structuration des données et à l'intégration des systèmes.",
    "Au fil de mes expériences, j'ai eu l'occasion de travailler sur différents projets, de collaborer avec des équipes techniques et de contribuer à la mise en place de solutions répondant à des besoins concrets.",
    "Ma vision du développement : au-delà du code, je cherche à comprendre les problématiques, concevoir des solutions cohérentes et construire des applications utiles, évolutives et maintenables.",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'À propos',
  },
  {
    id: 'experiences',
    title: 'Expériences',
  },
  {
    id: 'projects',
    title: 'Projets',
  },
  {
    id: 'skills',
    title: 'Compétences',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const experiences = [
  {
    role: 'Développement & architecture de chatbot',
    company: 'Orange CI',
    description:
      "Conception et développement d'un chatbot, de l'architecture à l'intégration des flux conversationnels.",
    tags: ['Architecture', 'Chatbot', 'Intégration'],
  },
  {
    role: 'Développement Fullstack & Backend',
    company: 'Projets & missions',
    description:
      "Conception d'applications web et d'API, avec un focus sur la logique métier, la structuration des données et l'architecture logicielle.",
    tags: ['API', 'Backend', 'Base de données'],
  },
  {
    role: 'Intégration IT',
    company: 'Poste actuel',
    description:
      'Intégration de systèmes et de solutions techniques en collaboration avec les équipes projets.',
    tags: ['Intégration', 'Systèmes'],
  },
];

const projects = [
  {
    name: 'Gestion Résidence',
    description: `Back-office de gestion de résidence/hôtel permettant d'administrer les chambres, les réservations, les clients et le suivi du taux d'occupation.`,
    image: gestionHotel,
    // source_code_link: 'https://github.com/Danielle225',
    demo_link: 'https://gestion-residence-front-wumw.vercel.app/login',
  },
  {
    name: 'Bric-à-Brac',
    description: `Plateforme d'une association permettant d'enregistrer les cotisations mensuelles et spéciales de chaque membre, de suivre les paiements et de générer des rapports.`,
    image: bricabrac,
    // source_code_link: 'https://github.com/Danielle225',
    demo_link: 'https://bric-abrac.vercel.app/',
  },
  {
    name: "Yowl",
    description: `Création d'un réseau social permettant aux utilisateurs de commenter sans restriction.`,
    image: Yowl,
    source_code_link: 'https://github.com/Danielle225',
    // demo_link: 'https://arasarmemory.netlify.app/',
  },
  {
    name: 'Rotten Tomatoes',
    description: `Application web d'évaluation et de critique de films avec gestion des utilisateurs, des notes, des commentaires et des favoris.  `,
    image:  pawsitivePrototype,
    source_code_link: 'https://github.com/Danielle225',
    demo_link: 'https://rate-flicks.vercel.app/',
  },
  {
    name: 'Post-it',
    description: ` Création d'une application de prise de notes avec Vue.js et une API REST.` ,
    image:postit,
    // source_code_link: 'https://github.com/Danielle225',
    demo_link: 'https://daniesticky.netlify.app/',
  },
  {
    name: 'clone Trello',
    description: `Développement d'un clone de Trello avec Vue.js et une API WordPress pour la gestion des tâches.`,
    image:   trello,
    // source_code_link: 'https://github.com/bl33h/clientServerChat',
    // demo_link: 'https://youtu.be/Mk1BNqPz1n4',
  },
  {
    name: 'clone Trello mobile',
    description: `  Application mobile inspirée de Trello pour la gestion des tâches et des projets avec Expo et React Native.`,
    image: trellotech,
    // source_code_link: 'https://github.com/bl33h/visitOurLands',
    // demo_link: 'https://visitourlands.netlify.app/',
  },
  {
    name: 'Show Time',
    description: `Application de réservation de tickets d'événements avec gestion des utilisateurs et des événements`,
    image:  memoryGame,
    // source_code_link: 'https://github.com/bl33h/exploringTheSpace',
    demo_link: 'https://show-time-f5r8.onrender.com/'
  },
];

const memoji = {
  image: [avatar],
};

const skillGroups = [
  {
    id: 'backend',
    title: 'Backend & API',
    icon: 'server',
    description:
      "Conception d'APIs et de services robustes, de la logique métier à l'architecture.",
    technologies: [
      'Node.js',
      'NestJS',
      'Flask',
      'Python',
      'API REST',
      'JWT',
      'Architecture logicielle',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    description:
      'Interfaces modernes, responsives et accessibles, pensées pour l’usage.',
    technologies: [
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
    ],
  },
  {
    id: 'database',
    title: 'Bases de données',
    icon: 'database',
    description:
      'Structuration, modélisation et exploitation fiable des données.',
    technologies: [
      'PostgreSQL',
      'MongoDB',
      'SQL',
      'Modélisation des données',
    ],
  },
  {
    id: 'tools',
    title: 'Outils & Collaboration',
    icon: 'tools',
    description:
      "Versioning, tests d'API et collaboration avec les équipes design.",
    technologies: ['Git', 'GitHub', 'Postman', 'Figma'],
  },
];

export {
  media,
  introduction,
  projects,
  experiences,
  memoji,
  skillGroups,
  icons,
};
