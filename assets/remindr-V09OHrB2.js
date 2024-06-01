const e={fr:{title:"Remindr",description:"Application de gestion de tâches et de rappels",sections:[{subtitle:"Contexte",paragraph:`Dans le cadre d'un projet universitaire, nous avons eu un mois pour créer cette application web à 2. 
L'objectif était de nous familiariser avec ExpressJS en développant cette appli qui permet de créer des groupes et d'affecter des rappels à ces derniers.

Puisque le projet n'a pas beaucoup de fonctionnalités différentes, le parcours utilisateur est plutôt simple.
Un utilisateur lamdba pourra s'inscrire ou se connecter, créer un groupe pour y ajouter des membres puis créer des rappels pour ce dernier. Pour consulter les rappels, les utilisateurs peuvent soit aller sur leur tableau de bord pour voir tous ceux associés à leurs groupes. Ou bien, ils peuvent aller sur un groupe spécifique pour voir seulement les rappels de ce dernier.
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
<a class="textLink" href="https://github.com/Bigdil25007/Remindr" target="_blank" rel="noopener noreferrer">https://github.com/Bigdil25007/Remindr</a>
`,image:"/projets/remindr/create-rappel.png?url"}],competences:[{techniques:[{skill:"ExpressJS",value:90},{skill:"Prisma",value:70},{skill:"Handlebars",value:80},{skill:"Git",value:75}]},{concepts:[{skill:"Modèle MVC",value:90},{skill:"Gestion des routes (middlewares)",value:85},{skill:"ORM (Object-Relational Mapping)",value:80}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]},en:{title:"Remindr",description:"Task and Reminder Management Application",sections:[{subtitle:"Context",paragraph:`As part of a university project, we had one month to create this web application as a team of two. 
The objective was to familiarize ourselves with ExpressJS by developing this app, which allows users to create groups and assign reminders to them.

Since the project doesn't have many different features, the user journey is quite simple. 
A standard user can sign up or log in, create a group to add members, and then create reminders for that group. To view reminders, users can either go to their dashboard to see all reminders associated with their groups or go to a specific group to see only that group's reminders.
`,image:"/projets/remindr/dashboard.png?url"},{subtitle:"Project Organization",paragraph:`To optimize our time, we divided our project into 3 main axes based on the MVC architecture:

 - front-end (Vue)
 - back-end (Controller)
 - database (Model)
On my end, I started by creating a MySQL database and using Prisma to facilitate communication between the database and the server. On my colleague's side, he handled the front-end using Handlebars, a template engine that allows for direct insertion of data into an HTML layout.

Once these two parts were completed, we were able to connect them together using ExpressJS to create a server that communicates with the database and the front-end. However, to manage the server, we had to handle the routes and controllers.
This part was the most complex for me because from the beginning, we had to think about the best approach in terms of the number of routes and controllers to avoid having too many. We also had to create middleware functions (functions that execute before displaying the content of a route) to handle errors and permissions. It was a bit time-consuming, but it ensures that no one can manipulate the routes to access data they shouldn't have access to.
`,image:"/projets/remindr/rappels.png?url"},{subtitle:"Feedback and Improvement points",paragraph:`Despite the difficulties encountered, I enjoyed working on this project because it was my first web application, and the balance between front-end and back-end was very good. Additionally, having a concrete and functional result is always satisfying. This project was therefore a good introduction to ExpressJS and how web applications work. It was also an opportunity to learn how to use Git as a collaborative tool.
Unlike other projects, we were efficient in development, which allowed us to add features. For example:
 - Customization of reminders by adding the choice of color and more options for the description (thanks to the QuillJS library).
 - Possibility to indicate if the user has completed a task or not and to display the list of all those who have completed it.

This second addition even made us realize the advantages of Prisma. As an ORM, it not only communicates with the database but can also modify it without SQL queries.
However, it should be noted that our application is not very visually appealing. Even though we used Bootstrap for design, it would be necessary to take time to improve the user interface. Additionally, it would be interesting to deploy this application to make it available to everyone.

Find the project on GitHub (with more information in the wiki) :
<a class="textLink" href="https://github.com/Bigdil25007/Remindr" target="_blank" rel="noopener noreferrer">https://github.com/Bigdil25007/Remindr</a>
`,image:"/projets/remindr/create-rappel.png?url"}],competences:[{technicals:[{skill:"ExpressJS",value:90},{skill:"Prisma",value:70},{skill:"Handlebars",value:80},{skill:"Git",value:75}]},{concepts:[{skill:"MVC Template",value:90},{skill:"Route Management (Middlewares)",value:85},{skill:"ORM (Object-Relational Mapping)",value:80}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]}};export{e as default};
