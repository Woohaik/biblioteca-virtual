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
exports.BookService = void 0;
const Config_1 = require("../../Config");
const inversify_1 = require("inversify");
const BookObservator_1 = require("./../../Entities/BookObservator");
const MailService_1 = require("./MailService");
const confirmBookTemplate_1 = require("../utils/email/confirmBookTemplate");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
        this.observadores = [];
        this.observatorEmail = "martha.marquez@alumnos.uneatlantico.es";
        this.registerObserver(new BookObservator_1.BookObservator(this.observatorEmail, "Prueba", "La Ceiba"));
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookRepository.getAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookRepository.getById(id);
        });
    }
    addBook(newBook) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastBook = yield this.bookRepository.getByName(newBook.Name);
            if (lastBook) {
                throw new Error("El libro que desea agregar ya existe.");
            }
            yield this.bookRepository.save(newBook);
            yield MailService_1.MailService.sendEmail(this.observatorEmail, confirmBookTemplate_1.confirmBookTemplate(newBook));
        });
    }
    getByAuthor(author) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookRepository.getByAuthor(author);
        });
    }
    getByGenre(genre) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookRepository.getByGenre(genre);
        });
    }
    getByEditorial(editorial) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookRepository.getByEditorial(editorial);
        });
    }
    updateBook(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bookRepository.edit(id, book);
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bookRepository.delete(id);
        });
    }
    registerObserver(observer) {
        this.observadores.push(observer);
    }
    removeObserver(observer) {
        this.observadores.splice(this.observadores.findIndex(ob => ob === observer), 1);
    }
    notifyObserver(template) {
        this.observadores.forEach(observers => observers.update(template));
    }
};
BookService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(Config_1.INVERSIFY_TYPES.BookRepository)),
    __metadata("design:paramtypes", [Object])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=BookService.js.map