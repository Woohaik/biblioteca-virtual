import jwt from "jsonwebtoken";
import { CONFIG } from "../../../Config";

export const loginUserToken = (payload: any) => {
    const token = jwt.sign(payload, CONFIG.SECRET, { expiresIn: 1000 * 60 * 60 * 24 * 3 }) // Expira en 3 dias
    return token
}


export const decodeToken = (token: string) => {
    return jwt.verify(token, CONFIG.SECRET);
};