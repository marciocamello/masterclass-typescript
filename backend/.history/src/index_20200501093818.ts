import express from "express";
import routes from "./routes";

const app = express();

app.routes(routes);

app.listen(3333);
