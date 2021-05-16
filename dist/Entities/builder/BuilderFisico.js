"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderFisico = void 0;
const Formato_1 = require("./Formato");
const ReservadBuilder_1 = require("./ReservadBuilder");
class BuilderFisico {
    constructor() {
        this.productoReserva = new ReservadBuilder_1.ReservaProducto();
    }
    construyeFechas() {
        this.productoReserva.StartDate = new Date();
        this.productoReserva.EndDate = new Date();
    }
    construyeFormato() {
        this.productoReserva.decidirFormato(new Formato_1.FormatoFisico());
    }
    construyePresentacion() {
        return undefined;
    }
    obtenerReserva() {
        return this.productoReserva;
    }
}
exports.BuilderFisico = BuilderFisico;
//# sourceMappingURL=BuilderFisico.js.map