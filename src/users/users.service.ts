import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from '../model/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

export type User = any;

@Injectable()
export class UsersService {
  @InjectRepository(UsersEntity)
  private readonly usersRepository: Repository<UsersEntity>;

  private readonly users = [
    {
      userId: 1,
      username: 'Jon',
      password: 'JonPassword',
    },
    {
      userId: 2,
      username: 'Maria',
      password: 'MariaPassword',
    },
  ];

  test(): string {
    return 'User Service Work !';
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
