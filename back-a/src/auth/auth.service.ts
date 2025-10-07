/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegiEntity } from 'src/entity/regiEntity';
import { RegiDto } from 'src/dto/regidto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(RegiEntity) private userRepo: Repository<RegiEntity>,
    private jwtService: JwtService,
  ) {}

  // ✅ Inscription
  async register(dto: RegiDto) {
  const { RegiName, email, password } = dto;

  if (!RegiName || !email || !password) {
    throw new BadRequestException('Nom, email et mot de passe sont obligatoires');
  }

  const existingUser = await this.userRepo.findOne({ where: { email } });
  if (existingUser) {
    throw new ConflictException('Cet email est déjà utilisé');
  }

  const hash = await bcrypt.hash(password, 10);

  const user = this.userRepo.create({
    RegiName,
    email,
    password: hash,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return this.userRepo.save(user);
}


  // ✅ Connexion
  async login(email: string, password: string) {
    // Vérifier que les champs sont bien fournis
    if (!email || !password) {
      throw new BadRequestException('Email et mot de passe sont obligatoires');
    }

    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('Utilisateur introuvable');

    // Vérifier le mot de passe
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException('Mot de passe incorrect');

    // Générer le token JWT
    const payload = { sub: user.RegId, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
