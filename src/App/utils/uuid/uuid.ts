import { v4 as uuid } from "uuid"


export const generateUniqueId = (): string => {
    return uuid(); // v4
}