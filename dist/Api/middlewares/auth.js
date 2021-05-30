"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGestor = exports.authUser = void 0;
const jwt_1 = require("../utils/jwt/jwt");
const authUser = (req, res, next) => {
    const token = req.cookies["clgn"];
    if (token) {
        const decodedToken = jwt_1.decodeToken(token);
        if (decodedToken.ROLE === "user")
            next();
    }
    res.status(401).send("No autorizado");
};
exports.authUser = authUser;
const authGestor = (req, res, next) => {
    const token = req.cookies["clgn"];
    if (token) {
        const decodedToken = jwt_1.decodeToken(token);
        if (decodedToken.ROLE === "gestor")
            next();
    }
    res.status(401).send("No autorizado");
};
exports.authGestor = authGestor;
//# sourceMappingURL=auth.js.map