const e={fr:{title:"Remindr",description:"Application de gestion de tâches et de rappels.",sections:[{subtitle:"Contexte",paragraph:`Dans le cadre d'un projet universitaire, nous avons eu un mois pour créer cette application web à 2. 
L'objectif était de nous familiariser avec ExpressJS en développant cette appli qui permet de créer des groupes et d'affecter des rappels à ces derniers.

Puisque le projet n'a pas beaucoup de fonctionnalités différentes, le parcours utilisateur est plutôt simple.
Un utilisateur lamdba pourra s'inscrire ou se connecter, créer un groupe pour y ajouter des membres puis créer des rappels pour ce dernier. Pour consulter les rappels, les utilisateurs peuvent soit aller sur leur tableau de bord pour voir tous ceux associés à leurs groupes. Ou bien, ils peuvent aller sur un groupe spécifique pour voir seulement les rappels de ce dernier.
`,image:"/projets/remindr/dashboard.png?url"},{subtitle:"Organisation du projet",paragraph:`Pour optimiser notre temps, nous avons divisé notre projet en 3 axes principaux en se basant sur le modèle MVC (Model-Vue-Controller) :
  - front-end
  - back-end
  - base de données

De mon côté, j'ai démarré en créant une base de données MySql et en utilisant Prisma pour faciliter la communication entre la base de données et le serveur. Du côté de mon collègue, il s'est occupé du front-end à l'aide d'Handlebars, un moteur de template permettant d'insérer directement des données dans une mise en page HTML.

Une fois ces deux parties terminées, nous avons pu les relier ensemble en utilisant ExpressJS pour créer un serveur qui communique avec la base de données et le front-end. Mais pour gérer le serveur, nous avons du gérer les routes et les contrôleurs. 
Cette partie a été la plus complexe pour moi car dès le début il a fallu réfléchir à la meilleure approche au niveau du nombres de routes et de contrôleurs pour éviter d'en avoir trop. Il a fallu aussi créer des middlewares (fonctions qui s'exécutent avant les routes) pour gérer les erreurs et les autorisations. C'était un peu long à faire mais permet de s'assurer que personne ne puisse manipuler les routes pour accéder à des données auxquelles ils n'ont pas accès.
`,image:"/projets/remindr/rappels.png?url"},{subtitle:"Retour d'expérience et points d'amélioration",paragraph:`Malgré les difficultés rencontrées, j'ai apprécié faire ce projet puisque c'était ma première application web et que l'équilibre entre front-end et back-end était parfait. De plus avoir un résultat concret et fonctionnel est toujours satisfaisant. Ce projet a donc été une bonne introduction à ExpressJS et au fonctionnement d'un appli web. Ça aussi été l'occassion d'apprendre à utiliser Git comme outil collaboratif.
À la différence d'autres projets, nous avons été efficaces sur le développement ce qui nous a permis d'ajouter des fonctionnalités. Par exemple :
 - Personnalisation des rappels en ajoutant le choix d'une couleur et plus d'options pour la description (grâce à la bibliothèque QuillJS).
 - Possibilité de renseigner si l'utilisateur a fini une tâche ou non et d'afficher la liste de tous ceux ayant fini cette dernière

Ce second ajout nous a même fait réaliser les avantages de Prisma. En tant que ORM, en plus de communiquer avec la base de données, il peut la modifier sans requêtes SQL.
Il faut tout de même noté que notre appli n'est pas très belle. Même si nous avons utilisé Bootstrap pour le design, il faudrait prendre du temps pour améliorer l'interface utilisateur. De plus il serait intéressant de déployer cette appli pour en faire profiter tous le monde.

<a class="textLink" href="https://github.com/Bigdil25007/Remindr">Lien GitHub :<strong>https://github.com/Bigdil25007/Remindr</strong></a>
`,image:"/projets/remindr/create-rappel.png?url"}],link:null,competences:[{techniques:[{skill:"ExpressJS",value:90},{skill:"Prisma",value:70},{skill:"Handlebars",value:80},{skill:"Git",value:75}]},{concepts:[{skill:"Modèle MVC",value:90},{skill:"Gestion des routes (middlewares)",value:85},{skill:"ORM (Object-Relational Mapping)",value:80}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]}};export{e as default};