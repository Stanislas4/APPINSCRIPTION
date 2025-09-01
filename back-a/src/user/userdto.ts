/* eslint-disable prettier/prettier */
import { IsString, IsOptional, Matches, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nom: string;

  @IsString()
  @IsOptional()
  prenom?: string;

  /*@IsInt()
  @Min(0)
  @Max(120)
  age: number;*/

  @IsString()
  @IsOptional()
  @Matches(/^\d{8}$/, { message: 'Le contact doit contenir exactement 8 chiffres' })
  contact?: string;

  @IsNotEmpty()
  @IsString()
  statut: string;
}
