import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { validationUserMiddleware } from 'src/common/middlewares/userMiddleware.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/local/user.entity';

@Module({
  controllers: [UserController],
  providers: [{
    provide: 'USER_SERVICE',
    useClass: UserService,
  }],
  imports: [TypeOrmModule.forFeature([User])]
})
export class UserModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(validationUserMiddleware).forRoutes({
      path: 'api/user',
      method: RequestMethod.GET,
    })
  }
}
