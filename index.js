const express = require("express");
const app = express();
const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: DB_HOST,
  password: DB_PASSWORD,
  user: "avnadmin",
  database: "defaultdb",
  port: DB_PORT, 
});


app.get("/", function(request, response){
  conn.query("SELECT * FROM your_table_name", function (err, results, fields) {
    if (err) {
      response.status(500).send(err.toString());
    } else {
      response.json(results);
    }
  });

});

app.listen(3000);