/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MembrEntity {
  @PrimaryGeneratedColumn()
  MembId: number;

  @Column({ nullable: false })
  MembName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
