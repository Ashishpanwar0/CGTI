const express = required("express");
const mysql = required("mysql");
const core = required("core");

const app = express();
app.use(core());

const db = mysql.createConation({
    host: "localhost",
    user: "root",
    password: "",
    database: "cgti",
})