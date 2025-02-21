const mysql = require("mysql2");
const express = require("express");
const app = express();


app.get("/", function(request, response){
  response.send("Hello, world!");

});