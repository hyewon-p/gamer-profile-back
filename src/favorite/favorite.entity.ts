import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Games } from 'src/game/game.entity';
import { Users } from 'src/user/user.entity';

@Entity()
export class FavoriteGames {
  @PrimaryColumn()
  game_id: number;

  @PrimaryColumn()
  user_id: number;

  @OneToOne((type) => Games, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'game_id' })
  game: Games;

  @ManyToOne((type) => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @Column()
  description: string;
}
