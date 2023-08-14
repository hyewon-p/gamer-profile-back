import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from 'src/user/user.entity';
import { FavoriteGames } from 'src/favorite/favorite.entity';

@Entity({ name: 'games' })
export class Games {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userID: number;

  @ManyToOne((type) => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @Column()
  gameID: string | null;

  @Column()
  title: string;

  @Column()
  image: string | null;

  @Column()
  platform: string | null;

  @Column()
  playtime: number;

  @OneToOne(() => FavoriteGames, (favorite) => favorite.game_id)
  favorite: FavoriteGames;
}
