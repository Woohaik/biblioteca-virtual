export class ReviewDto implements IReviewDto {
    ID:number;
    Rate:number;
    Commentary:string;
    BookId:number | undefined;
    UserId:number | undefined;
    CreatedAt:Date;
    constructor(Review: IReview){
        this.ID = Review.ID;
        this.Rate = Review.Rate;
        this.Commentary = Review.Commentary;
        this.BookId = Review.BookId;
        this.UserId = Review.UserId;
        this.CreatedAt = Review.CreatedAt;
    }
}