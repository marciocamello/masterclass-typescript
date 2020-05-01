import { Request, Response } from "express";

const users = [{ name: "Marcio", email: "marciocamello@outlook.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
};
