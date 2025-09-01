/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './userentity';
import { CreateUserDto } from './userdto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  // Créer un utilisateur
  create(data: CreateUserDto) {
    return this.userRepo.save(data);
  }

  // Récupérer tous les utilisateurs
  findAll() {
    return this.userRepo.find();
  }

   /* Mettre à jour un utilisateur
  async updateUser(id: number, data: UpdateUserDto) {
    await this.userRepo.update(id, data);
    return this.userRepo.findOneBy({ id });
  } */

  // Supprimer un utilisateur par ID
  deleteUser(id: number) {
    return this.userRepo.delete(id);
  }
}