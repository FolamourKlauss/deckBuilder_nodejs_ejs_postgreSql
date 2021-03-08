# Triple Triad Deck Builder

Triple Triad est un jeu de plateau à base de cartes, inventé par SquareEnix et présent dans Final Fantasy 8.

Les règles sont plutôt simples, mais ce n'est pas ce qui nous intéresse aujourd'hui !

On a récupéré toutes les données relatives aux cartes ainsi que leurs visuels. Et on voudrait construire une application pour gérer nos cartes, chercher des cartes selons plusieurs critères, et même gérer nos decks (= paquets de 5 cartes différentes).


## Étape 1 : Détail d'une carte

Quand on clique sur carte dans la page d'accueil, on veut arriver sur la page "détail de la carte".


## Étape 2 : Recherche




## Étape 3 : Construire un deck

On veut pouvoir construire un deck de 5 cartes différentes.

Pour ça, on va utiliser les sessions.

Et pour éviter de faire trop d'appels à la base de données, on va directement stocker toutes les données des cartes dans la session (et pas _juste_ les ID).

### 3.1: Activer les sessions


### 3.2 Ajouter une carte au deck

Les liens `[+]`, présents sur toutes les cartes, doivent ajouter la carte au deck de la session.

**NOTE**: Si la carte est déjà présente dans le deck ou que le deck possède déjà 5 cartes, on ne fait rien !

### 3.3 Une page pour visualiser le deck !

Un lien vers la route `/deck` est déjà prévu dans la nav, mais je crois que le stagiaire n'a pas eu le temps de mettre la route en place, ni la view...

### 3.4 Supprimer une carte du deck

Sur la view de l'étape précédente, rajouter des liens pour supprimer chacune des cartes du deck.

