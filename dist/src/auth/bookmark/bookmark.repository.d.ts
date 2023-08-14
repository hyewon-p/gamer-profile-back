import { DataSource, Repository } from 'typeorm';
import { Bookmarks } from './bookmark.entity';
export declare const bookmarkRepository: {
    provide: string;
    useFactory: (dataSource: DataSource) => Repository<Bookmarks>;
    inject: string[];
}[];
