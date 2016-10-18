var Sequelize = require('sequelize');
var db = new Sequelize('foodApp', 'root', '');

var Place = db.define('Place', {
   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   name: Sequelize.STRING,
   address: Sequelize.STRING,
   website: Sequelize.STRING,
   rating: Sequelize.INTEGER
   googleID: Sequelize.STRING
});

var Photo = db.define('Photo', {

});

Place.sync();

exports.Place = Place;
