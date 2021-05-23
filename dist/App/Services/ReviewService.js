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
exports.ReviewService = void 0;
const inversify_1 = require("inversify");
const Config_1 = require("./../../Config");
const MailService_1 = require("./MailService");
const confirmReviewTemplate_1 = require("../utils/email/confirmReviewTemplate");
const ReviewObservator_1 = require("./../../Entities/ReviewObservator");
let ReviewService = class ReviewService {
    constructor(ReviewRepository) {
        this.ReviewRepository = ReviewRepository;
        this.observer = [];
        this.observerEmail = "martha.marquez@alumnos.uneatlantico.es";
        this.registerObserver(new ReviewObservator_1.ReviewObservator(this.observerEmail, "Esto es una prueba", "Me gustó"));
    }
    getAllReviews() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ReviewRepository.getAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ReviewRepository.getById(id);
        });
    }
    updateReview(id, review) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ReviewRepository.edit(id, review);
        });
    }
    addReview(newReview) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastReview = yield this.ReviewRepository.getById(newReview.ID);
            if (lastReview) {
                throw new Error("ERROR. Esa review ya existe");
            }
            yield this.ReviewRepository.save(newReview);
            yield MailService_1.MailService.sendEmail(this.observerEmail, confirmReviewTemplate_1.confirmReviewTemplate(newReview));
        });
    }
    deleteReview(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ReviewRepository.delete(id);
        });
    }
    registerObserver(observer) {
        this.observer.push(observer);
    }
    removeObserver(observer) {
        this.observer.splice(this.observer.findIndex(ob => ob === observer), 1);
    }
    notifyObserver(base) {
        this.observer.forEach(observers => observers.update(base));
    }
};
ReviewService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(Config_1.INVERSIFY_TYPES.ReviewRepository)),
    __metadata("design:paramtypes", [Object])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=ReviewService.js.map