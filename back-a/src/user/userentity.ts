/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column({ nullable: true })
  prenom: string;

  /*@Column()
  age: number;*/

  @Column({ nullable: true })
  contact: string; // ex: 0102030405

  @Column({ nullable: true })
  statut: string
}
