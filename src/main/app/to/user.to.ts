import {IsEmail, IsNotEmpty, Length, Matches} from "class-validator";

export class UserTo {
    @IsEmail()
    @IsNotEmpty()
    email!: string;
    @IsNotEmpty()
    @Length(2)
    name!: string;
    @IsNotEmpty()
    @Matches(/^0\d{2}-\d{7}$/)
    contact!: string;
}