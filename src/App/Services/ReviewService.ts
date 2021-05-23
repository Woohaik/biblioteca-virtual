import {inject,injectable} from 'inversify';
import {INVERSIFY_TYPES} from './../../Config';
import { MailService } from "./MailService";
import { confirmReviewTemplate } from '../utils/email/confirmReviewTemplate';
import { ReviewObservator } from "./../../Entities/ReviewObservator";

@injectable()
export class ReviewService implements IReviewService, Subject{
    private observer: Observer[] = [];
    private observerEmail = "martha.marquez@alumnos.uneatlantico.es"; //Correo del gestor
    constructor(@inject(INVERSIFY_TYPES.ReviewRepository) private ReviewRepository : IReviewRepository) {
        this.registerObserver(new ReviewObservator(this.observerEmail,"Esto es una prueba","Me gustó"));
    }

    async getAllReviews(): Promise<IReview[]>{
        return await this.ReviewRepository.getAll();
    }

    async getById(id: number): Promise<IReview | undefined> {
        return await this.ReviewRepository.getById(id);
    }

    async updateReview(id:number, review: IReview): Promise<void>{
        await this.ReviewRepository.edit(id, review);
    }
    
    async addReview(newReview: IReview): Promise<void>{
        const lastReview = await this.ReviewRepository.getById(newReview.ID);
        if(lastReview){
            throw new Error("ERROR. Esa review ya existe");
        }
        await this.ReviewRepository.save(newReview);

        await MailService.sendEmail(this.observerEmail, confirmReviewTemplate(newReview));
    }
    async deleteReview(id: number): Promise<void>{
        await this.ReviewRepository.delete(id);
    }


    //Observer 
    registerObserver(observer: Observer): void{
        this.observer.push(observer);
    }

    removeObserver(observer: Observer): void{
        this.observer.splice(this.observer.findIndex(ob => ob === observer), 1);
    }

    notifyObserver(base: EmailTemplate) : void{
        this.observer.forEach(observers => observers.update(base));
    }
}