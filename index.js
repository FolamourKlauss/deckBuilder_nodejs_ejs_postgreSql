//Utilisation des variables d'environnement + Intégration du module EXPRESS
const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const session = require('express-session');
//Le port qui va être utilisé
const PORT = process.env.PORT || 3000;

//Utilisation des modules routeur et dataMapper
const router = require('./app/router');
const dataMapper = require('./app/dataMapper');

//Création de notre application express moteur de module ^^
const app = express();

//Notre moteur de Vue ejs
app.set('view engine', 'ejs');

// Ou se trouveront nos Vues ?
app.set('views', 'app/views');

//On definit les options de notre cookie pour 30 jours

app.use(
  session({
    secret: 'Bambou est calme ce matin',
    resave: true,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: (1000*60*60*24*30)
    }
  })
);

// Ou sont les fichiers Statiques
app.use(express.static('public'));

// si le contenu de la requete est urlencoded alors ce middleware va transformer le contenu en objet et implémente le header de la requete
app.use(express.urlencoded({extended: true}));

// Utilisation du routeur a chaque requete
app.use(router);

// Notre application écoutera sur ce port
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
