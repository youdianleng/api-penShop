import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/common/validations/user.dto';
import { createUser } from './user.interface';

@Injectable()
export class UserService {

    private User: createUser[] =
        [{
            name: "Zhi ou",
            password: "zhiou1234",
            email: "hellow@gmail.com",
            role: 1,
            active: 1
        }]
    
    
    getAllCustomers(){
        return this.User;
    }

    getUserByUsername(username: string){
        return `hellow ${username}`;
    }

    createUser(createUserDto: CreateUserDto){
        this.User.push(createUserDto);

    }


}
