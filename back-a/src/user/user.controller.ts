/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './userdto';

@Controller('box')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    console.log('ID reçu pour suppression :', id); // Optionnel : pour vérifier côté backend
    return this.userService.deleteUser(id); // 🔁 Convertit string -> number
  }

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
