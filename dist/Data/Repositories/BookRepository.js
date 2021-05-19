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
exports.BookRepository = void 0;
const inversify_1 = require("inversify");
const typeorm_1 = require("typeorm");
const Libro_1 = require("../../Entities/Libro");
let BookRepository = class BookRepository {
    constructor() {
        const conn = typeorm_1.getConnection();
        this.bookConnection = conn.getRepository(Libro_1.Libro);
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(entity);
            yield this.bookConnection.insert({
                Name: entity.Name,
                Author: entity.Author,
                Genre: entity.Genre,
                Rate: entity.Rate,
                PublicationYear: entity.PublicationYear,
                ISBN: entity.ISBN,
                Editorial: entity.Editorial,
                Synopsis: entity.Synopsis
            });
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookConnection.find();
        });
    }
    getByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookConnection.findOne(undefined, { where: { Name: name } });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookConnection.findOne(id);
        });
    }
    edit(id, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            yield this.bookConnection.update(id, {
                Name: entity.Name,
                Author: entity.Author,
                PublicationYear: entity.PublicationYear,
                Genre: entity.Genre,
                Rate: entity.Rate,
                ISBN: entity.ISBN,
                Editorial: entity.Editorial,
                Synopsis: entity.Synopsis
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            yield this.bookConnection.delete(id);
        });
    }
};
BookRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], BookRepository);
exports.BookRepository = BookRepository;
//# sourceMappingURL=BookRepository.js.map