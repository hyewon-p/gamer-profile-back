import { Module, forwardRef } from '@nestjs/common';
import { authModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/user/user.module';
import { TraitController } from './trait.controller';
import { traitRepository } from './trait.repository';
import { traitService } from './trait.service';

@Module({
  imports: [DatabaseModule, UserModule],
  providers: [...traitRepository, traitService],
  controllers: [TraitController],
  exports: [...traitRepository, traitService],
})
export class TraitModule {}
