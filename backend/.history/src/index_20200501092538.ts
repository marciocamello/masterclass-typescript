import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello2 World");
});

app.listen(3333);
