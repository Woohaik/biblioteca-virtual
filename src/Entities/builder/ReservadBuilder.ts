export class ReservaProducto implements IReservaProducto {
    presentacion: IPresentacion;
    formato: IFormato;
    usuario: IUser;
    libro: IBook;
    StartDate: Date;
    EndDate: Date;

    ponerPresentacion(presentacion: IPresentacion) {
        this.presentacion = presentacion;
    }
    decidirFormato(formato: IFormato) {
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