import { Router } from "express";
import Usercontroller from "./controllers/UserController";

const routes = Router();

routes.get("/users", (req, res) => {
  return res.send("Hello World");
});

export default routes;
