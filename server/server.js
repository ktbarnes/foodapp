var express = require('express');
var bodyParser = ('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + "../public"));

app.listen(process.env.PORT || 7777)
