export const article = {
  cors: {
    title: 'Configurer CORS sur un Serveur | Les bonne pratiques à avoir',
    content: `# Article à venir...`,
  },
  helmet: {
    title:
      "C'est quoi Helmet ? et comment inplémenter ce dernier dans votre backend pour une meille sécurité",
    content: `# Article à venir...`,
  },
  pourquoiUnServeurWeb: {
    title:
      "Quand et pourquoi on a besoin d'un serveur web | Quelle alternative utilisé quand ce n'est pas le cas",
    meta: `<!-- Titre de la page -->
    <title>Pourquoi un Serveur Web et Quand Peut-on S'en Passer ? | Guide Complet</title>
    
    <!-- Meta Description pour résumer le contenu de l'article (155 à 160 caractères) -->
    <meta name="description" content="Découvrez pourquoi un serveur web est souvent indispensable pour déployer une application, et explorez des alternatives aux serveurs pour certains projets." />
    
    <!-- Meta Keywords pour cibler des mots-clés spécifiques (les mots clés sont moins importants qu'avant, mais cela peut encore aider) -->
    <meta name="keywords" content="serveur web, hébergement, sites statiques, sites dynamiques, Node.js, JavaScript, alternatives au serveur, développement web" />

    <!-- Meta Robots pour indiquer aux moteurs de recherche comment indexer la page -->
    <meta name="robots" content="index, follow" />

    <!-- Meta Author pour l'auteur de l'article -->
    <meta name="author" content="Doni" />

    <!-- Open Graph pour un meilleur partage sur les réseaux sociaux -->
    <meta property="og:title" content="Pourquoi un Serveur Web et Quand Peut-on S'en Passer ? | Guide Complet" />
    <meta property="og:description" content="Découvrez les cas où un serveur web est essentiel pour un projet et explorez des alternatives pour des sites dynamiques sans serveur." />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://donilite.github.io/StoryBook/page.html?pourquoiUnServeurWeb" />
    <meta property="og:image" content="https://donilite.github.io/StoryBook/assets/img/server.jpg" />

    <!-- Twitter Card pour un meilleur affichage sur Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Pourquoi un Serveur Web et Quand Peut-on S'en Passer ? | Guide Complet" />
    <meta name="twitter:description" content="Apprenez l'utilité d'un serveur web et découvrez des alternatives pour des projets spécifiques." />
    <meta name="twitter:image" content="https://donilite.github.io/StoryBook/assets/img/server.jpg" />

    <!-- Canonical Link pour éviter le contenu dupliqué -->
    <link rel="canonical" href="https://donilite.github.io/StoryBook/page.html?pourquoiUnServeurWeb" />`,
    content: `# Pouquoi un serveur web ?

La majorité des sites web présents sur internet fonctionnent sur un **serveur web**.
Il est donc naturel de penser qu'un serveur est indispensable pour déployer une application web. Cependant...  
Ce n'est pas toujours vrai ! Sur le web, il existe également ce qu'on appelle couramment des **sites statiques**. Ces petits programmes défient parfois les concepts de \`client/serveur\` ou \`input/output\`. Contrairement à ce que l’on pourrait croire, ces sites ne sont pas simplement des coquilles vides. En effet, certains d'entre eux implémentent des processus complexes tout en restant simples à déployer. Dans cet article, je vous donne un aperçu de l'utilité d'un serveur et pourquoi certaines applications, bien que non statiques, n'ont pas forcément besoin de serveur pour fonctionner. Nous verrons également des alternatives performantes à l'usage de serveurs.

## Alors c'est quoi un serveur ?

En bref, un serveur est une machine (souvent virtuelle) toujours connectée à internet, qui vous permet d'effectuer n'importe quelle tâche qu'un ordinateur pourrait accomplir, sans nécessiter une intervention humaine constante (grâce à la programmation). Oui, si vous avez bien suivi, votre **ordinateur portable** ou **ordinateur de bureau** peut aussi servir de serveur.  
**Mais alors, pourquoi ne pas utiliser votre propre machine au lieu de payer un hébergeur pour une machine dédiée ?**
La réponse est simple : est-ce que votre ordinateur peut rester allumé 24h/24 et disposer d'une connexion internet stable et rapide en permanence ?
Non, probablement pas.  
C'est pour cette raison qu'on utilise généralement des serveurs hébergés. En plus, les serveurs offrent des possibilités presque infinies pour héberger des sites web et des applications.

## Pourquoi vous n'avez pas forcément besoin d'un serveur alors ?

Dans l'idéal, on aimerait déployer la totalité de nos projets web sur un serveur. Cependant, il y a de nombreux aspects à prendre en compte avant de se lancer dans cette aventure, qui peut parfois sembler un peu périlleuse, comme :

- La mises en place
- La configuration et la sécurisation
- La maintenance
- Les coùts
- L'intégration continue

Cependant, loin de moi l'idée de vous décourager si vous débutez ! Toutes ces étapes peuvent être surmontées avec une bonne **organisation** et une bonne **préparation**.  
Mais sachez que certains projets web n'ont pas toujours besoin d'un serveur classique. Ces derniers ne sont pas pour autant des sites purement \`statiques\`, mais de vrais sites \`dynamiques\`. Par exemple, si vous connaissez des frameworks et bibliothèques JavaScript comme :

- React
- Next
- Vue
- Angular
- Svelte

et bien d'autres, qui tournent sur des environnements \`Node.js\`, vous savez que ces technologies permettent de créer des sites dynamiques. Toutefois, ils restent limités par rapport à un véritable serveur en ce qui concerne des tâches complexes comme la **lecture et l'écriture de fichiers**.  
Si votre projet n’a pas besoin de ces opérations de lecture/écriture ou d'autres fonctionnalités spécifiques, il peut être plus judicieux de réduire les coûts et le temps de développement en choisissant une des solutions mentionnées plus haut. Et si votre projet en a besoin, vous pouvez également opter pour un **service cloud** pour gérer ces aspects.

## Parlons alternative

Il n'est pas toujours nécessaire d'utiliser un serveur web classique. Rien qu'en combinant de l'\`HTML\`, du \`CSS\` et du \`JavaScript\`, vous pouvez accomplir de grandes choses. Par exemple, regardez ce bout de code JavaScript utilisé pour gérer le  **routing** :

\`\`\`javascript
    const link = decodeURI(window.location.href).split['?'](1);
    console.log(link);
    const matched = article[link];
    console.log(matched);
\`\`\`

Ce site n'utilise que ces trois technologies pour implémenter l'ensemble de ses fonctionnalités, et tout fonctionne parfaitement.  
Il est donc important de bien réfléchir avant de se lancer dans le développement d'un serveur. Explorez toutes les options et choisissez celle qui correspond le mieux à vos besoins.

### Vous pouvez utiliser un *worker* / *hook* si vous voulez implémenter des fonctionnalites avancées

Si vous avez besoin d'implémenter des fonctionnalités plus avancées, il est possible de créer un programme spécifique (qui remplit certaines tâches similaires à celles d'un serveur) et de l'héberger en tant que **webhook** sur le service de votre choix. Cela peut être une solution efficace pour effectuer des tâches précises sans avoir à gérer un serveur complet.  
Si vous voulez en savoir plus sur ce sujet, je pourrais rédiger un article pour le démystifier davantage.

### Utiliser un framework frontend ou une bibliotheque pour implémentter une logique plus puissante et mieux adaptée à votre besoin

Si vous codez en JavaScript, vous avez un large choix de solutions pour développer un projet web dynamique. Avec toutes les technologies disponibles sur le marché, vous trouverez certainement celle qui répond à vos besoins. Voici quelques suggestions populaires :

- **React**: une bibliothèque puissante pour créer des interfaces utilisateur.
- **Next**: un framework basé sur React, offrant des fonctionnalités supplémentaires comme le rendu côté serveur.
- **Vue**: une alternative légère à React, facile à apprendre et très performante.
- **Angular**: un framework complet pour des applications complexes.
- **Preact**: une version allégée de React, idéale pour les projets où la performance est une priorité.

Chacune de ces technologies peut vous aider à créer des interfaces web interactives et dynamiques sans nécessiter un backend complexe.

## Avez vous forcément besoin d'apprendre à coder des serveurs ?

Je dirais **OUI**. Pour moi, c'est une compétence fondamentale pour tout développeur qui souhaite être compétitif sur le marché. Créer des interfaces web, c'est bien, mais n'oubliez pas que l'ensemble du web repose sur des serveurs qui communiquent entre eux et échangent des données. Même une application statique a besoin d'un serveur pour être hébergée et répondre aux requêtes.  
Ainsi, maîtriser les bases du développement de serveurs vous permettra de mieux comprendre l'architecture web dans son ensemble et d'être plus autonome dans vos projets.

## Conclusion

N'hésitez pas à me faire part de vos retours sur cet article sur mes différents réseaux !  
Ce document utilise un module \`open source\` que j'ai moi meme écrit: [disponible ici](https://github.com/DoniLite/CSS)  
Merci d'avoir lu et à bientôt !
`,
  },
  lesTachesDeFond: {
    title: 'Un serveur peut servir à executer des taches de fond',
    content: `# Article à venir...`,
  },
};
