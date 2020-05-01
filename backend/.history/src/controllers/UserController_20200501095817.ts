import { Request, Response } from "express";
import EmailService from '../services/EmailService';

const users = [{ name: "Marcio", email: "marciocamello@outlook.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      name: "Marcio",
      email: "marciocamello@outlook.com"
    }, {
      subject: "Bem vindo ao sistema",
      body: "Seja bem vindo"
    });
  }
};
