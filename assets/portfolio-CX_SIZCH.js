const e={fr:{title:"Portfolio",description:"Site web personnel fait en VueJS",sections:[{subtitle:"Contexte",paragraph:`Puisque je souhaitais me mettre en avant sur le web, j'ai décidé de créer mon propre site pour présenter mes projets et mon profil.

Au départ, j'avais créé une première version avec du PHP mais lorsque j'ai commencé à séparer le contenu HTML en différents fichiers, j'ai réalisé que c'était très compliqué à gérer (surtout que ça signifiait au minimum un fichier CSS et JS par fichier HTML). J'ai alors laissé ce projet de côté jusqu'à que je découvre VueJS.
Toute la logique de composants correspondait parfaitement à ce que je voulais faire. J'ai donc décidé de tout recommencer en utilisant ce framework.

Pour m'aider pendant le développement en local, j'ai utilisé **Vite** qui offre plusieurs avantages comme : 
 - le rechargement automatique à chaque modification du code 
 - la définition d'alias pour que les chemins d'accès aux fichiers soient plus courts et maintenables dans le temps.
 - la compression automatique des fichiers lors de du déploiement
`,image:"/projets/portfolio/viteXvue.png?url"},{subtitle:"Organisation du projet",paragraph:`Travailler avec VueJS était beaucoup plus simple puisqu'avec les balises [<template>], [<script setup>] et [<style scoped>], tout ce qui définie le composant est regroupé dans un seul fichier. Les seules autres dépendances proviennent du composant parent.
C'est pourquoi j'ai décidé dès le début de séparer mes composants en 3 catégories :
 - page
 - section 
 - utilitaire
Plus on descends dans la liste, plus les composants sont réduits et réutilisables par ceux venant d'une catégorie supérieure. Gardé cette hiérarchie en tête m'a permis de mieux visualiser les dépendances entre mes composants et de mieux les organiser. 

Puisque mon site a plusieurs pages et que je souhaitais optimiser l'importation des composants, j'ai utilisé **vue-router** et sa fonctionnalité d'importation dynamique. Ça m'a permis de charger uniquement les composants nécessaires pour la page actuelle.
De plus avec vue-router, j'ai pu définir des routes ayant des paramètres dynamiques. Par exemple la route "/projets" peut avoir un paramètre "id" qui permet de soit afficher une liste de tous les projets (si id est vide) soit d'afficher les détails d'un projet particulier. 
(Un autre exemple est présent dans la section suivante...)
`,image:"/projets/portfolio/vue-router.png?url"},{subtitle:"Point technique : Gestion des langues",paragraph:`Pendant le développement une idée m'est venue en tête, proposer le site en français mais aussi en anglais ! 
J'ai donc dû réfléchir à la meilleure approche car je pouvais soit utiliser des extensions comme vue-i18n ou créer mes propres fichiers de traduction. 

J'ai finalement préféré créer mon propre système car l'utilisation du vue-i18n n'est pas le plus simple et que j'avais déjà en tête de séparer le contenu texte et la mise en page des composants. Après réfléxion, je suis partie sur des fichiers **YAML** pour stocker le contenu texte dans toutes les langues disponibles. J'ai préféré ce format au JSON car il est plus lisible et facile à écrire.
Une fois les fichiers créés, j'ai dû ajouter un système aux composants majeurs (page et section) pour qu'ils puissent avoir conscience de la route sur laquelle ils se trouvent, grâce à **vue-router**, et donc du contenu à aller chercher dans les fichiers YAML. 

Enfin, j'ai ajouté un bouton permettant de changer de langue. Puisque elle est "stockée" dans la route, il suffisait de récupérer le chemin actuel et de changer (FR -> EN ou EN -> FR) dans la première partie de la route.
`,image:"/projets/portfolio/diagrammeFR.png?url"},{subtitle:"Retour d'expérience et points d'amélioration",paragraph:`Sur certains points, ce projet aura été un réel plaisir à faire. J'ai pu améliorer mes compétences en VueJS et découvrir de nouvelles choses comme les fichier YAML. Je suis aussi content d'avoir pu implémenter de la logique dans le site et ne donc pas faire que du front-end. 
Et justement, au sujet du front-end, ce sera le seul point négatif de ce projet. Que ce soit sur mon ressenti du développement ou bien sur le résultat concret, ça aura été ma bête noire. J'ai essayé de m'aider en me basant sur d'autres portfolios et templates trouvés sur le web mais mes compétences en front-end sont assez limités ce qui fait que mon site n'est pas à la hauteur de mes atteintes. 

Cependant, au niveau des fonctionnalités et de l'organisation du code, je suis satisfait de ce que j'ai pu faire. Grâce à cette organisation, je pourrais facilement maintenir ce site et l'améliorer au fur et à mesure. Je compte justement : 
 - Améliorer le caroussel
 - Afficher plus prorement la liste de projets (avec des filtres)
 - Gérer le formulaire de contact pour la version du site déployé

Retrouvez le projet sur GitHub :
<a class="textLink" href="https://github.com/Bigdil25007/portfolio" target="_blank" rel="noopener noreferrer">https://github.com/Bigdil25007/portfolio</a>
`,image:""}],competences:[{techniques:[{skill:"VueJS",value:90},{skill:"YAML",value:70},{skill:"Vite",value:80}]},{concepts:[{skill:"Modèle MVC",value:90},{skill:"Importation dynamique de composants",value:85},{skill:"Optimisation du SEO",value:80}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]},en:{title:"Portfolio",description:"Personal website made with VueJS",sections:[{subtitle:"Context",paragraph:`Since I wanted to highlight myself on the web, I decided to create my own website to showcase my projects and profile.

Initially, I created a first version using PHP, but when I started separating the HTML content into different files, I realized it was very complicated to manage (especially since it meant at least one CSS and JS file per HTML file). I then set this project aside until I discovered VueJS. 
The whole component logic was perfectly suited to what I wanted to do. So, I decided to start over using this framework.

To assist me during local development, I used **Vite**, which offers several advantages such as :
 - Automatic reloading on each code modification
 - Defining aliases so that file paths are shorter and more maintainable over time.
 - Automatic file compression during deployment
`,image:"/projets/portfolio/viteXvue.png?url"},{subtitle:"Project Organization",paragraph:`Working with VueJS was much simpler since with the [<template>], [<script setup>], and [<style scoped>] tags, everything that defines the component is grouped into a single file. The only other dependencies come from the parent component.
That's why I decided from the beginning to separate my components into 3 categories :
 - page
 - section 
 - utility
The further down the list, the smaller and more reusable the components are by those from a higher category. Keeping this hierarchy in mind allowed me to better visualize the dependencies between my components and organize them more effectively.

Since my site has multiple pages and I wanted to optimize component loading, I used **vue-router** and its dynamic import feature. This allowed me to load only the necessary components for the current page.
Additionally, with vue-router, I could define routes with dynamic parameters. For example, the "/projects" route can have an "id" parameter which allows either displaying a list of all projects (if id is empty) or displaying the details of a particular project.
(Another example is present in the next section...)
`,image:"/projets/portfolio/vue-router.png?url"},{subtitle:"Technical Point: Language management",paragraph:`During development, an idea came to mind: to offer the site in both French and English ! 
I had to think about the best approach since I could either use extensions like vue-i18n or create my own translation files. 

I ultimately preferred to create my own system because using vue-i18n isn't the simplest, and I already had in mind to separate the text content from the layout of the components. After some thought, I decided to use **YAML** files to store the text content in all available languages. I preferred this format over JSON because it is more readable and easier to write.
Once the files were created, I had to add a system to the major components (page and section) so that they could be aware of the route they are on, thanks to **vue-router**, and therefore know which content to fetch from the YAML files.

Finally, I added a button to switch languages. Since the language is "stored" in the route, it was simply a matter of retrieving the current path and switching (FR -> EN or EN -> FR) in the first part of the route.
`,image:"/projets/portfolio/diagrammeEN.png?url"},{subtitle:"Feedback and Improvement points",paragraph:`In many ways, this project was a real pleasure to work on. I was able to improve my skills in VueJS and discover new things like YAML files. I am also happy to have been able to implement logic in the site, not just front-end development. 
Speaking of the front-end, that will be the only negative point of this project. Whether it's my experience during development or the actual result, it has been my pet peeve. I tried to help myself by basing my work on other portfolios and templates found on the web, but my front-end skills are quite limited, which means my site isn't up to my expectations. 

However, in terms of functionality and code organization, I am satisfied with what I was able to achieve. Thanks to this organization, I can easily maintain and improve this site over time. I plan to : 
 - Improve the carousel
 - Display the project list more neatly (with filters)
 - Manage the contact form for the deployed version of the site

Find the project on Github :
<a class="textLink" href="https://github.com/Bigdil25007/portfolio" target="_blank" rel="noopener noreferrer">https://github.com/Bigdil25007/portfolio</a>
`,image:""}],competences:[{technicals:[{skill:"VueJS",value:90},{skill:"YAML",value:70},{skill:"Vite",value:80}]},{concepts:[{skill:"MVC Template",value:90},{skill:"Dynamic Component Import",value:85},{skill:"SEO Optimization",value:80}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]}};export{e as default};
