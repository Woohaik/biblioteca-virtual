export class Director {
    Construye(pConstructor: IBuilder) {
        pConstructor.construyeFormato();
        pConstructor.construyePresentacion();
    }
}