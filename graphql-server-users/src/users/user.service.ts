import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './createuser.input';
import { User } from './user.dto';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 100,
      name: 'Sam',
      age: 10,
      department: 10000,
    },
  ];
  async findAll(): Promise<User[]> {
    return this.users;
  }

  async addUser(input: CreateUserInput) {
    const newUser = { ...input, id: Math.round(Math.random() * 1000) };
    this.users.push(newUser);
    return newUser;
  }
}
