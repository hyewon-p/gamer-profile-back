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
exports.authController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const user_service_1 = require("../user/user.service");
const auth_guard_1 = require("./auth.guard");
const auth_service_1 = require("./auth.service");
const authException_filter_1 = require("./authException.filter");
const jwt_guard_1 = require("./jwt/jwt.guard");
const config_1 = require("@nestjs/config");
let authController = class authController {
    constructor(authService, userService, configService) {
        this.authService = authService;
        this.userService = userService;
        this.configService = configService;
    }
    steamlogin() {
        return 'steam';
    }
    async callback(req, res) {
        const user = await req.user._json;
        const userInfo = await this.userService.welcomeUser('steam', user.steamid, user.personaname);
        res.setHeader('Authorization', userInfo.token);
        res.setHeader('Access-Control-Allow-Origin', this.configService.get('BASE_URL'));
        return {
            url: `${this.configService.get('BASE_URL')}/api/user?token=${userInfo.token}&id=${userInfo.id}`,
        };
    }
    async googleAuth() {
        return 'google';
    }
    async googleAuthCallback(req, res) {
        const { user } = req;
        const { token, id } = await this.userService.welcomeUser('google', user.email, user.name);
        res.setHeader('Authorization', token);
        res.setHeader('Access-Control-Allow-Origin', this.configService.get('BASE_URL'));
        return {
            url: `${this.configService.get('BASE_URL')}/api/user?token=${token}&id=${id}`,
        };
    }
    testingGuard(req) {
        console.log('testing guard passed', req);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.SteamAuthGuard),
    (0, common_1.Get)('/steam'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], authController.prototype, "steamlogin", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.SteamAuthGuard),
    (0, common_1.Get)('/steam/callback'),
    (0, common_1.Redirect)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], authController.prototype, "callback", null);
__decorate([
    (0, common_1.Get)('/google'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], authController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)('/google/callback'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    (0, common_1.Redirect)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], authController.prototype, "googleAuthCallback", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/test'),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], authController.prototype, "testingGuard", null);
authController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.authService,
        user_service_1.userService,
        config_1.ConfigService])
], authController);
exports.authController = authController;
//# sourceMappingURL=auth.controller.js.map