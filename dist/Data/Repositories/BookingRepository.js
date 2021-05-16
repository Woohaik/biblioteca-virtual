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
exports.BookingRepository = void 0;
const inversify_1 = require("inversify");
const typeorm_1 = require("typeorm");
const Reservas_1 = require("../../Entities/Reservas");
let BookingRepository = class BookingRepository {
    constructor() {
        const conn = typeorm_1.getConnection();
        this.bookingConnection = conn.getRepository(Reservas_1.Booking);
    }
    saveBooking(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bookingConnection.insert({
                UserId: entity.usuario.ID,
                BookId: entity.libro.ID,
                Format: entity.formato.formato(),
                Presentation: entity.presentacion.presentacion(),
                StartDate: entity.StartDate,
                EndDate: entity.EndDate,
            });
        });
    }
    edit(id, entity) {
        console.log(id);
        console.log(entity);
        throw new Error("Method not implemented.");
    }
    delete(id) {
        console.log(id);
        throw new Error("Method not implemented.");
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookingConnection.findOne(id);
        });
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(entity);
            throw new Error("Method not implemented.");
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookingConnection.find({ relations: ["User", "Book"] });
        });
    }
};
BookingRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], BookingRepository);
exports.BookingRepository = BookingRepository;
//# sourceMappingURL=BookingRepository.js.map