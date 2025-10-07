/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/dto/login.dto';
import { RegiDto } from 'src/dto/regidto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup') // ✅ route = POST /auth/signup
  signup(@Body() dto: RegiDto) {
    return this.authService.register(dto); 
  }

  @Post('login') // ✅ route = POST /auth/login
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password);
  }
}
