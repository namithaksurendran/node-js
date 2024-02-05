import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "namitha",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/persons", (req, res) => {
  const q = "SELECT * FROM persons";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/persons", (req, res) => {
  const q = "INSERT INTO persons (`Personid`, `Name`, `Place`, `District`) VALUES (?)";

  const values = [
    req.body.Personid,
    req.body.Name,
    req.body.Place,
    req.body.District,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/persons/:Personid", (req, res) => {
  
  const Personid = req.params.id;
  const q = " DELETE FROM persons WHERE Personid = ? ";

  db.query(q, [Personid], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/persons/:Personid", (req, res) => {
  const Personid = req.params.id;
  const q = "UPDATE persons SET `Personid`= ?, `Name`= ?, `Place`= ?, `District`= ? WHERE Personid = ?";

  const values = [
    req.body.Personid,
    req.body.Name,
    req.body.price,
    req.body.District,
  ];

  db.query(q, [...values,Personid], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(2000, () => {
  console.log("Connected to backend at port 2000.");
});