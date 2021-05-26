import { injectable } from "inversify";
import {getConnection,Repository} from "typeorm";
import { Valoraciones } from "../../Entities/Valoraciones"

@injectable()
export class ReviewRepository implements IReviewRepository{
    private reviewConnection : Repository<Valoraciones>;

    constructor(){
        const constructor = getConnection();
        this.reviewConnection = constructor.getRepository(Valoraciones);
    }

    async save(entity : IReview): Promise<void> {
        console.log(entity);

        await this.reviewConnection.insert({
            Rate : entity.Rate,
            UserId: entity.UserId,
            BookId: entity.BookId,
            Commentary: entity.Commentary,
            CreatedAt: entity.CreatedAt
        });
    }
    async getAll(): Promise<IReview[]>{
        return await this.reviewConnection.find();
    }

    async getById(id:number) :Promise<IReview |undefined>{
        return await this.reviewConnection.findOne(id);
    }

    async edit(id: number,entity: IReview): Promise<void>{
        console.log(id);

        await this.reviewConnection.update(id,{
            Rate : entity.Rate,
            UserId: entity.UserId,
            BookId: entity.BookId,
            Commentary: entity.Commentary,
            CreatedAt: entity.CreatedAt
        });
    }

    async delete(id : number): Promise <void>{
        console.log(id);
        await this.reviewConnection.delete(id);
    }
}