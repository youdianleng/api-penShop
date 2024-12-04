import { All, Body, ClassSerializerInterceptor, Controller, Get, Inject, Param, Post, Req, Res, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from 'src/common/validations/user.dto';
import { UserService } from './user.service';
import { serializer } from './user.interface';

@Controller('user')
export class UserController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UserService ){}

    @Get('')
    @UseInterceptors(ClassSerializerInterceptor)
    async getUsers() {
        const allUsers = await this.userService.getAllCustomers();
    
        const users = allUsers.map((user) => new serializer(user));

        return users;
    }

    @Get(':username')
    async getUserByName(@Param('username') username: string, @Req() req: Request, @Res() res: Response ){
        const user = await this.userService.getUserByUsername(username);
        if(user){
            res.status(200).send(`hellow ${user}`)
        }else{
            res.status(404).send(`The user ${username} is not founded`)
        }
    }


    @Post('create')
    @UsePipes(ValidationPipe)
    async createUser(@Body() createUserDto: CreateUserDto){
       return await this.userService.createUser(createUserDto);
    }


}
