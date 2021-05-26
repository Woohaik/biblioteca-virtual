"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
class Director {
    Construye(pConstructor) {
        pConstructor.construyeFechas();
        pConstructor.construyeFormato();
        pConstructor.construyePresentacion();
    }
    Construye2(pConstructor) {
        pConstructor.construyeValoracion();
    }
}
exports.Director = Director;
//# sourceMappingURL=Director.js.map