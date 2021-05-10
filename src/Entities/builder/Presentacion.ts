export class PresentacionVoz implements IPresentacion {
    presentacion(): string {
        return "ORAL"
    }
}
export class PresentacionTexto implements IPresentacion {
    presentacion(): string {
        return "TEXTO"
    }
}