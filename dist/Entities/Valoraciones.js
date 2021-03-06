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
exports.Valoraciones = void 0;
const typeorm_1 = require("typeorm");
const Libro_1 = require("./Libro");
const Usuario_1 = require("./Usuario");
let Valoraciones = class Valoraciones {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Valoraciones.prototype, "ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Valoraciones.prototype, "UserId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Usuario_1.Usuario, (usuario) => usuario.ID, {
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: "UserId" }),
    __metadata("design:type", Usuario_1.Usuario)
], Valoraciones.prototype, "User", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Valoraciones.prototype, "BookId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Libro_1.Libro, (libro) => libro.ID, {
        onDelete: 'CASCADE'
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Valoraciones.prototype, "Rate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Valoraciones.prototype, "Commentary", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Valoraciones.prototype, "CreatedAt", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: "BookId" }),
    __metadata("design:type", Libro_1.Libro)
], Valoraciones.prototype, "Book", void 0);
Valoraciones = __decorate([
    typeorm_1.Entity()
], Valoraciones);
exports.Valoraciones = Valoraciones;
//# sourceMappingURL=Valoraciones.js.map