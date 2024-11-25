const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "fhoilsjhr3i9j3",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        return res.send(err);
      }
      if (results.length === 0) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            return res.send(err);
          }
          db.query(
            "INSERT INTO usuarios (email, password) VALUES (?, ?)",
            [email, hash],
            (err, result) => {
              if (err) {
                return res.send(err);
              }
              return res.send({ msg: "Cadastrado com sucesso" });
            }
          );
        });
      } else {
        return res.send({ msg: "Email já cadastrado" });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        return res.send(err);
      }
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, (erro, result) => {
          if (result) {
            res.send("Usuário logado com sucesso");
          } else {
            res.send("Senha está incorreta");
          }
        });
      } else {
        return res.send({ msg: "Conta não encontrada" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
