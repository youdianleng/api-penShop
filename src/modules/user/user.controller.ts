import { Body, Controller, Get, Inject, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { CreateUserDto } from 'src/common/validations/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService ){}

    @Get('')
    getUsers(){
        return this.userService.getAllCustomers();
    };

    @Get(':username')
    getUserByName(@Req() req: Request, @Res() res: Response ){
        const user = this.userService.getUserByUsername("zhiou");
        if(user){
            res.status(200).send(`hellow ${user}`)
        }
    }


    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto){
        this.userService.createUser(createUserDto);
    }


}
