export class PresentacionTexto implements IPresentacion {
    presentacion(): string {
        return "TEXTO"
    }
}
export class PresentacionVoz implements IPresentacion {
    presentacion(): string {
        return "ORAL"
    }
}