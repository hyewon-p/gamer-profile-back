import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from 'src/user/user.entity';

@Entity()
export class Traits {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userID: number;

  @ManyToOne((type) => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @Column()
  label: string;

  @Column()
  value: string;
}
