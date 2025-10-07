/* eslint-disable prettier/prettier */
import { 
  IsString, 
  IsOptional, 
  Matches, 
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Le nom est obligatoire' })
  nom: string;

  @IsString()
  @IsOptional()
  prenom?: string;

  @IsString()
  @IsOptional()
  @Matches(/^\d{10}$/, { message: 'Le contact doit contenir exactement 10 chiffres' })
  contact?: string;

  @IsString()
  @IsNotEmpty({ message: 'Le statut est obligatoire' })
  statut: string;

  @IsString()
  @IsOptional()
  egliseOrigine?: string;

  @IsString()
  @IsOptional()
  Quartier?: string;
}
