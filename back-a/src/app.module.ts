/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UploadController } from './upload/upload.controller';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'St@n1slAs',
      database: 'User_Bd',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    UploadModule, // c’est ici qu’on gère UserController et UserService
  ],
  providers: [AppService],
  controllers: [UploadController], // UNIQUEMENT AppService ici
})
export class AppModule {}
