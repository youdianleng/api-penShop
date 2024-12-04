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
    
    
    async getAllCustomers(){
        const allUsers = await this.userRepository.find();
        const allUsersSerialized = allUsers.map((user) => plainToClass(serializer, user));
        return allUsersSerialized
    }

    async getUserByUsername(name: string) {
        const userFindByUsername = await this.userRepository.findOne({
            where: { name }
        });
        return userFindByUsername;
    }

    createUser(createUserDto: CreateUserDto){
        const newUserCreated = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUserCreated);

    }


}
