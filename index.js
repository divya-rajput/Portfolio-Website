const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const path = require("path");

const app = express();

/*
  All the middlewares
*/
app.use(morgan("tiny"));
app.use(bodyParser.json({ extended: true }));
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!');
});
app.use(express.static(__dirname + '/public'));

/*
  Routing
*/
app.get("/health", (req, res) => {
  res.json({ "status": "ok" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

app.use("*", (req, res) => {
  res.redirect("/");
});

/*
  Port setup
*/
let PORT = 3000;
if (process.env.PORT != "") {
  PORT = parseInt(process.env.PORT);
}

app.listen(PORT, err => {
  if (err) {
    console.error("Could not start server: ", err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
