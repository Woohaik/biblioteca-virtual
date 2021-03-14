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
exports.Libro = void 0;
var typeorm_1 = require("typeorm");
var Libro = (function () {
    function Libro() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Libro.prototype, "ID", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Libro.prototype, "Name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Libro.prototype, "Genre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Libro.prototype, "Author", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Libro.prototype, "Synopsis", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], Libro.prototype, "PublicationYear", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Libro.prototype, "Rate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Libro.prototype, "Editorial", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Libro.prototype, "ISBN", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Libro.prototype, "CreatedAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Libro.prototype, "UpdatedAt", void 0);
    Libro = __decorate([
        typeorm_1.Entity()
    ], Libro);
    return Libro;
}());
exports.Libro = Libro;
//# sourceMappingURL=Libro.js.map