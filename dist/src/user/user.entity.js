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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const bookmark_entity_1 = require("../auth/bookmark/bookmark.entity");
const favorite_entity_1 = require("../favorite/favorite.entity");
const trait_entity_1 = require("../trait/trait.entity");
const typeorm_1 = require("typeorm");
let Users = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "steamKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "psToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Users.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Users.prototype, "gamerType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => trait_entity_1.Traits, (traits) => traits.user),
    __metadata("design:type", Array)
], Users.prototype, "traits", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => favorite_entity_1.FavoriteGames, (favorite) => favorite.user, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Users.prototype, "favorite", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => bookmark_entity_1.Bookmarks, (bookmarks) => bookmarks.owner),
    __metadata("design:type", Array)
], Users.prototype, "bookmarks", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], Users);
exports.Users = Users;
//# sourceMappingURL=user.entity.js.map