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

// app.post('/pics', function(req, res) {
//   console.log('hello', req.busboy);
//   request.post({
//     headers: {'Authorization':'Client-ID 2f42bf48eb1d7bd'},
//     url:'https://api.imgur.com/3/image',
//     data: {'image': req.busboy}
//   }, function(error, response) {
//     console.log('inside callback',response.body);
//     res.send(response.data);
//     res.end();
//   });
// });

var firebase = require("firebase");

// var gcloud = require("google-cloud");
// var storage = gcloud.storage;
// var gcs = storage({projectId: 'foodapp-8d3bd'});
// var bucket = gcs.bucket('gs://foodapp-8d3bd.appspot.com/Images');

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

app.put('/places', function(req,res){
  console.log('inside post',req.body);
  ref.set({
    id: req.body.id,
    address: req.body.address,
    url: req.body.url,
    likes: 0
  });
});

app.put('/places/:id', function(req,res) {
  console.log('updating number of likes',req.body)
  ref.update({
    likes: req.body.likes
  })
});

app.get('/places', function(req,res){
  ref.once("value", function(snapshot) {
    res.json(snapshot.val());
  });
})

app.listen(process.env.PORT || 7777)