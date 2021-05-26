export class valoradoBien implements IValorado {
    valorado(): string {
        return "RECOMENDADO"
    }
}

export class valoradoMal implements IValorado {
    valorado(): string {
        return "NO RECOMENDADO"
    }
}