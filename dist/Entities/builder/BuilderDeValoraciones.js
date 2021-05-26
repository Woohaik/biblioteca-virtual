"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderDeValoraciones = void 0;
const ValoracionesBuilder_1 = require("./ValoracionesBuilder");
const Valorado_1 = require("./Valorado");
class BuilderDeValoraciones {
    constructor() {
        this.valoracion = new ValoracionesBuilder_1.ValoracionProducto();
    }
    construyeValoracion() {
        this.valoracion.valoracion(new Valorado_1.valoradoBien());
    }
}
exports.BuilderDeValoraciones = BuilderDeValoraciones;
//# sourceMappingURL=BuilderDeValoraciones.js.map