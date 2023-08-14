"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookmarkRepository = void 0;
const bookmark_entity_1 = require("./bookmark.entity");
exports.bookmarkRepository = [
    {
        provide: 'BOOKMARK_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(bookmark_entity_1.Bookmarks),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=bookmark.repository.js.map