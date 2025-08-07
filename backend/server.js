const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json("Error");
        if (data.length > 0){
            return res.json("Login succssefully")
        } 
        else {
            return res.json("No record")
        }

    })
})





app.post('/signup', (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const sql = "INSERT INTO signup (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
  const values = [firstname, lastname, email, password];

  db.query(sql, values, 
    (err, result) => {
    if (result) {
      res.send(result);
    }
    else{
      return res.json("Error inserting data" );
    } 
    
  });
});


app.listen(8081, () => {
    console.log("Listening...");
});
