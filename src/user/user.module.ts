import { forwardRef, Module } from '@nestjs/common';
// import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { userService } from './user.service';

import { userRepository } from './user.repository';
import { DatabaseModule } from 'src/database/database.module';
import { authModule } from 'src/auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PSController } from 'src/playstation/ps.controller';
import { psService } from 'src/playstation/ps.service';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => authModule),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1y' },
    }),
  ],
  providers: [...userRepository, userService],
  controllers: [UserController],
  exports: [userService, ...userRepository],
})
export class UserModule {}
