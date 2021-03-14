export class UserDto implements IUserDto {
    ID?: number | undefined;
    Name: string;
    LastName: string;
    Username: string;
    Email: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    ConfirmedEmail: boolean;
    constructor(user: IUser) {
        this.ID = user.ID;
        this.Name = user.Name;
        this.LastName = user.LastName;
        this.Username = user.Username;
        this.Email = user.Email;
        this.CreatedAt = user.CreatedAt;
        this.UpdatedAt = user.UpdatedAt;
        this.ConfirmedEmail = user.ConfirmedEmail
    }

}