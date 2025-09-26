/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column({ nullable: true })
  prenom?: string;

  @Column({ nullable: true, length: 8 })
  contact?: string; // ex: 01020304 (exactement 8 chiffres)

  @Column({ nullable: true })
  statut?: string; // ex: Passage, Intégration...

  @Column({ nullable: true })
  egliseOrigine?: string; // Corrigé orthographe
}
