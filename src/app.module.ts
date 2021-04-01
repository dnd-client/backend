import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from './users/users.module';
import { DatabaseService } from './database/database.service';
import { UserModule } from './user/user.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [UsersModule, DatabaseModule, UserModule],
  controllers: [AppController, AuthController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
