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
exports.GameController = void 0;
const common_1 = require("@nestjs/common");
const authException_filter_1 = require("../auth/authException.filter");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const game_service_1 = require("./game.service");
let GameController = class GameController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    getAll() {
        return this.gameService.getAll();
    }
    getTraitsByUserID(id) {
        return this.gameService.getAllGamesByUserID(id);
    }
    addNewGame(req, body) {
        return this.gameService.addNewGame(req.user, body);
    }
    updateGame(req, id) {
        return this.gameService.updateGame(req.user, id);
    }
    deleteGame(req, id) {
        return this.gameService.deleteGame(req.user, id);
    }
};
__decorate([
    (0, common_1.Get)('/gamelist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GameController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "getTraitsByUserID", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Post)('/new'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "addNewGame", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Patch)('/update'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "updateGame", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "deleteGame", null);
GameController = __decorate([
    (0, common_1.Controller)('game'),
    __metadata("design:paramtypes", [game_service_1.gameService])
], GameController);
exports.GameController = GameController;
//# sourceMappingURL=game.controller.js.map