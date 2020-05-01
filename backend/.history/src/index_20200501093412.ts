import express from "express";

const app = express();

const username = "getUsername()";

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(3333);
