import {
    controller,
    httpGet,
    httpPost,
    requestParam,
    response,
    requestBody
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { Response } from 'express';
import { TYPES } from "../../Config/constants"

@controller('/api/user')
export class UserController {
    constructor(@inject(TYPES.UserService) private userService: IUserService) { }
    @httpGet('/:id')
    public getUser(
        @requestParam("id") id: string
    ): Promise<IUser | undefined> {
        return this.userService.getUser(+id);
    }

    @httpPost("/")
    public async register(
        @response() _: Response,
        @requestBody() __: IUser
    ): Promise<IUser | undefined> {
        const { email, name, password } = __;
        console.log(email, name, password);
        return await this.userService.registerUser(__)
    }
}