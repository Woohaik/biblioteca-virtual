import { ValoracionProducto } from "./ValoracionesBuilder";
import { valoradoMal } from "./Valorado";

export class BuilderDeValoraciones implements IBuilderValoraciones {

    private valoracion: ValoracionProducto = new ValoracionProducto();

    construyeValoracion(): void{
        this.valoracion.valoracion(new valoradoMal());
    }
}