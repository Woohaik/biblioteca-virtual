import Joi from "joi";
import { ErrorDto } from "../../Dtos/ErrorDto";

const bookingValidator = Joi.object({

    userID: Joi.number().positive().required(),
    bookID: Joi.number().positive().required()


})


export const validateBooking = async (user: IApiBooking ) => {
    try {
        await bookingValidator.validateAsync(user)
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