"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookmarkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let bookmarkService = class bookmarkService {
    constructor(bookmarkRepository) {
        this.bookmarkRepository = bookmarkRepository;
    }
    async getBookmarkList(id) {
        const bookmarkList = await this.bookmarkRepository.find({
            select: { profile_id: true, user: { username: true } },
            where: { owner_id: id },
            relations: ['user'],
        });
        return bookmarkList;
    }
    async addToBookmark(ownerID, profileID) {
        const request = this.bookmarkRepository.create({
            owner_id: ownerID,
            profile_id: profileID,
        });
        this.bookmarkRepository.save(request);
    }
    async deleteFromBookmark(ownerID, profileID) {
        const request = this.bookmarkRepository.delete({
            owner_id: ownerID,
            profile_id: profileID,
        });
        return;
    }
};
bookmarkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('BOOKMARK_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], bookmarkService);
exports.bookmarkService = bookmarkService;
//# sourceMappingURL=bookmark.service.js.map