"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
class UserDto {
    constructor(user) {
        this.ID = user.ID;
        this.Name = user.Name;
        this.LastName = user.LastName;
        this.Username = user.Username;
        this.Email = user.Email;
        this.CreatedAt = user.CreatedAt;
        this.UpdatedAt = user.UpdatedAt;
        this.ConfirmedEmail = user.ConfirmedEmail;
    }
}
exports.UserDto = UserDto;
//# sourceMappingURL=UserDto.js.map