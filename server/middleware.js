var morgan = require('morgan');
var bodyParser = require('body-parser');
// var busboy = require('connect-busboy');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  // app.use('/pics',busboy());
  app.use('/node_modules', express.static(__dirname+"/../node_modules"))
  app.use('/', express.static(__dirname + "/../public"));
}