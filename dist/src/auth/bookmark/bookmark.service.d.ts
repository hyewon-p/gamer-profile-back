import { Repository } from 'typeorm';
import { Bookmarks } from './bookmark.entity';
export declare class bookmarkService {
    private bookmarkRepository;
    constructor(bookmarkRepository: Repository<Bookmarks>);
    getBookmarkList(id: any): Promise<Bookmarks[]>;
    addToBookmark(ownerID: any, profileID: any): Promise<void>;
    deleteFromBookmark(ownerID: any, profileID: any): Promise<void>;
}
