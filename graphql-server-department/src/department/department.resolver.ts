import { UseGuards, ParseIntPipe } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
  Subscription,
} from '@nestjs/graphql';
import { CreateDepartmentInput } from './createdepartment.input';
import { DepartmentService } from './department.service';
import { PubSub } from 'graphql-subscriptions';
import { Department } from './department.dto';

const pubSub = new PubSub();

@Resolver('Department')
export class DeparmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query('departments')
  async getDepartments() {
    return this.departmentService.findAll();
  }

  @Mutation('createDepartment')
  async createDepartment(
    @Args('createDepartmentInput') args: CreateDepartmentInput,
  ) {
    const dep = this.departmentService.addDepartment(args);
    pubSub.publish('departmentCreated', { departmentCreated: dep });
    return dep;
  }

  @Subscription('departmentCreated')
  departmentCreated() {
    return pubSub.asyncIterator('departmentCreated');
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: Number;
  }): Promise<Department> {
    return await this.departmentService.findById(reference.id);
  }
}
