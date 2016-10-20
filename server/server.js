var express = require('express');
var bodyParser = require('body-parser');
var app = express();

require('./middleware.js')(app, express);

app.get('/', function(req,res) {
  res.sendFile('index.html');
});

var firebase = require("firebase");
var gcloud = require("google-cloud");
var storage = gcloud.storage;

var gcs = storage({projectId: 'foodapp-8d3bd'});
var bucket = gcs.bucket('gs://foodapp-8d3bd.appspot.com/Images');

// Initialize the app with no authentication
firebase.initializeApp({
  databaseURL: "https://foodapp-8d3bd.firebaseio.com/"
});

// The app only has access to public data as defined in the Security Rules
var db = firebase.database();
var ref = db.ref("/Places");

ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

app.listen(process.env.PORT || 7777)