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
exports.Games = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const favorite_entity_1 = require("../favorite/favorite.entity");
let Games = class Games {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Games.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], Games.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.Users),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.Users)
], Games.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Games.prototype, "gameID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Games.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Games.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Games.prototype, "platform", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Games.prototype, "playtime", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => favorite_entity_1.FavoriteGames, (favorite) => favorite.game_id),
    __metadata("design:type", favorite_entity_1.FavoriteGames)
], Games.prototype, "favorite", void 0);
Games = __decorate([
    (0, typeorm_1.Entity)({ name: 'games' })
], Games);
exports.Games = Games;
//# sourceMappingURL=game.entity.js.map