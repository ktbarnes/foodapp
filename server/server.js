var express = require('express');
var bodyParser = ('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + "../public"));

<<<<<<< HEAD

var firebase = require("firebase");

// Initialize the app with no authentication
firebase.initializeApp({
  databaseURL: "https://databaseName.firebaseio.com"
});

// The app only has access to public data as defined in the Security Rules
var db = firebase.database();
var ref = db.ref("/Places");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});
app.listen(process.env.PORT || 7777)
=======
app.listen(process.env.PORT || 7777);
>>>>>>> remove merge conflict messages
