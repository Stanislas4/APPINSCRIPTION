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
  @Matches(/^(01|05|07|25|27)\d{6}$/, { message: 'Le contact doit contenir exactement 8 chiffres et commencer par 01, 05, 07, 25 ou 27' })
  contact?: string;

  @IsString()
  @IsNotEmpty({ message: 'Le statut est obligatoire' })
  statut: string;

  @IsString()
  @IsOptional()
  egliseOrigine?: string;
}
