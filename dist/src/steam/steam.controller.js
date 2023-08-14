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
exports.SteamController = void 0;
const common_1 = require("@nestjs/common");
const authException_filter_1 = require("../auth/authException.filter");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const steam_service_1 = require("./steam.service");
let SteamController = class SteamController {
    constructor(steamService) {
        this.steamService = steamService;
    }
    async profile(req) {
        const userID = req.user;
        console.log('key:', userID);
        const profile = await this.steamService.getUserProfileByID(userID);
        return profile;
    }
    async profileByID(id) {
        const profile = await this.steamService.getUserProfileByID(id);
        return profile;
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Post)('/profile'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SteamController.prototype, "profile", null);
__decorate([
    (0, common_1.Post)('/profile/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SteamController.prototype, "profileByID", null);
SteamController = __decorate([
    (0, common_1.Controller)('steam'),
    __metadata("design:paramtypes", [steam_service_1.steamService])
], SteamController);
exports.SteamController = SteamController;
//# sourceMappingURL=steam.controller.js.map