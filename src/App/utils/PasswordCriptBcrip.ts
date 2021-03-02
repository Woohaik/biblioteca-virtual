import argon from "argon2";

export const hashPassword = async (password: string): Promise<string> => {
    return await argon.hash(password);
}

export const comparePassword = async (truePassword: string, toComparePassword: string): Promise<boolean> => {
    return await argon.verify(truePassword, toComparePassword);
}