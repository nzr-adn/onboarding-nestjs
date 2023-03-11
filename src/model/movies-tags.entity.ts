import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('movie_tags')
export class MoviesTagsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag_name: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
  @DeleteDateColumn({ type: 'timestamptz' })
  deleted_at: Date;
}
