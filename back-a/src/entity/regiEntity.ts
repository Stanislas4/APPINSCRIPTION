/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RegiEntity {
  @PrimaryGeneratedColumn()
  RegId: number;

  @Column({ nullable: false })
  RegiName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
