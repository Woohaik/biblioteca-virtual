"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderDigitalVoz = void 0;
const Formato_1 = require("./Formato");
const Presentacion_1 = require("./Presentacion");
const ReservadBuilder_1 = require("./ReservadBuilder");
class BuilderDigitalVoz {
    constructor() {
        this.productoReserva = new ReservadBuilder_1.ReservaProducto();
    }
    ;
    construyeFechas() {
        this.productoReserva.StartDate = new Date();
        this.productoReserva.EndDate = new Date();
    }
    construyeFormato() {
        this.productoReserva.decidirFormato(new Formato_1.FormatoDigital());
    }
    construyePresentacion() {
        this.productoReserva.ponerPresentacion(new Presentacion_1.PresentacionVoz());
    }
    obtenerReserva() {
        return this.productoReserva;
    }
}
exports.BuilderDigitalVoz = BuilderDigitalVoz;
//# sourceMappingURL=BuilderDigitalVoz.js.map