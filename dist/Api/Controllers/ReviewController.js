"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const Config_1 = require("./../../Config");
const ResponseDto_1 = require("./../Dtos/ResponseDto");
const ReviewDto_1 = require("./../Dtos/ReviewDto");
const ErrorDto_1 = require("../Dtos/ErrorDto");
let ReviewController = class ReviewController {
    constructor(ReviewService) {
        this.ReviewService = ReviewService;
    }
    getReviews() {
        return __awaiter(this, void 0, void 0, function* () {
            let reviews = yield this.ReviewService.getAllReviews();
            let mappedReviews = reviews.map((reviews) => {
                return new ReviewDto_1.ReviewDto(reviews);
            });
            return new ResponseDto_1.ResponseDto([], {
                reviews: mappedReviews
            });
        });
    }
    getReviewsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let reviews = yield this.ReviewService.getById(id);
            return new ResponseDto_1.ResponseDto([], {
                reviews: reviews
            });
        });
    }
    registerReview(newReview) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.ReviewService.addReview(newReview);
                return new ResponseDto_1.ResponseDto([], {
                    message: "Review agregaada"
                });
            }
            catch (error) {
                return new ResponseDto_1.ResponseDto([new ErrorDto_1.ErrorDto("Modal", error.message)], {});
            }
        });
    }
    updateReview(id, newReview) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ReviewService.updateReview(id, newReview);
            return new ResponseDto_1.ResponseDto([], {
                message: "Review modificada"
            });
        });
    }
    deleteReview(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ReviewService.deleteReview(id);
            return new ResponseDto_1.ResponseDto([], {
                message: "Review eliminada"
            });
        });
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getReviews", null);
__decorate([
    inversify_express_utils_1.httpGet("/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getReviewsById", null);
__decorate([
    inversify_express_utils_1.httpPost("/"),
    __param(0, inversify_express_utils_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "registerReview", null);
__decorate([
    inversify_express_utils_1.httpPost("/updateReview/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")), __param(1, inversify_express_utils_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "updateReview", null);
__decorate([
    inversify_express_utils_1.httpDelete("/id"),
    __param(0, inversify_express_utils_1.requestParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "deleteReview", null);
ReviewController = __decorate([
    inversify_express_utils_1.controller('/api/review'),
    __param(0, inversify_1.inject(Config_1.INVERSIFY_TYPES.ReviewService)),
    __metadata("design:paramtypes", [Object])
], ReviewController);
exports.ReviewController = ReviewController;
//# sourceMappingURL=ReviewController.js.map