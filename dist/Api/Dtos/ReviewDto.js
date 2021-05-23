"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewDto = void 0;
class ReviewDto {
    constructor(Review) {
        this.ID = Review.ID;
        this.Rate = Review.Rate;
        this.Commentary = Review.Commentary;
        this.BookId = Review.BookId;
        this.UserId = Review.UserId;
        this.CreatedAt = Review.CreatedAt;
    }
}
exports.ReviewDto = ReviewDto;
//# sourceMappingURL=ReviewDto.js.map