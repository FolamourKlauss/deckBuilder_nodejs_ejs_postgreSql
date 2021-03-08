const dataMapper = require('../dataMapper.js');

const deckController = {
    lookAtDeck: (req,res) => {
        const deck = req.session.deck;
        res.render('deck', { deck });
    },
    addCardToDeck: (req, res) => {
        const cardId = parseInt(req.params.id);
        console.log("voici lid de la carte", cardId);
        // avec dajouter une carte dans le deck, on verifie qu'il existe
        if(!req.session.deck) {
          // s'il n'éxiste pas je 'linitialise avec un tableau vide
          req.session.deck = [];
        }
        // je cherche dans le deck si une carte yest déjà (grace à l'id)
        // si on la trouve on la reecupére dans la variable card
        let card = req.session.deck.find(
            (carteDansLeDeck) => carteDansLeDeck.id == cardId
        );
        if (card || req.session.deck.length == 5) {
            console.log('on ne fait rien');
            res.redirect('/deck');
        } else {
            dataMapper.getOneCard(cardId, (err, results) => {
                if (err) {
                    console.error(err);
                } else {
                    //si pas d'erreur on recupere la figurine
                    card = results.rows[0];
                    console.log('cest la carte', card);
                    //jajoute cette carte dans le deck
                    req.session.deck.push(card);
                    console.log('cest le deck', req.session.deck);
                    res.redirect('/deck');
                }
            });
        }
    },

    removeCardToDeck: (req, res) => {
        const cardId = parseInt(req.params.id);
        console.log("voici lid de la carte retire", cardId);
        // avec dajouter une carte dans le deck, on verifie qu'il existe
        if(!req.session.deck) {
          // s'il n'éxiste pas je 'linitialise avec un tableau vide
          req.session.deck = [];
        }
        // je cherche dans le deck si une carte yest déjà (grace à l'id)
        // si on la trouve on la reecupére dans la variable card
        let card = req.session.deck.find(
            (carteDansLeDeck) => carteDansLeDeck.id == cardId
        );
            console.log(card);
        if (card) {
            const cardIndex = req.session.deck.indexOf(card);

            if (cardIndex > -1) {
                req.session.deck.splice(cardIndex, 1);
                
            }
            res.redirect('/deck');
        }
        
    }
};

module.exports = deckController;