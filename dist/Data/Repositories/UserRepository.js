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
exports.UserRepository = void 0;
const inversify_1 = require("inversify");
const typeorm_1 = require("typeorm");
const Usuario_1 = require("../../Entities/Usuario");
const ConfirmedEmail_1 = require("../../Entities/ConfirmedEmail");
let UserRepository = class UserRepository {
    constructor() {
        const conn = typeorm_1.getConnection();
        this.userConnection = conn.getRepository(Usuario_1.Usuario);
        this.emailConnection = conn.getRepository(ConfirmedEmail_1.ConfirmEmails);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userConnection.find();
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userConnection.findOne(undefined, { where: { Email: email } });
        });
    }
    edit(id, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id, entity);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userConnection.findOne(id);
        });
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userConnection.insert({
                Email: entity.Email,
                Name: entity.Name,
                Password: entity.Password,
                Username: entity.Username,
                ConfirmedEmail: false,
                LastName: entity.LastName,
                RefreshToken: ""
            });
        });
    }
    getConfirmationEmail(confirmMailId) {
        return __awaiter(this, void 0, void 0, function* () {
            let encontrado = yield this.emailConnection.findOne(confirmMailId);
            return encontrado === null || encontrado === void 0 ? void 0 : encontrado.email;
        });
    }
    saveEmailValidate(id, email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.emailConnection.insert({
                ID: id,
                email
            });
        });
    }
    confirmEmail(userId, confirmMailId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.emailConnection.delete({ ID: confirmMailId });
            yield this.userConnection.update({ ID: userId }, { ConfirmedEmail: true });
        });
    }
};
UserRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map