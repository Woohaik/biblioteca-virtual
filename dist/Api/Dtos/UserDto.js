"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
var UserDto = (function () {
    function UserDto(user) {
        this.ID = user.ID;
        this.Name = user.Name;
        this.LastName = user.LastName;
        this.Username = user.Username;
        this.Email = user.Email;
        this.CreatedAt = user.CreatedAt;
        this.UpdatedAt = user.UpdatedAt;
        this.ConfirmedEmail = user.ConfirmedEmail;
    }
    return UserDto;
}());
exports.UserDto = UserDto;
//# sourceMappingURL=UserDto.js.map