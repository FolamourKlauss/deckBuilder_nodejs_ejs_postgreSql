const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: (req, res) => {
    dataMapper.getAllCards( (err, results) => {
      if(err) {
        console.error(err);
      } 
      res.render('cardList', {
        cards: results.rows,
        title: 'Liste des cartes'
      })
    });
  },
  cardDetail: (req, res) => {
    const id = req.params.id;
    console.log(id);
    dataMapper.getOneCard( id, (err, results) => {
      if(err) {
        console.error(err);
      }
      res.render('cardDetail', {
        card: results.rows[0],
      });
    });
  }
};

module.exports = mainController;