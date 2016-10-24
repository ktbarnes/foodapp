var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use('/node_modules', express.static(__dirname+"/../node_modules"))
  app.use('/', express.static(__dirname + "/../public"));
}