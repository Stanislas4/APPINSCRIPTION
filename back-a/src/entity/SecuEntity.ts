/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/* eslint-disable prettier/prettier */
@Entity()
export class SecuEntity {
    @PrimaryGeneratedColumn()
    SecuId : number;
    
    /* Ceux mis en commentaire sont etrangers userEntity
    // il doit etre ici comme 
    @Column({ nullable: true, length: 8 }) 
    contact?: string; // ex: 01020304 (exactement 8 chiffres) 
    //  @Column()
  nom: string;

  prenom?: string;

  contact?: string
  
  statut?: string

  egliseOrigine?: string*/ 
    
    @Column({ nullable: true })
    Quartier?: string;
    
}