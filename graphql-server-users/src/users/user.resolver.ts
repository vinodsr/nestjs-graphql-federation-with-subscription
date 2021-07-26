import { UseGuards, ParseIntPipe } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { CreateUserInput } from './createuser.input';
import { UserService } from './user.service';
import { PubSub } from 'graphql-subscriptions';
import { User } from './user.dto';

const pubSub = new PubSub();

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  async getUsers() {
    return this.userService.findAll();
  }

  @Mutation('createUser')
  async createUser(@Args('createUserInput') args: CreateUserInput) {
    const user = this.userService.addUser(args);
    pubSub.publish('userCreated', { userCreated: user });
    return user;
  }

  @Subscription('userCreated')
  userCreated() {
    return pubSub.asyncIterator('userCreated');
  }

  @ResolveField('department')
  getDepartment(@Parent() parent: User) {
    return { __typename: 'Department', id: parent.department };
  }
}
