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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const express_1 = __importDefault(require("express"));
const Config_1 = require("../../Config");
const ResponseDto_1 = require("./../Dtos/ResponseDto");
const utils_1 = require("./../utils");
const UserDto_1 = require("./../Dtos/UserDto");
const ErrorDto_1 = require("../Dtos/ErrorDto");
const jwt_1 = require("../utils/jwt/jwt");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userService.deleteUser(id);
            return new ResponseDto_1.ResponseDto([], {
                message: "Usuario Eliminado"
            });
        });
    }
    loginUser(res, elem) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.loginUser(elem.Email, elem.Password);
                const options = {
                    maxAge: 1000 * 60 * 15,
                    httpOnly: true,
                    sameSite: "strict"
                };
                const token = jwt_1.loginUserToken({ ID: user.ID, ROLE: user.Rol });
                res.cookie("clgn", token, options);
                const newUser = new UserDto_1.UserDto(user);
                return new ResponseDto_1.ResponseDto([], { user: newUser });
            }
            catch (error) {
                return new ResponseDto_1.ResponseDto([new ErrorDto_1.ErrorDto("Modal", error.message)], {});
            }
        });
    }
    authUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.cookies["clgn"];
                if (token) {
                    const decodedToken = jwt_1.decodeToken(token);
                    decodedToken.ID;
                    const user = yield this.userService.getById(decodedToken.ID || -1);
                    return new ResponseDto_1.ResponseDto([], { user });
                }
                else {
                    return new ResponseDto_1.ResponseDto([new ErrorDto_1.ErrorDto("Modal", "Error al autenticar!")], {});
                }
            }
            catch (error) {
                return new ResponseDto_1.ResponseDto([new ErrorDto_1.ErrorDto("Modal", error.message)], {});
            }
        });
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
            try {
                let isValid = yield utils_1.validateUser(newUser);
                if (isValid.failed)
                    return new ResponseDto_1.ResponseDto(isValid.errors, {});
                yield this.userService.registerUser(newUser);
                return new ResponseDto_1.ResponseDto([], {
                    message: "Usuario Registrado"
                });
            }
            catch (error) {
                return new ResponseDto_1.ResponseDto([new ErrorDto_1.ErrorDto("Modal", error.message)], {});
            }
        });
    }
};
__decorate([
    inversify_express_utils_1.httpDelete("/:id"),
    __param(0, inversify_express_utils_1.requestParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    inversify_express_utils_1.httpPost("/login"),
    __param(0, inversify_express_utils_1.response()), __param(1, inversify_express_utils_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
__decorate([
    inversify_express_utils_1.httpGet("/auth"),
    __param(0, inversify_express_utils_1.request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "authUser", null);
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
    __param(0, inversify_1.inject(Config_1.INVERSIFY_TYPES.UserService)),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map