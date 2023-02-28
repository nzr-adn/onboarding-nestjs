import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MoviesEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
