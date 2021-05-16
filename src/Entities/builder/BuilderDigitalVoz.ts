import { FormatoDigital } from "./Formato";
import { PresentacionVoz } from "./Presentacion";
import { ReservaProducto } from "./ReservadBuilder";

export class BuilderDigitalVoz implements IBuilder {

    private productoReserva: ReservaProducto = new ReservaProducto();;



    construyeFechas(): void {
        this.productoReserva.StartDate = new Date();
        this.productoReserva.EndDate = new Date();
    }

    construyeFormato(): void {
        this.productoReserva.decidirFormato(new FormatoDigital());
    }

    construyePresentacion(): void {
        this.productoReserva.ponerPresentacion(new PresentacionVoz());
    }

    obtenerReserva(): IReservaProducto {
        return this.productoReserva
    }
}