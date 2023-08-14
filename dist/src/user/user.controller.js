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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const authException_filter_1 = require("../auth/authException.filter");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAll() {
        return this.userService.getAll();
    }
    getOne(id) {
        return this.userService.getOne(id);
    }
    updateUserDesc(req, body) {
        this.userService.updateUserDesc(req.user, body.desc);
        return;
    }
    async getCurrentUser(req) {
        return this.userService.getOne(req.user);
    }
    deleteUser(id) {
        return this.userService.deleteUser(id);
    }
    updateUsername(req, body) {
        return this.userService.updateUser(req.user, body.username);
    }
    deleteUserBySteamKey(key) {
        return this.userService.deleteUserBySteamKey(key);
    }
    updateGamerType(req, body) {
        return this.userService.updateGamerType(req.user, body.gamerType);
    }
    async saveToken(req, body) {
        return this.userService.saveToken(req.user, body.npsso);
    }
    async getPSProfile(req) {
        return this.userService.getPSGames(req.user);
    }
};
__decorate([
    (0, common_1.Post)('/userlist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Post)('/desc'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUserDesc", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Post)('/current'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getCurrentUser", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Patch)('/username'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUsername", null);
__decorate([
    (0, common_1.Delete)('/steam/:key'),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUserBySteamKey", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Patch)('/gamerType'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateGamerType", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Patch)('/ps/saveToken'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "saveToken", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Get)('/ps/games'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getPSProfile", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.userService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map