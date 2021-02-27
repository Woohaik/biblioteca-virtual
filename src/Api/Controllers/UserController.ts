import {
    controller,
    httpPost,
    response,
    requestBody
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { Response } from 'express';
import { TYPES } from "../../Config/constants"
import { ResponseDto } from "./../Dtos/ResponseDto"
import { validateUser } from "./../utils/validators"

@controller('/api/user')
export class UserController {
    constructor(@inject(TYPES.UserService) private userService: IUserService) { }
    @httpPost("/")
    public async register(
        @response() _: Response,
        @requestBody() newUser: IUser
    ): Promise<ResponseDto> {
        let isValid = await validateUser(newUser);
        if (isValid.failed) return new ResponseDto(isValid.errors, {})
        await this.userService.registerUser(newUser);
        return new ResponseDto([], {
            message: "Usuario Registrado"
        })
    }
}