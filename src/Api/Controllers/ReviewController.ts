import {
    controller,
    httpGet,
    httpDelete,
    httpPost,
    interfaces,
    requestBody,
    requestParam,
} from 'inversify-express-utils';
import {inject}from 'inversify';
import {INVERSIFY_TYPES} from "./../../Config";
import {ResponseDto} from "./../Dtos/ResponseDto";
import {ReviewDto} from './../Dtos/ReviewDto';
import { ErrorDto } from '../Dtos/ErrorDto';

@controller('/api/review')
export class ReviewController implements interfaces.Controller{
    constructor(@inject(INVERSIFY_TYPES.ReviewService)private ReviewService: IReviewService){
    }

    @httpGet("/")
    public async getReviews(): Promise<ResponseDto>{
        let reviews = await this.ReviewService.getAllReviews();
        let mappedReviews = reviews.map((reviews) => {
            return new ReviewDto(reviews);
        });
        return new ResponseDto([],{
            reviews: mappedReviews
        })
    }

    @httpGet("/:id")
    public async getReviewsById(@requestParam("id") id:number): Promise<ResponseDto>{
        let reviews = await this.ReviewService.getById(id);
        return new ResponseDto([],{
            reviews: reviews
        })
    } 

    @httpPost("/")
    public async registerReview(@requestBody() newReview: IReview):Promise<ResponseDto>{
        try{
            await this.ReviewService.addReview(newReview);
            return new ResponseDto([], {
                message: "Review agregaada"
            })
        } catch (error) {
            return new ResponseDto([new ErrorDto("Modal", error.message)], {})
        }
    }

    @httpPost("/updateReview/:id")
    public async updateReview(@requestParam("id") id: number,@requestBody() newReview: IReview):Promise<ResponseDto>{
        await this.ReviewService.updateReview(id,newReview);
        return new ResponseDto([],{
            message: "Review modificada"
        })
    }

    @httpDelete("/id")
    public async deleteReview(@requestParam("id") id: number):Promise<ResponseDto>{
        await this.ReviewService.deleteReview(id);
        return new ResponseDto([],{
            message: "Review eliminada"
        })
    }
}