import {
    controller,
    httpGet,
    httpPost,
    response,
    requestBody
} from 'inversify-express-utils';
import { inject } from 'inversify';

import { Response } from 'express';
import { TYPES } from "../../Config/constants"


@controller('/api/user')
export class UserController {
    constructor(@inject(TYPES.UserService) private userService: IUserService) { }
    @httpGet('/')
    public getUsers(): IUser[] {
        return this.userService.getUsers();
    }

    @httpPost("/")
    public register(
        @response() _: Response,
        @requestBody() __: IUser
    ): IUser[] {

        return this.userService.getUsers();
    }

}