var http = require("http");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

friends = require("../FriendFinder/app/friends.js");


var app = express();

var PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    
     console.log("App listening on PORT " + PORT);
    
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../FriendFinder/public/home.html"));
});

app.get("/survey", function(req, res){
  res.sendFile(path.join(__dirname, "../FriendFinder/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});
