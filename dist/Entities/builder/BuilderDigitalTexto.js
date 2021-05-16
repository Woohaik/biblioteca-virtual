"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderDigitalTexto = void 0;
const Formato_1 = require("./Formato");
const Presentacion_1 = require("./Presentacion");
const ReservadBuilder_1 = require("./ReservadBuilder");
class BuilderDigitalTexto {
    constructor() {
        this.productoReserva = new ReservadBuilder_1.ReservaProducto();
    }
    construyeFechas() {
        this.productoReserva.StartDate = new Date();
        this.productoReserva.EndDate = new Date();
    }
    construyeFormato() {
        this.productoReserva.decidirFormato(new Formato_1.FormatoDigital());
    }
    construyePresentacion() {
        this.productoReserva.ponerPresentacion(new Presentacion_1.PresentacionTexto());
    }
    obtenerReserva() {
        return this.productoReserva;
    }
}
exports.BuilderDigitalTexto = BuilderDigitalTexto;
//# sourceMappingURL=BuilderDigitalTexto.js.map