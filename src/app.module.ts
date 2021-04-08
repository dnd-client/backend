import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { DatabaseService } from './modules/database/database.service';
import { DatabaseModule } from './modules/database/database.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({isGlobal: true}), UsersModule],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
