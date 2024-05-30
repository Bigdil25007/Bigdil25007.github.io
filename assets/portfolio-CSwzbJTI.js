const e={fr:{title:"Portfolio",description:"Site web personnel fait en VueJS",sections:[{subtitle:"Contexte",paragraph:`Puisque je souhaitais me mettre en avant sur le web, j'ai décidé de créer mon propre site pour présenter mes projets et mon profil.

Au départ, j'avais créé une première version avec du PHP mais lorsque j'ai commencé à séparer le contenu HTML en différents fichiers, j'ai réalisé que c'était très compliqué à gérer (surtout que ça signifiait au minimum un fichier CSS et JS par fichier HTML). J'ai alors laissé ce projet de côté jusqu'à que je découvre VueJS.
Toute la logique de composants correspondait parfaitement à ce que je voulais faire. J'ai donc décidé de tout recommencer en utilisant ce framework.

Pour m'aider pendant le développement en local, j'ai utilisé **Vite** qui offre plusieurs avantages comme : 
 - le rechargement automatique à chaque modification du code 
 - la définition d'alias pour que les chemins d'accès aux fichiers soient plus courts et maintenables dans le temps.
 - la compression automatique des fichiers lors de du déploiement
`,image:"/projets/remindr/dashboard.png?url"},{subtitle:"Organisation du projet",paragraph:`Travailler avec VueJS était beaucoup plus simple puisqu'avec les balises [<template>], [<script setup>] et [<style scoped>], tout ce qui définie le composant est regroupé dans un seul fichier. Les seules autres dépendances proviennent du composant parent.
C'est pourquoi j'ai décidé dès le début de séparer mes composants en 3 catégories :
 - page
 - section 
 - utilitaire
Plus on descends dans la liste, plus les composants sont réduits et réutilisables par ceux venant d'une catégorie supérieure. Gardé cette hiérarchie en tête m'a permis de mieux visualiser les dépendances entre mes composants et de mieux les organiser. 

Puisque mon site a plusieurs pages et que je souhaitais optimiser l'importation des composants, j'ai utilisé **vue-router** et sa fonctionnalité d'importation dynamique. Ça m'a permis de charger uniquement les composants nécessaires pour la page actuelle.
De plus avec vue-router, j'ai pu définir des routes ayant des paramètres dynamiques. Par exemple la route "/projets" peut avoir un paramètre "id" qui permet de soit afficher une liste de tous les projets (si id est vide) soit d'afficher les détails d'un projet particulier. 
(Un autre exemple est présent dans la section suivante...)
`},{subtitle:"Point technique : Gestion des langues",paragraph:`Pendant le développement une idée m'est venue en tête, proposer le site en français mais aussi en anglais ! 
J'ai donc dû réfléchir à la meilleure approche car je pouvais soit utiliser des extensions comme vue-i18n ou créer mes propres fichiers de traduction. 
J'ai finalement préféré créer mon propre système car l'utilisation du vue-i18n n'est pas le plus simple et que j'avais déjà en tête de séparer le contenu texte et la mise en page des composants. Après réfléxion, je suis partie sur des fichiers **YAML** pour stocker le contenu texte dans toutes les langues disponibles. J'ai préféré ce format au JSON car il est plus lisible et facile à écrire.
Une fois les fichiers créés, j'ai dû ajouter un système aux composants majeurs (page et section) pour qu'ils puissent avoir conscience de la route sur laquelle ils se trouvent, grâce à **vue-router**, et donc du contenu à aller chercher dans les fichiers YAML. 
Enfin, j'ai ajouté un bouton permettant de changer de langue. Puisque elle est "stockée" dans la route, il suffisait de récupérer le chemin actuel et de changer (FR -> EN ou EN -> FR) dans la première partie de la route.
`,image:"/projets/remindr/rappels.png?url"},{subtitle:"Retour d'expérience et points d'amélioration",paragraph:`Sur certains points, ce projet aura été un réel plaisir à faire. J'ai pu améliorer mes compétences en VueJS et découvrir de nouvelles choses comme les fichier YAML. Je suis aussi content d'avoir pu implémenter de la logique dans le site et ne donc pas faire que du front-end. 
Et justement, au sujet du front-end, ce sera le seul point négatif de ce projet. Que ce soit sur mon ressenti du développement ou bien sur le résultat concret, ça aura été ma bête noire. J'ai essayé de m'aider en me basant sur d'autres portfolios et templates trouvés sur le web mais mes compétences en front-end sont assez limités ce qui fait que mon site n'est pas à la hauteur de mes atteintes. 

Cependant, au niveau des fonctionnalités et de l'organisation du code, je suis satisfait de ce que j'ai pu faire. Grâce à cette organisation, je pourrais facilement maintenir ce site et l'améliorer au fur et à mesure. Je compte justement : 
 - Améliorer le caroussel
 - Afficher plus prorement la liste de projets (avec des filtres)
 - Gérer le formulaire de contact pour la version du site déployé

Retrouvez le projet sur GitHub :
<a class="textLink" href="https://github.com/Bigdil25007/Bigdil25007.github.io">https://github.com/Bigdil25007/Bigdil25007.github.io</a>
`,image:""}],competences:[{techniques:[{skill:"VueJS",value:90},{skill:"YAML",value:70},{skill:"Vite",value:80}]},{concepts:[{skill:"Modèle MVC",value:90},{skill:"Importation dynamique de composants",value:85},{skill:"Optimisation du SEO",value:80}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]},en:{title:"Portfolio",description:"Personal website made with VueJS",sections:[{subtitle:"Context",paragraph:`Puisque je souhaitais me mettre en avant sur le web, j'ai décidé de créer mon propre site pour présenter mes projets et mon profil.

Au départ, j'avais créé une première version avec du PHP mais lorsque j'ai commencé à séparer le contenu HTML en différents fichiers, j'ai réalisé que c'était très compliqué à gérer (surtout que ça signifiait avoir en plus un fichier de CSS et JS minimum par fichier HTML). J'ai alors laissé ce projet de côté jusqu'à que je découvre VueJS.
Toute la logique de composants correspondait parfaitement à ce que je voulais faire. J'ai donc décidé de tout recommencer en utilisant ce framework.

Pour m'aider pendant le développement en local, j'ai utilisé **Vite** qui offre plusieurs avantages : rechargement automatique à chaque modification du code / définition d'alias pour que les chemins d'accès aux fichiers soient plus court / etc...
`,image:"/projets/remindr/dashboard.png?url"},{subtitle:"Organisation du projet",paragraph:`Pour optimiser notre temps, nous avons divisé notre projet en 3 axes principaux en se basant sur l'architecture MVC :
  - front-end (Vue)
  - back-end (Controller)
  - base de données (Modèle)

De mon côté, j'ai démarré en créant une base de données MySql et en utilisant Prisma pour faciliter la communication entre la base de données et le serveur. Du côté de mon collègue, il s'est occupé du front-end à l'aide d'Handlebars, un moteur de template permettant d'insérer directement des données dans une mise en page HTML.

Une fois ces deux parties terminées, nous avons pu les relier ensemble en utilisant ExpressJS pour créer un serveur qui communique avec la base de données et le front-end. Mais pour gérer le serveur, nous avons du gérer les routes et les contrôleurs. 
Cette partie a été la plus complexe pour moi car dès le début il a fallu réfléchir à la meilleure approche au niveau du nombres de routes et de contrôleurs pour éviter d'en avoir trop. Il a fallu aussi créer des middlewares (fonctions qui s'exécutent avant l'affichage du contenu d'une route) pour gérer les erreurs et les autorisations. C'était un peu long à faire mais permet de s'assurer que personne ne puisse manipuler les routes pour accéder à des données auxquelles ils n'ont pas accès.
`,image:"/projets/remindr/rappels.png?url"},{subtitle:"Retour d'expérience et points d'amélioration",paragraph:`Malgré les difficultés rencontrées, j'ai apprécié faire ce projet puisque c'était ma première application web et que l'équilibre entre front-end et back-end était très bon. De plus avoir un résultat concret et fonctionnel est toujours satisfaisant. Ce projet a donc été une bonne introduction à ExpressJS et au fonctionnement d'un appli web. Ça aussi été l'occassion d'apprendre à utiliser Git comme outil collaboratif.
À la différence d'autres projets, nous avons été efficaces sur le développement ce qui nous a permis d'ajouter des fonctionnalités. Par exemple :
 - Personnalisation des rappels en ajoutant le choix d'une couleur, et plus d'options pour la description (grâce à la bibliothèque QuillJS).
 - Possibilité de renseigner si l'utilisateur a fini une tâche ou non et d'afficher la liste de tous ceux ayant fini cette dernière

Ce second ajout nous a même fait réaliser les avantages de Prisma. En tant que ORM, en plus de communiquer avec la base de données, il peut la modifier sans requêtes SQL.
Il faut tout de même noté que notre appli n'est pas très belle. Même si nous avons utilisé Bootstrap pour le design, il faudrait prendre du temps pour améliorer l'interface utilisateur. De plus il serait intéressant de déployer cette appli pour en faire profiter tous le monde.

Retrouvez le projet sur GitHub (avec plus d'infos dans le wiki) :
<a class="textLink" href="https://github.com/Bigdil25007/Remindr">https://github.com/Bigdil25007/Remindr</a>
`,image:"/projets/remindr/create-rappel.png?url"}],competences:[{technicals:[{skill:"VueJS",value:90},{skill:"YAML",value:70},{skill:"Vite",value:80}]},{concepts:[{skill:"Modèle MVC",value:90},{skill:"Importation dynamique de composants",value:85},{skill:"Optimisation du SEO",value:80}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]}};export{e as default};
