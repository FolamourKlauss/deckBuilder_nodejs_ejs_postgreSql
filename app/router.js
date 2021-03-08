const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const deckController = require('./controllers/deckController');


router.get('/', mainController.homePage);
router.get('/card/:id', mainController.cardDetail);
router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.searchCard);
router.get('/deck', deckController.lookAtDeck);
router.get('/deck/add/:id', deckController.addCardToDeck);
router.get('/deck/remove/:id', deckController.removeCardToDeck);


module.exports = router;