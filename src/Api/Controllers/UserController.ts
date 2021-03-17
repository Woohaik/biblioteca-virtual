import {
    controller,
    httpPost,
    httpGet,
    interfaces,
    response,
    requestBody,
    requestParam
} from 'inversify-express-utils';

import { inject } from 'inversify';
import { Response } from 'express';
import { INVERSIFY_TYPES } from "../../Config"
import { ResponseDto } from "./../Dtos/ResponseDto"
import { validateUser } from "./../utils"
import { UserDto } from './../Dtos/UserDto';

@controller('/api/user')
export class UserController implements interfaces.Controller {

    constructor(@inject(INVERSIFY_TYPES.UserService) private userService: IUserService) { }

    @httpGet("/")
    public async getAllUsers(): Promise<ResponseDto> {
        let allUsers = await this.userService.getAllUser()
        let users = allUsers.map((user) => new UserDto(user))
        return new ResponseDto([], {
            users
        })
    }


    @httpGet("/confirm-email/:id")
    public async confirmEmail(@requestParam("id") id: string): Promise<string> {
        await this.userService.confirmEmail(id);
        return "Email Confirmado"
    }


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