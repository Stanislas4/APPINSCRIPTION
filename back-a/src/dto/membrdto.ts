/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
export class MembrDto {
@IsString()
@IsNotEmpty({ message: 'Le nom est obligatoire' })
MembName: string;

@IsEmail({}, { message: 'Email invalide' })
@IsNotEmpty({ message: 'L’email est obligatoire' })
email: string;

@IsString()
@MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
password: string;
}

