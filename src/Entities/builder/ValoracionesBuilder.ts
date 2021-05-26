export class ValoracionProducto implements IValoracionProducto {
    usuario: IUser;
    libro: IBook;
    Rate: IValorado;
    Commentary: ICommentary;

    valoracion(Rate: IValorado){
        this.Rate = Rate;
    }
}