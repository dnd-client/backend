import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './modules/auth/auth.controller';
import { DatabaseService } from './modules/database/database.service';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController, AuthController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
