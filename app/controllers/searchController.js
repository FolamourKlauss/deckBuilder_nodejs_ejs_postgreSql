const dataMapper = require('../dataMapper.js');

const searchController = {
  searchPage: (req, res) => {
    res.render('search');
  },
  searchCard: (req, res) => {
    //Recuperer lelement du formulaire
    const element = req.query.element;

    dataMapper.getCardByElement(element, (err, results) => {
      if(err) {
        console.error(err);
      };
      res.render('cardSearchList', {cards: results.rows });
    });
    
  }

};

module.exports = searchController;