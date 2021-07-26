import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FakeKeyDirective } from './directives/key.directive';
import { DeparmentResolver } from './department/department.resolver';
import { DepartmentService } from './department/department.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      path: '/graphql',
      typePaths: ['./**/*.{graphql,graphql.normal}'],
      installSubscriptionHandlers: true,
      directiveResolvers: {
        key: FakeKeyDirective,
      },
    }),
    GraphQLFederationModule.forRoot({
      debug: false,
      playground: false,
      path: '/graphql-federated',
      typePaths: ['./**/*.{graphql,graphql.federated}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DeparmentResolver, DepartmentService],
})
export class AppModule {}
