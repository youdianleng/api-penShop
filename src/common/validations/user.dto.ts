import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto{
    @IsNotEmpty()
    @ApiProperty({
        name: "name",
        type: "string",
        description: "User Name",
        example: "Mohamed Abudel"
    })
    @IsString()
    name: String;

    @IsNotEmpty()
    @ApiProperty({
        name: "password",
        type: "string",
        description: "User login password",
        example: "My_Password1234"
    })
    @IsString()
    password: String;

    @IsNotEmpty()
    @ApiProperty({
        name: "email",
        type: "string",
        description: "User email use to login or password recover",
        example: "XXX@gmail.com"
    })
    @IsString()
    email: String;

    @IsNotEmpty()
    @ApiProperty({
        name: "role",
        type: "string",
        description: "User Role",
        example: "1"
    })
    @IsNumber()
    role: number;

    @IsNotEmpty()
    @ApiProperty({
        name: "active",
        type: "string",
        description: "User account state",
        example: "1"
    })
    @IsNumber()
    active: number;
}