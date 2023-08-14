import { DataSource, Entity, Repository } from 'typeorm';
import { Bookmarks } from './bookmark.entity';

export const bookmarkRepository = [
  {
    provide: 'BOOKMARK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Bookmarks),
    inject: ['DATA_SOURCE'],
  },
];
