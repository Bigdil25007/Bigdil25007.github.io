const e={fr:{title:"Encyclopédie Harry Potter",description:'Site "Wiki" fait en VueJS et communicant avec une API REST',sections:[{subtitle:"Contexte",paragraph:`Dans le cadre d'un projet universitaire de fin d'année, nous avons eu 1 mois pour créer un site web qui présente visuellement des informations récupérées depuis une API REST; PotterDB. 
L'objectif était d'approfondir nos compétences en VueJS et de découvrir les interactions avec une API REST.

Avant de nous lancer dans le développement, nous avons voulu réfléchir à l'organisation du site et les outils à disposition pour gagner du temps. Nous avons donc décidé d'avoir une page d'accueil permettant l'accès aux 4 catégories de l'encyclopédie : 
 - Personnages
 - Livres
 - Potions
 - Sorts

Au niveau des outils, nous avons utilisé **Bootstrap** pour le design, **vue-router** pour la gestion des routes et **Axios** (client HTTP basé sur les promesses) pour récupérer les données de l'API.
`,image:"/projets/encyclopedie_HP/accueil.png?url"},{subtitle:"Organisation du projet",paragraph:`L'objectif dans un premier temps a été de récupérer les données de l'API. Nous avons donc créé des fonctions pour chaque catégorie qui essaie de récupérer les données et en cas d'erreur renvoie un message (qui servira pour la partie front-end). 
Ensuite, nous avons créé des components que nous avons séparé en 3 catégories : 
 - Les pages : Accueil, Personnages, Livres, Potions, Sorts
 - Les cartes pour chaque élément unique : Personnage, Livre, Potion, Sort 
 - Les outils : Barre de recherche, message d'erreur et pagination
Grâce à cette organisation le code est plus lisible et facile à maintenir.

Une fois la communication avec l'API faite et le design créé, il ne restait plus qu'à ajouter les données dans le site.
`,image:""},{subtitle:"Point technique : Communication avec l'API",paragraph:`Nous avons voulu ajouter des fonctionnalités pour rendre le site plus interactif et surtout **plus rapide**.
Nous avons donc ajouté 2 features :
 - Un système de **recherche** à partir du nom de l'élément 
 - Un système de **pagination** pour accélérer le chargement des pages en évitant de récupérer toutes les données depuis une seule requête.

Ces deux features ont été ajoutées grâce aux options de l'API accessibles au travers des adresses URL 
--(exemple: https://api.potterdb.com/v1/potions?page[size]=5&page[number]=2 => récupérer 5 potions de la page numéro 2).--
`,image:"/projets/encyclopedie_HP/communicationAPI.png?url"},{subtitle:"Retour d'expérience et points d'amélioration",paragraph:`Ce projet aura été globalement réussi. Nous avons créé un site web complet en 1 mois et approfondit nos compétences en VueJS et en communication avec des API, tout en utilisant **Git** comme outil collaboratif.
Au niveau de l'organisation du code, nous avons bien réussi à profiter de VueJS pour séparer les parties du site de façon cohérente. De plus la séparation entre le design des composants, la logique de traitement des données et la communication avec l'API, permet d'avoir un site maintenable et évolutif.

Et justement un point d'évolution serait le design. En effet, nous avons utilisé **Bootstrap** pour gagner du temps mais le site s'en retrouve impacté et n'est pas très attractif.

Retrouvez le projet sur GitHub :
<a class="textLink" href="https://github.com/malosseRomain/Encyclopedie-HarryPotter" target="_blank" rel="noopener noreferrer">https://github.com/malosseRomain/Encyclopedie-HarryPotter</a>
`,image:"/projets/encyclopedie_HP/categorie.png?url"}],competences:[{techniques:[{skill:"VueJS",value:85},{skill:"Axios",value:85},{skill:"NodeJS",value:80}]},{concepts:[{skill:"Pagination et optimisation des requêtes",value:85},{skill:"API REST",value:75}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]},en:{title:"Harry Potter Encyclopedia",description:"Website built with VueJS and communicating with a REST API",sections:[{subtitle:"Context",paragraph:`As part of an end-of-year university project, we had 1 month to create a website that visually presents information retrieved from a REST API; PotterDB.
The goal was to deepen our skills in VueJS and to discover interactions with a REST API.

Before starting development, we wanted to think about the organization of the site and the tools available to save time. We decided to have a homepage providing access to the 4 categories of the encyclopedia: 
 - Characters
 - Books
 - Potions
 - Spells

For the tools, we used **Bootstrap** for design, **vue-router** for route management, and **Axios** (a promise-based HTTP client) to retrieve data from the API.
`,image:"/projets/encyclopedie_HP/accueil.png?url"},{subtitle:"Project Organization",paragraph:`The initial goal was to retrieve data from the API. So, we created functions for each category that attempt to fetch the data and return a message in case of an error (which will be used for the front-end).
Next, we created components that we separated into 3 categories: 
 - Pages: Home, Characters, Books, Potions, Spells
 - Cards for each unique element: Character, Book, Potion, Spell
 - Tools: Search bar, error message and pagination
Thanks to this organization, the code is more readable and easier to maintain.

Once the communication with the API was done and the design created, all that was left was to add the data to the site.
`,image:""},{subtitle:"Technical Point: API communication",paragraph:`We wanted to add features to make the site more interactive and especially **faster**.
So, we added 2 features:
 - A **search** system based on the element's name
 - A **pagination** system to speed up page loading by avoiding fetching all the data from a single request.

These two features were added thanks to the API options accessible through the URLs 
--(example: https://api.potterdb.com/v1/potions?page[size]=5&page[number]=2 => retrieve 5 potions from page number 2).--
`,image:"/projets/encyclopedie_HP/communicationAPI.png?url"},{subtitle:"Feedback and Areas for improvement",paragraph:`This project was overall a success. We created a complete website in 1 month and deepened our skills in VueJS and communication with APIs, all while using **Git** as a collaborative tool.
In terms of code organization, we successfully utilized VueJS to separate the parts of the site in a coherent manner. Additionally, the separation between the design of the components, the data processing logic, and the communication with the API allows for a maintainable and scalable site.

One area for improvement would be the design. Indeed, we used Bootstrap to save time, but as a result, the site is not very attractive.

Find the project on Github :
<a class="textLink" href="https://github.com/malosseRomain/Encyclopedie-HarryPotter" target="_blank" rel="noopener noreferrer">https://github.com/malosseRomain/Encyclopedie-HarryPotter</a>
`,image:"/projets/encyclopedie_HP/categorie.png?url"}],competences:[{technicals:[{skill:"VueJS",value:85},{skill:"Axios",value:85},{skill:"NodeJS",value:80}]},{concepts:[{skill:"Pagination and query optimization",value:85},{skill:"REST API",value:75}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]}};export{e as default};
