import nodemailer from "nodemailer";

import { CONFIG } from "./../../Config";

export abstract class MailService {
    public static async sendEmail(to: string, bodyFunction: any) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            auth: {
                user: CONFIG.EMAIL.username,
                pass: CONFIG.EMAIL.password,
            },
        });
        const info = await transporter.sendMail({
            from: '"Bibliotech 👻" <foo@example.com>', // sender address
            to, // list of receivers
            ...bodyFunction
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
}