import { hashPassword, comparePassword } from "./../src/App/utils/PasswordCriptBcrip"

describe("Cript and Bcript Password", () => {
    it("Cript Password", async () => {
        let password = "passwordToHash";
        let HashPassord = await hashPassword(password);
        expect(HashPassord).not.toBeNull();
        expect(HashPassord).toBeTruthy();
        expect(HashPassord).not.toEqual(password)
    })

    it("Bcript Password", async () => {
        let password = "passwordToHash";
        let HashPassord = await hashPassword(password);
        let isComparedHasToFail = await comparePassword(HashPassord, "ImNotCorrect");
        let isComparedCorrect = await comparePassword(HashPassord, password);
        expect(isComparedHasToFail).toEqual(false)
        expect(isComparedCorrect).toEqual(true)
    })
})