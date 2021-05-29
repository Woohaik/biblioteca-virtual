import Joi from "joi";
import { ErrorDto } from "../../Dtos/ErrorDto";


const userValidator = Joi.object({
    Email: Joi.string().min(3),
    Name: Joi.string().min(3),
    Username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    Password: Joi.string().min(3),
    LastName: Joi.string().min(3).required()
})


export const validateUser = async (user: IUser) => {
    try {
        await userValidator.validateAsync(user)
        return {
            failed: false
        }
    } catch (error: any) {
        return {
            failed: true,
            errors: error?.details.map((err: any) => {
                let [field, ...message]: string = err.message.split(" ");
                return new ErrorDto(field.replace('"', "").replace('"', ""), message.join(" "))
            })
        }
    }
}

