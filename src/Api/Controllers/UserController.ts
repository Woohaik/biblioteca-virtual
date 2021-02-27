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
import { ErrorDto } from '../Dtos/ErrorDto';

@controller('/api/user')
export class UserController {

    constructor(@inject(TYPES.UserService) private userService: IUserService) { }
    @httpPost("/")
    public async register(
        @response() _: Response,
        @requestBody() newUser: IUser
    ): Promise<ResponseDto> {
        let errors: ErrorDto[] = [];
        if (newUser.Email.length < 5) {
            errors.push(new ErrorDto("Email", "Email muy Corto"))
        }
        if (errors.length > 0) return new ResponseDto(errors, null)
        await this.userService.registerUser(newUser);
        return new ResponseDto(errors, {
            message: "Usuario Registrado"
        })
    }

    
}