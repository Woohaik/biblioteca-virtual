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
exports.UserService = void 0;
const inversify_1 = require("inversify");
const Config_1 = require("./../../Config");
const utils_1 = require("./../utils");
const MailService_1 = require("./MailService");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getAll();
        });
    }
    getById() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    confirmEmail(emailId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(emailId);
            let toConfirmEmail = yield this.userRepository.getConfirmationEmail(emailId);
            if (toConfirmEmail) {
                let user = yield this.userRepository.getByEmail(toConfirmEmail);
                if (user) {
                    console.log("wardame");
                    yield this.userRepository.confirmEmail(user.ID, emailId);
                }
            }
        });
    }
    registerUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            newUser.Password = yield utils_1.hashPassword(newUser.Password);
            yield this.userRepository.save(newUser);
            let confirmEmailId = utils_1.generateUniqueId();
            yield this.userRepository.saveEmailValidate(confirmEmailId, newUser.Email);
            yield new MailService_1.MailService().sendEmail(newUser.Email, utils_1.confirmEmailTemplate(confirmEmailId));
        });
    }
    registerObserver(observer) {
        this.observadores.push(observer);
    }
    removeObserver(observer) {
        this.observadores.splice(this.observadores.findIndex(ob => ob === observer), 1);
    }
    notifyObserver() {
        this.observadores.forEach(observers => observers.update());
    }
};
UserService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(Config_1.INVERSIFY_TYPES.UserRepository)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map