import express from "express";

const app = express();

app.get(3, (req, res) => {
  return res.send("Hello World");
});

app.listen(3333);
