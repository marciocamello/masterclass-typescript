import express from "express";

const app = express();

function getUsername() {
  return "marcio";
}

const username = getUsername();

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(3333);
