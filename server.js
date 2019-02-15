console.log("nerd out bro")

var express = require("express");
var app = express(); 

app.use(express.static(__dirname + "/views" ));  

app.get("/", function(req, res){
    res.sendFile("index.html"); 
}); 

app.get("/", function(req, res){
    res.sendFile("about.html")
});

app.get("/", function(req, res){
    res.sendFile("contact.html")
});

app.get("/", function(req, res){
    res.sendFile("skills.html")
});


app.listen(3000, function(){
    console.log("you are listening to port 3000")
});