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
exports.FavoriteController = void 0;
const common_1 = require("@nestjs/common");
const authException_filter_1 = require("../auth/authException.filter");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const favorite_service_1 = require("./favorite.service");
let FavoriteController = class FavoriteController {
    constructor(favoriteService) {
        this.favoriteService = favoriteService;
    }
    getAll() {
        return this.favoriteService.getAll();
    }
    getDescByGameID(id) {
        return this.favoriteService.getDescByGameID(id);
    }
    getDescByUserID(id) {
        return this.favoriteService.getDescByUserID(id);
    }
    addNewGame(req, body) {
        return this.favoriteService.addNewGame(req.user, body);
    }
    deleteGame(req, id) {
        return this.favoriteService.deleteGame(req.user, id);
    }
    updateGame(req, body) {
        return this.favoriteService.updateGame(req.user, body);
    }
};
__decorate([
    (0, common_1.Get)('/gamelist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/game/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "getDescByGameID", null);
__decorate([
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "getDescByUserID", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Post)('/new'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "addNewGame", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "deleteGame", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "updateGame", null);
FavoriteController = __decorate([
    (0, common_1.Controller)('favorite'),
    __metadata("design:paramtypes", [favorite_service_1.favoriteService])
], FavoriteController);
exports.FavoriteController = FavoriteController;
//# sourceMappingURL=favorite.controller.js.map