import { Injectable } from '@nestjs/common';
import { CreateDepartmentInput } from './createdepartment.input';
import { Department } from './department.dto';

@Injectable()
export class DepartmentService {
  private deps: Department[] = [
    {
      id: 10000,
      name: 'Internal',
    },
  ];
  async findAll(): Promise<Department[]> {
    return this.deps;
  }

  async addDepartment(input: CreateDepartmentInput) {
    const dep = { ...input, id: Math.round(Math.random() * 10000) };
    this.deps.push(dep);
    return dep;
  }

  findById(id: Number): Department {
    for (const dep of this.deps) {
      if (dep.id == id) {
        return dep;
      }
    }
    return null;
  }
}
