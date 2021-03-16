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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Usuario.prototype, "ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "Name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "LastName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "Username", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "Email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "Password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Usuario.prototype, "ConfirmedEmail", void 0);
__decorate([
    typeorm_1.Column({ default: "user" }),
    __metadata("design:type", String)
], Usuario.prototype, "Rol", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Usuario.prototype, "CreatedAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Usuario.prototype, "UpdatedAt", void 0);
Usuario = __decorate([
    typeorm_1.Entity()
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map