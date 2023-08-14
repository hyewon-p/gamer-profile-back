import { Bookmarks } from 'src/auth/bookmark/bookmark.entity';
import { FavoriteGames } from 'src/favorite/favorite.entity';
import { Traits } from 'src/trait/trait.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ nullable: true })
  steamKey: string;

  @Column({ nullable: true })
  psToken: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  gamerType: string;

  @Column({ nullable: true })
  refreshToken?: string;

  @Column({ nullable: true })
  email: string;

  @OneToMany((type) => Traits, (traits) => traits.user)
  traits: Traits[];
  @OneToMany((type) => FavoriteGames, (favorite) => favorite.user, {
    onDelete: 'CASCADE',
  })
  favorite: FavoriteGames[];
  @OneToMany((type) => Bookmarks, (bookmarks) => bookmarks.owner)
  bookmarks: Bookmarks[];
}
