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
    "Salut, je suis très heureuse que vous soyez ici ! ( :",

		"Je m'appelle Danielle, j'ai 23 ans et je suis diplômée en sciences informatiques. Passionnée par les technologies liées au développement d'applications et à l'intelligence artificielle, je suis constamment motivée par les défis technologiques et la création de solutions innovantes.",
    "Je suis toujours à la recherche d'opportunités pour appliquer mes compétences, apprendre de nouvelles technologies, et collaborer avec des équipes qui partagent ma vision de créer des expériences exceptionnelles.",
    "Je vous remercie de prendre le temps de visiter mon portfolio, et j'espère que mon travail vous inspirera",
    "N'hésitez pas à télécharger mon CV [ici] et à me contacter pour toute collaboration ou opportunité."
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'A propos',
  },
  {
    id: 'projects',
    title: 'Projets',
  },
  {
    id: 'skills',
    title: 'Competences',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
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
  // {
  //   name: 'Disney Plus Replica',
  //   description: 'A replica of the Disney+ principal page built using React and Vite. The Vitest and Storybook technologies were also implemented for testing.',
  //   image: "https://camo.githubusercontent.com/5d85ae990f2b7b9a0f4d6246168b7995fc930d59d127a15c3c4ea18eb2a5001b/68747470733a2f2f6c756d696572652d612e616b616d616968642e6e65742f76312f696d616765732f65735f686f7573652d6f662d6469736e65792d706c75735f6d6f625f6d5f35376437663836652e6a7065673f726567696f6e3d302c302c3830302c3630302677696474683d373638",
  //   source_code_link: 'https://github.com/bl33h/disneyPlusReplica',
  //   demo_link: 'https://disneyplusreplica.netlify.app',
  // },
  // {
  //   name: 'Deep Dive Odyssey Raycasting',
  //   description: 'The code represents a raycasting graphics application with a Finding Pirate Treasure Under the Sea theme. It creates a 3D perspective effect by simulating rays of light and their interactions with a map.',
  //   image: "https://camo.githubusercontent.com/94f800b79d759c06717af7d816a16ccff75a0101c942ca9ad3c562d0dd2c9404/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784f4870736432527a5a575a6a616e4e366547513364473172616e64755a576b306457357262336f79596d527964584636646a413264535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f634b4c57543837305a4a39587769706e57772f67697068792e676966",
  //   source_code_link: 'https://github.com/bl33h/deepDiveOdysseyRaycasting',
  //   demo_link: 'https://camo.githubusercontent.com/94f800b79d759c06717af7d816a16ccff75a0101c942ca9ad3c562d0dd2c9404/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784f4870736432527a5a575a6a616e4e366547513364473172616e64755a576b306457357262336f79596d527964584636646a413264535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f634b4c57543837305a4a39587769706e57772f67697068792e676966',
  // },
  // {
  //   name: 'Fibonacci & Factorial',
  //   description: 'A project that includes two LISP programs: one for factorials and the other for Fibonacci sequences. They use recursion, prompt user input, and display results efficiently.',
  //   image: "https://i.pinimg.com/originals/96/c3/9a/96c39a5cb89092760fe11f355a32f4a4.gif",
  //   source_code_link: 'https://github.com/bl33h/fibonacciAndFactorial',
  //   demo_link: 'https://camo.githubusercontent.com/59b3c9969f369559fbeb1ed6a53f159e0e83b1151b82552b5b2165c4e9686e89/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f312f31612f4669626f6e616363695f63616c6c5f747265655f352e676966',
  // }
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'Je maîtrise parfaitement le langage HTML pour organiser des pages web et générer un contenu significatif accessible à tous les utilisateurs.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    `Je possède une expertise dans l'utilisation des CSS pour concevoir des pages web et créer des mises en page visuellement captivantes qui améliorent l'expérience globale de l'utilisateur.`,
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    `J'ai une grande expérience de l'utilisation de JavaScript pour introduire de l'interactivité et des fonctionnalités dans les pages web, ce qui permet de créer des interfaces utilisateur dynamiques.`,
  }, {
    id: 'javascript',
    title: 'Nestjs',
    icon: nestIcon,
    description:
    `J'ai une grande expérience de l'utilisation de JavaScript pour introduire de l'interactivité et des fonctionnalités dans les pages web, ce qui permet de créer des interfaces utilisateur dynamiques.`,
  },{
    id: 'javascript',
    title: 'Nextjs',
    icon: nextIcon,
    description:
    `J'ai une grande expérience de l'utilisation de JavaScript pour introduire de l'interactivité et des fonctionnalités dans les pages web, ce qui permet de créer des interfaces utilisateur dynamiques.`,
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      `Je connais bien React, je sais créer des composants réutilisables et gérer l'état de l'application à l'aide de crochets et de contextes.`,
  }, {
    id: 'react',
    title: 'React-native',
    icon: reactIcon,
    description:
      `Avec React-native,j'ai developpé le clone de trello en mobile .`,
  },


  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'Dans le cadre de mes compétences Figma, je libère ma créativité en concevant des interfaces utilisateur captivantes et en collaborant de manière transparente avec les concepteurs et les développeurs.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'Je maîtrise Git, la gestion des modifications de code, la collaboration avec les autres et la résolution efficace des conflits.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'Je sais utiliser GitHub pour une collaboration transparente sur les projets, le partage de code et le suivi des problèmes. Grâce à GitHub, je peux créer et gérer efficacement des référentiels et présenter mon travail à des employeurs potentiels',
  },
  {
    id: 'mongod',
    title: 'Mongodb',
    icon: psqlIcon,
    description:
      `J'ai une solide maîtrise de MongoDB, couvrant un large éventail de compétences telles que la connexion avec des interfaces front-end.`,
  },
  {
    id: 'vue',
    title: 'Vue',
    icon: viteIcon,
    description:
      `J'ai acquis une expérience considérable en travaillant avec Vue pendant 1 mois, en tirant parti de ses capacités pour construire des sites Web  et les déployer de manière transparente sur des plates-formes telles que Netlify et vercel.`,
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'Je sais coder des fonctions et créer des interfaces graphiques en utilisant Tkinter et Flask.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      `Lorsqu'il s'agit de créer des applications web, je préfère utiliser Node comme environnement d'exécution plutôt que Yarn. J'ai de l'expertise dans l'utilisation de Node.js pour développer des applications web puissantes et évolutives.`,
  },
  {
    id: 'eslint',
    title: 'Eslint',
    icon: eslintIcon,
    description:
      `J'utilise ESLint pour identifier et résoudre les problèmes de code, ainsi que pour normaliser la structure de mes projets. Avec ESLint, je garantis la qualité et la cohérence du code tout au long de mon processus de développement.`,
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
