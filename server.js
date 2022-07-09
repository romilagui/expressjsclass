//jshint esversion:6
//require
const express = require("express");

// A function that represents express module
const app = express();
app.get("/", function(req, res){
  res.send("<h1>Hello,world!</h1>");
})
app.get("/contact", function(req, res){
  res.send("Contact me at: romilagui@gmail.com");
})
app.get("/about", function(req, res){
  res.send("<h3>My name is Romila Rangel</h3><em> I graduated from Engineering School</em></br> Now I write code for fun and for <b>money</b>");
})
app.get("/hobbies", function(req, res){
  res.send("<ul><li>Swimming</li><li>Code</li><li>Reading</li></ul>");
})
app.get("/job", function(req, res){
  res.send("<ul><li>Youtube</li><li>Coding</li><li>Social Media</li></ul>");
})

// use the app with the method called listen. 
// This tells it to listen on a specific port
app.listen(3000, function(){
  console.log("server started on port 3000");
});


