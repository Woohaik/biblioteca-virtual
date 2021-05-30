import {
    controller,
    httpPost,
    httpGet,
    interfaces,
    response,
    request,
    requestBody,
    requestParam,
    httpDelete
} from 'inversify-express-utils';

import { inject } from 'inversify';
import express, { Response, CookieOptions } from 'express';
import { INVERSIFY_TYPES } from "../../Config"
import { ResponseDto } from "./../Dtos/ResponseDto"
import { validateUser } from "./../utils"
import { UserDto } from './../Dtos/UserDto';
import { ErrorDto } from '../Dtos/ErrorDto';
import { decodeToken, loginUserToken } from '../utils/jwt/jwt';
@controller('/api/user')
export class UserController implements interfaces.Controller {

    constructor(@inject(INVERSIFY_TYPES.UserService) private userService: IUserService) { }

    @httpDelete("/:id")
    public async deleteUser(@requestParam("id") id: number): Promise<ResponseDto> {
        await this.userService.deleteUser(id);
        return new ResponseDto([], {
            message: "Usuario Eliminado"
        })
    }


    @httpPost("/login")
    public async loginUser(@response() res: express.Response, @requestBody() elem: any): Promise<ResponseDto> {
        try {
            const user = await this.userService.loginUser(elem.Email, elem.Password);
            const options: CookieOptions = {
                maxAge: 1000 * 60 * 15, // would expire after 15 minutes
                httpOnly: true, // The cookie only accessible by the web server
                sameSite: "strict"
            };
            const token = loginUserToken({ ID: user.ID, ROLE: user.Rol });
            res.cookie("clgn", token, options);
            const newUser = new UserDto(user);
            return new ResponseDto([], { user: newUser });
        } catch (error) {
            return new ResponseDto([new ErrorDto("Modal", error.message)], {});
        }
    }

    @httpGet("/auth")
    public async authUser(@request() req: express.Request): Promise<ResponseDto> {
        try {
            const token = req.cookies["clgn"];
            if (token) {
                const decodedToken: any = decodeToken(token);
                decodedToken.ID
                const user = await this.userService.getById(decodedToken.ID || -1);
                return new ResponseDto([], { user });
            } else {
                return new ResponseDto([new ErrorDto("Modal", "Error al autenticar!")], {});
            }
        } catch (error) {
            return new ResponseDto([new ErrorDto("Modal", error.message)], {});
        }
    }


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
        try {
            let isValid = await validateUser(newUser);
            if (isValid.failed) return new ResponseDto(isValid.errors, {})
            await this.userService.registerUser(newUser);
            return new ResponseDto([], {
                message: "Usuario Registrado"
            })
        } catch (error) {
            return new ResponseDto([new ErrorDto("Modal", error.message)], {
            })
        }
    }
}