import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "cgti",
});

db.connect((err) => {
  if (err) console.error("DB Error:", err);
  else console.log("Connected to MySQL database");
});

app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ success: false, error: "All fields required" });

  const sql =
    "INSERT INTO contact_messages (full_name, email, subject, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, subject, message], (err) => {
    if (err) {
      console.error("MySQL Error:", err);
      return res.status(500).json({ success: false, error: "Database error" });
    }
    res.json({ success: true, message: "Message saved successfully" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
