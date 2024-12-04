import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/common/validations/user.dto';
import { createUser, serializer } from './user.interface';
import { plainToClass } from 'class-transformer';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/local/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}
    
    
    getAllCustomers(){
        // return this.User.map((user) => plainToClass(serializer, user));
    }

    getUserByUsername(username: string){
        // const userFindByUsername = this.User.find((user) => user.name === username);
        // return userFindByUsername;
    }

    createUser(createUserDto: CreateUserDto){
        const newUserCreated = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUserCreated);

    }


}
