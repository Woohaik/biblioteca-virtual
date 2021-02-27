import argon from "argon2";

export const hashPassord = async (password: string): Promise<string> => {
    return await argon.hash(password);
}

export const comparePassword = async (truePassword: string, toComparePassword: string): Promise<boolean> => {
    return await argon.verify(truePassword, toComparePassword);
}