const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

// app.options('*',cors());
const corsOptions = {
  origin: "*",
  method: ["GET", "PUT", "POST"],
};

app.use(cors(corsOptions));

app.use(express.json());

const db = mysql.createConnection({
  user: process.env.user,
  host: process.env.host,
  password: process.env.password,
  insecureAuth: true,
});

// db.query("ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'");
// db.query("flush privileges");

db.query("CREATE DATABASE IF NOT EXISTS employeeSystem");
db.query("USE employeeSystem");
db.query(
  "CREATE TABLE IF NOT EXISTS employees (id int auto_increment primary key not null, name varchar(255), age int, country varchar(255), position varchar(255), wage int)"
);

app.get("/", (req, res) => {
  console.log("incoming req");
  if (db) {
    res.status(200).send("Hello World MYSQL Connected");
  } else {
    res.status(200).send("Hello World Not Connected");
  }
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.listen(3006, () => {
//   console.log("Yey, your server is running on port 3006");
// });
app.listen(8000, () => {
  console.log("Yey, your server is running on port 8000");
  console.log(`User ${process.env.user} is logged in for db`);
  console.log(`Pass ${process.env.password} is used for db`);
});
