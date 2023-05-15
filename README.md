
### Livrables: 
 - un readme qui explique comment lancer l'application et les étapes de configuration nécessaires
   npm install :  pour installer toutes les dépendances.
   npm install -g @angular/cli : Pour installer angular cli
   npm: start pour lancer l'application
   npm install firebase @angular/fire --save pour installer les bibliothèques Firebase nécessaires
  
   

   
 - Decrivez la structure de votre application et vos éventuels choix en terme de choix de librairies tierces, d'organisation du code...
       J'ai utiliser firebase cloud firestore pour la base de données.
       Pour la traduction j'ai installer les deux commandes:
            - @ngx-translate/core : C'est le cœur de la bibliothèque de traduction "@ngx-translate" pour Angular. Il fournit des fonctionnalités pour la gestion des langues, la traduction de texte et la configuration de la bibliothèque.
            - @ngx-translate/http-loader : Ce package fournit une méthode pour charger les fichiers de traduction à partir d'une source HTTP. Il est couramment utilisé pour récupérer des fichiers de traduction à partir d'un serveur distant.
    ng generate module mon-nouveau-module : Pour générer un nouveau module
    ng generate service mon-nouveau-service : Pour générer un nouiveau service
    ng generate component mon-nouveau-composant : Pour générer un nouveau composant
    ng generate guard mon-nouveau-garde --implements CanActivate : Pour générer un garde d'authentification










 - Décrivez les fonctionnalités de votre application
    C'est une application qui permet de gérer les cours des étudiants
    Elle affiche le Prénom , adresse email, Cours Etudiants et les frais de l'étudiant.
    J'ai crée une espace d'authentification : login, register , lougout
    Espace administration: pour ajouter modifier et supprimer les données de firebase firestore.
    J'ai fait un bouton la traduction de la langue si l'utilisateur clique sur French les données seront traduites en Français et si l'utilisateur clique sur English les données seront traduite en Angalis.
    J'ai mis en place une logique pour détecter automatiquement la langue préférée de l'utilisateur à partir de son navigateur. Si la langue préférée de l'utilisateur ne correspond à aucune langue prise en charge par l'application, j'utilise le français comme langue par défaut.

