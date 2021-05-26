export class Director {
    Construye(pConstructor: IBuilder) {
        pConstructor.construyeFechas();
        pConstructor.construyeFormato();
        pConstructor.construyePresentacion();
    }
    Construye2(pConstructor:IBuilderValoraciones){
        pConstructor.construyeValoracion();
    }
}