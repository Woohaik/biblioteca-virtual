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
exports.UserController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const constants_1 = require("../../Config/constants");
const ResponseDto_1 = require("./../Dtos/ResponseDto");
const utils_1 = require("../utils");
const UserDto_1 = require("../Dtos/UserDto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            let allUsers = yield this.userService.getAllUser();
            let users = allUsers.map((user) => new UserDto_1.UserDto(user));
            return new ResponseDto_1.ResponseDto([], {
                users
            });
        });
    }
    confirmEmail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userService.confirmEmail(id);
            return "Email Confirmado";
        });
    }
    register(_, newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let isValid = yield utils_1.validateUser(newUser);
            if (isValid.failed)
                return new ResponseDto_1.ResponseDto(isValid.errors, {});
            yield this.userService.registerUser(newUser);
            return new ResponseDto_1.ResponseDto([], {
                message: "Usuario Registrado"
            });
        });
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    inversify_express_utils_1.httpGet("/confirm-email/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "confirmEmail", null);
__decorate([
    inversify_express_utils_1.httpPost("/"),
    __param(0, inversify_express_utils_1.response()),
    __param(1, inversify_express_utils_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
UserController = __decorate([
    inversify_express_utils_1.controller('/api/user'),
    __param(0, inversify_1.inject(constants_1.TYPES.UserService)),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map