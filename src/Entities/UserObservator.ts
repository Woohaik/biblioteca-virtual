import { MailService } from "./../App/Services/MailService";

export class UserObservator implements Observer {

    constructor(private email: string, private name: string, private rol: string) { }

    update(template: EmailTemplate): void {
        this.sendMail(template);
    }

    async sendMail(template: EmailTemplate): Promise<void> {
        await MailService.sendEmail(this.email, template);
        console.log(this.email);
        console.log(this.name);
        console.log(this.rol);
    }
}