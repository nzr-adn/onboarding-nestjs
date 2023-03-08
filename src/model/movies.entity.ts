import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class MoviesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  overview: string;

  @Column({ nullable: true })
  poster: string;

  @Column({ type: 'timestamptz', nullable: true })
  play_until: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
  @DeleteDateColumn({ type: 'timestamptz' })
  deleted_at: Date;
}
