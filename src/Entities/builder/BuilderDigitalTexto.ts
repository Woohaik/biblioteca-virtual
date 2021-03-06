import { FormatoDigital } from "./Formato";
import { PresentacionTexto } from "./Presentacion";
import { ReservaProducto } from "./ReservadBuilder";

export class BuilderDigitalTexto implements IBuilder {

    private productoReserva: ReservaProducto = new ReservaProducto();


    construyeFechas(): void {
        this.productoReserva.StartDate = new Date();
        this.productoReserva.EndDate = new Date();
    }

    construyeFormato(): void {
        this.productoReserva.decidirFormato(new FormatoDigital());
    }

    construyePresentacion(): void {
        this.productoReserva.ponerPresentacion(new PresentacionTexto());
    }

    obtenerReserva(): IReservaProducto {
        return this.productoReserva;
    }
}