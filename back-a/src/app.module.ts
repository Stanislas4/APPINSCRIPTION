/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { IntegrantModule } from './integrant/integrant.module';
import { GestionModule } from './gestion/gestion.module';
import { SecuModule } from './secu/secu.module';

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
    AuthModule,
    IntegrantModule,
    GestionModule,
    SecuModule,
  ],
  providers: [AppService],
  controllers: [], // UNIQUEMENT AppService ici
})
export class AppModule {}
