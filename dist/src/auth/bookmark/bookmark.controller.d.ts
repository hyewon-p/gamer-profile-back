import { bookmarkService } from './bookmark.service';
export declare class BookmarkController {
    private bookmarkService;
    constructor(bookmarkService: bookmarkService);
    getBookmarkList(id: number): Promise<import("./bookmark.entity").Bookmarks[]>;
    addNewBookmark(req: any, id: number): Promise<void>;
    deleteFromBookmark(req: any, id: number): Promise<void>;
}
