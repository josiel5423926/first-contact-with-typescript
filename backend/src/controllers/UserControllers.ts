import { Request, Response } from "express";
import EmailService from "../services/EmailService";


const users = [
    { name: 'Josiel', email: 'josielsouza.dj@gmail.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Josiel Souza',
                email: 'josielsouza.dj@gmail.com'
            },
            message: {
                subject: 'Bem-Vindo ao sistemas',
                body: 'Seja bem-vindo'
            }
        });
        return res.send();
    }

};
