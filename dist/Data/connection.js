"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDbConnection = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("../Entities/Usuario");
const Libros_1 = require("../Entities/Libros");
const ConfirmedEmail_1 = require("../Entities/ConfirmedEmail");
const Reservas_1 = require("../Entities/Reservas");
const Config_1 = __importDefault(require("../Config"));
const getDbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    const entities = [
        Usuario_1.Usuario,
        Libros_1.Libro,
        ConfirmedEmail_1.ConfirmEmails,
        Reservas_1.Booking
    ];
    const conn = yield typeorm_1.createConnection({
        type: Config_1.default.DB.dialect,
        host: Config_1.default.DB.host,
        port: 5432,
        username: Config_1.default.DB.username,
        password: Config_1.default.DB.password,
        database: Config_1.default.DB.database,
        entities: entities,
        synchronize: true
    });
    return conn;
});
exports.getDbConnection = getDbConnection;
//# sourceMappingURL=connection.js.map