var express = require('express');
var request = require('request');
var app = express();

require('./middleware.js')(app, express);

app.get('/', function(req,res) {
  res.sendFile('index.html');
});

app.get('/node_modules', function(req,res) {
  console.log('line 12 in server',req.body);
  res.sendFile(req.body.url);
});

var firebase = require("firebase");

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

app.post('/places', function(req,res){
  console.log('inside post',req.body);
  var now = new Date().valueOf();
  var filename = req.body.filename.split('.')[0];
  var child = now + filename;
  ref.child(child).set({
    id: req.body.id,
    name: req.body.name,
    address: req.body.address,
    url: req.body.url,
    likes: 0
  })
  .then(function(response) {
    res.status(200).json({databaseID: child});
  })
  .catch(function(error) {
    console.error(error);
  });
});

app.put('/places', function(req,res) {
  console.log('updating number of likes',req.body)
  ref.child(req.body.databaseID).update({
    likes: req.body.likes
  })
  .then(function(response) {
    res.sendStatus(200);
  })
  .catch(function(error) {
    console.error(error);
  });
});

app.get('/places', function(req,res){
  ref.once("value", function(snapshot) {
    res.json(snapshot.val());
  });
});

// var locRef = db.ref('/Location');

// app.post('/location', function(req,res){
//   locRef.set({
//     address: req.body.address,
//     location: req.body.location
//   })
//   .then(res.status(200))
//   .catch(function(error) {
//     console.error(error)
//   });
// });

// app.get('/location', function(req,res){
//   locRef.once("value", function(snapshot) {
//     res.json(snapshot.val());
//   });
// });

app.listen(process.env.PORT || 7777)