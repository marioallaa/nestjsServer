
import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {UsersEntity} from './users.entity';
import {UserDto} from './dto/user.dto';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
    ) {}

    async register(user: UserDto) {
        return await this.usersRepository.save(user);
    }

    async findOne(username: string): Promise<UsersEntity | undefined> {
        return await this.usersRepository.findOne({where: {username}});
    }
}
