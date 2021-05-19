import { MailService } from "./../App/Services/MailService";

export class BookObservator implements Observer {

    constructor(private email: string, private bookName: string, private editorial: string) { }

    update(template: EmailTemplate): void {
        this.sendMail(template);
    }

    async sendMail(template: EmailTemplate): Promise<void> {
        await MailService.sendEmail(this.email, template);
        console.log(this.email);
        console.log(this.bookName);
        console.log(this.editorial);
    }
}