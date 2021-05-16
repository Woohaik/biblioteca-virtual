export class Director {
    Construye(pConstructor: IBuilder) {
        pConstructor.construyeFechas();
        pConstructor.construyeFormato();
        pConstructor.construyePresentacion();
    }
}