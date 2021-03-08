const database = require('./database');

const dataMapper = {

  getAllCards: function (callback) {
    const query = {
      text : `SELECT * FROM "card"`
    };
    database.query(query, callback);
  },
  getOneCard: function (id, callback) {
    const query = {
      text : `SELECT * FROM "card" WHERE id = ${id}`
    };
    database.query(query, callback);
  },
  getCardByElement: function (element, callback) {
    
    if (element == 'null') {
      const query = {
        text : `SELECT * FROM "card" WHERE element IS NULL`
      };
      console.log('hello cest null', query);
      database.query(query, callback);
    }else {
      const query = {
        text : `SELECT * FROM "card" WHERE element = '${element}'`
      };
      database.query(query, callback);
    };
  }
};


module.exports = dataMapper;