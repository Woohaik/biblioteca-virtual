import { FormatoFisico } from "./Formato";
import { ReservaProducto } from "./ReservadBuilder";

export class BuilderFisico implements IBuilder {

    private productoReserva: ReservaProducto = new ReservaProducto();

    construyeFormato(): void {
        this.productoReserva.decidirFormato(new FormatoFisico());
    }

    construyePresentacion(): void {
        // No tiene presentacion 
        return undefined;
    }

    obtenerReserva(): IReservaProducto {
        return this.productoReserva;
    }

}