import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Games } from 'src/game/game.entity';
import { Users } from 'src/user/user.entity';

@Entity()
export class Bookmarks {
  @PrimaryColumn({ name: 'owner_id' })
  owner_id: number;

  @PrimaryColumn({ name: 'profile_id' })
  profile_id: number;

  @ManyToOne((type) => Users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'owner_id' })
  owner: Users;

  @ManyToOne((type) => Users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'profile_id' })
  user: Users;
}
