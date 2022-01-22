"use strict";

const express = require("express");
const path = require("path");

// Constants
const PORT = 4200;

// App
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public"))); //for images

//routes
app.get("/", (req, res) => {
    res.render("index.pug");
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});

//jodmE4QR
//Dylan B
