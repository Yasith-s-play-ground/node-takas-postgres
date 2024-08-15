var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
export class UserTo {
    email;
    name;
    contact;
}
__decorate([
    IsEmail(),
    IsNotEmpty()
], UserTo.prototype, "email", void 0);
__decorate([
    IsNotEmpty(),
    Length(2)
], UserTo.prototype, "name", void 0);
__decorate([
    IsNotEmpty(),
    Matches(/^0\d{2}-\d{7}$/)
], UserTo.prototype, "contact", void 0);
//# sourceMappingURL=user.to.js.map