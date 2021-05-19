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
exports.BookingService = void 0;
const Config_1 = require("./../../Config");
const inversify_1 = require("inversify");
const Director_1 = require("./../../Entities/builder/Director");
const BuilderFisico_1 = require("./../../Entities/builder/BuilderFisico");
const BuilderDigitalTexto_1 = require("./../../Entities/builder/BuilderDigitalTexto");
const BuilderDigitalVoz_1 = require("./../../Entities/builder/BuilderDigitalVoz");
const Presentacion_1 = require("./../../Entities/builder/Presentacion");
const Formato_1 = require("./../../Entities/builder/Formato");
let BookingService = class BookingService {
    constructor(bookingRepository, userRepository, bookRepository) {
        this.bookingRepository = bookingRepository;
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
    }
    getAllBookings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookingRepository.getAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bookingRepository.getById(id);
        });
    }
    addBooking(userId, bookId, isFisico, isText) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.getById(userId);
            const book = yield this.bookRepository.getById(bookId);
            if (user && book) {
                let reservaAGuardar;
                const director = new Director_1.Director();
                if (isFisico) {
                    const builderFisico = new BuilderFisico_1.BuilderFisico();
                    director.Construye(builderFisico);
                    reservaAGuardar = builderFisico.obtenerReserva();
                    reservaAGuardar.presentacion = new Presentacion_1.PresentacionVoz();
                    reservaAGuardar.formato = new Formato_1.FormatoFisico();
                }
                else {
                    if (isText) {
                        const builderDigitalTexto = new BuilderDigitalTexto_1.BuilderDigitalTexto();
                        director.Construye(builderDigitalTexto);
                        reservaAGuardar = builderDigitalTexto.obtenerReserva();
                        reservaAGuardar.presentacion = new Presentacion_1.PresentacionTexto();
                    }
                    else {
                        const builderDigitalVoz = new BuilderDigitalVoz_1.BuilderDigitalVoz();
                        director.Construye(builderDigitalVoz);
                        reservaAGuardar = builderDigitalVoz.obtenerReserva();
                        reservaAGuardar.formato = new Formato_1.FormatoDigital();
                    }
                }
                reservaAGuardar.libro = book;
                reservaAGuardar.usuario = user;
                console.log("Libro: " + reservaAGuardar.libro.ID);
                console.log("Usuario: " + reservaAGuardar.usuario.ID);
                console.log("Presentacion: " + reservaAGuardar.presentacion.presentacion());
                console.log("Formato: " + reservaAGuardar.formato.formato());
                this.bookingRepository.saveBooking(reservaAGuardar);
            }
        });
    }
    updateBooking(id, userId, bookId, isFisico, isText) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.getById(userId);
            const book = yield this.bookRepository.getById(bookId);
            if (user && book) {
                let reservaAModificar;
                const director = new Director_1.Director();
                if (isFisico) {
                    const builderFisico = new BuilderFisico_1.BuilderFisico();
                    director.Construye(builderFisico);
                    reservaAModificar = builderFisico.obtenerReserva();
                    reservaAModificar.presentacion = new Presentacion_1.PresentacionVoz();
                    reservaAModificar.formato = new Formato_1.FormatoFisico();
                }
                else {
                    if (isText) {
                        const builderDigitalTexto = new BuilderDigitalTexto_1.BuilderDigitalTexto();
                        director.Construye(builderDigitalTexto);
                        reservaAModificar = builderDigitalTexto.obtenerReserva();
                        reservaAModificar.presentacion = new Presentacion_1.PresentacionTexto();
                    }
                    else {
                        const builderDigitalVoz = new BuilderDigitalVoz_1.BuilderDigitalVoz();
                        director.Construye(builderDigitalVoz);
                        reservaAModificar = builderDigitalVoz.obtenerReserva();
                        reservaAModificar.formato = new Formato_1.FormatoDigital();
                    }
                }
                reservaAModificar.libro = book;
                reservaAModificar.usuario = user;
                console.log("Libro: " + reservaAModificar.libro.ID);
                console.log("Usuario: " + reservaAModificar.usuario.ID);
                console.log("Presentacion: " + reservaAModificar.presentacion.presentacion());
                console.log("Formato: " + reservaAModificar.formato.formato());
                yield this.bookingRepository.editBooking(id, reservaAModificar);
            }
        });
    }
    deleteBooking(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bookingRepository.delete(id);
        });
    }
};
BookingService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(Config_1.INVERSIFY_TYPES.BookingRepository)),
    __param(1, inversify_1.inject(Config_1.INVERSIFY_TYPES.UserRepository)),
    __param(2, inversify_1.inject(Config_1.INVERSIFY_TYPES.BookRepository)),
    __metadata("design:paramtypes", [Object, Object, Object])
], BookingService);
exports.BookingService = BookingService;
//# sourceMappingURL=BookingService.js.map