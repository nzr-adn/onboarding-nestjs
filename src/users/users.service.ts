import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from '../model/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  @InjectRepository(UsersEntity)
  private readonly usersRepository: Repository<UsersEntity>;
  test(): string {
    return 'User Service Work !';
  }
}
