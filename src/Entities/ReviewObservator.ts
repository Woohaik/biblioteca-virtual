import { MailService } from "./../App/Services/MailService";

export class ReviewObservator implements Observer {
    constructor(private email: string, private letra: string, private letras: string){

    }

    update(template: EmailTemplate): void{
        this.sendMail(template);
    }

    async sendMail(template: EmailTemplate): Promise<void>{
        await MailService.sendEmail(this.email, template);
        console.log(this.email);
        console.log(this.letra);
        console.log(this.letras);
    }
}