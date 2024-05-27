const e={fr:{title:"Remindr",description:"Remindr est une application de gestion de tâches et de rappels.",sections:[{subtitle:"Contexte",paragraph:`Dans le cadre d'un projet universitaire, nous avons eu un mois pour créer cette application web à 2. 
L'objectif était de nous familiariser avec ExpressJS en développant cette appli qui permet de créer des groupes et d'affecter des rappels à ces derniers.

Puisque le projet n'a pas beaucoup de fonctionnalités différentes, le parcours utilisateur est plutôt simple.
Un utilisateur lamdba pourra s'inscrire ou se connecter, créer un groupe pour y ajouter des membres puis créer des rappels pour ce dernier. Pour consulter les rappels, les utilisateurs peuvent soit aller sur leur tableau de bord pour voir tous ceux associés à leurs groupes. Ou bien, ils peuvent aller sur un groupe spécifique pour voir seulement les rappels de ce dernier.
`,image:"/projets/remindr/dashboard.png?url"},{subtitle:"Organisation du projet",paragraph:`Pour optimiser notre temps, nous avons divisé notre projet en 3 axes principaux en se basant sur le modèle MVC (Model-Vue-Controller) :
  - front-end
  - back-end
  - base de données

De mon côté, j'ai démarré en créant une base de données MySql et en utilisant Prisma pour faciliter la communication entre la base de données et le serveur. Du côté de mon collègue, il s'est occupé du front-end à l'aide d'Handlebars, un moteur de template permettant d'insérer directement des données dans une mise en page HTML.

Une fois ces deux parties terminées, nous avons pu les relier ensemble en utilisant ExpressJS pour créer un serveur qui communique avec la base de données et le front-end. Mais pour gérer le serveur, nous avons du gérer les routes et les contrôleurs. 
Cette partie a été la plus complexe pour moi car dès le début il a fallu réfléchir à la meilleure approche au niveau du nombres de routes et de contrôleurs pour éviter d'en avoir trop. Il a fallu aussi créer des middlewares (fonctions qui s'exécutent avant les routes) pour gérer les erreurs et les autorisations.
`,image:"/projets/remindr/rappels.png?url"},{subtitle:"Retour d'expérience et points d'amélioration",paragraph:`Malgré les difficultés rencontrées, j'ai apprécié faire ce projet puisque c'était ma première application web et que l'équilibre entre front-end et back-end était parfait. De plus avoir un résultat concret et fonctionnel est toujours satisfaisant. 
`,image:"/projets/remindr/create-rappel.png?url"}]}};export{e as default};
