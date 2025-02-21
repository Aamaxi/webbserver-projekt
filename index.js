const express = require("express");
const app = express();

const conn = mysql.createConnection({
  host: DB_HOST,
  password: DB_PASSWORD,
  user: "avnadmin",
  database: "defaultdb",
  port: DB_PORT, 
  ssl: {}
});


app.get("/", function(request, response){
  response.send("Hello, world!");

});

app.listen(3000);