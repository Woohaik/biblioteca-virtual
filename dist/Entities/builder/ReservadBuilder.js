"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaProducto = void 0;
class ReservaProducto {
    ponerPresentacion(presentacion) {
        this.presentacion = presentacion;
    }
    decidirFormato(formato) {
        this.formato = formato;
    }
    mostrarReserva() {
        console.log("Usuario que la realiza", this.usuario);
        console.log("Libro que reserva", this.libro);
        console.log("Formato de reserva", this.formato);
        if (this.formato.formato() === "DIGITAl") {
            console.log("Presentacion de formato digital escogida", this.presentacion);
        }
    }
}
exports.ReservaProducto = ReservaProducto;
//# sourceMappingURL=ReservadBuilder.js.map