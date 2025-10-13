// import express from "express";
// import cors from "cors";
// import mysql from "mysql2";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "", 
//   database: "cgti",
// });

// db.connect((err) => {
//   if (err) console.error("DB Error:", err);
//   else console.log("Connected to MySQL database");
// });

// app.post("/contact", (req, res) => {
//   const { name, email, subject, message } = req.body;

//   if (!name || !email || !message)
//     return res.status(400).json({ success: false, error: "All fields required" });

//   const sql =
//     "INSERT INTO contact_messages (full_name, email, subject, message) VALUES (?, ?, ?, ?)";
//   db.query(sql, [name, email, subject, message], (err) => {
//     if (err) {
//       console.error("MySQL Error:", err);
//       return res.status(500).json({ success: false, error: "Database error" });
//     }
//     res.json({ success: true, message: "Message saved successfully" });
//   });
// });

// app.listen(5000, () => console.log("Server running on port 5000"));

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

// Contact Us route
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

// Demo Booking route
app.post("/demo", (req, res) => {
  const { name, email, contact, location, education, message } = req.body;

  if (!name || !email || !contact)
    return res.status(400).json({ success: false, error: "Name, Email, Contact required" });

  const sql =
    "INSERT INTO demo_requests (name, email, contact_no, location, education, message) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [name, email, contact, location, education, message], (err) => {
    if (err) {
      console.error("MySQL Error:", err);
      return res.status(500).json({ success: false, error: "Database error" });
    }
    res.json({ success: true, message: "Demo booked successfully" });
  });
});


app.listen(5000, () => console.log("Server running on port 5000"));

