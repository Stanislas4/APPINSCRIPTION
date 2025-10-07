import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RegiEntity } from 'src/entity/regiEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RegiEntity]),
    JwtModule.register({
      secret: 'SECRET_KEY', // ⚠️ à mettre dans .env
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
