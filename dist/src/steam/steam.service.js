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
exports.steamService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const user_service_1 = require("../user/user.service");
let steamService = class steamService {
    constructor(httpService, configService, userService) {
        this.httpService = httpService;
        this.configService = configService;
        this.userService = userService;
        this.STEAM_KEY = this.configService.get('STEAM_API_KEY');
        this.SteamAPI = require('steamapi');
        this.steam = new this.SteamAPI(this.STEAM_KEY);
    }
    async getAppList(id) {
        const userApp = await this.steam.getUserOwnedGames(id);
        return userApp;
    }
    async getUserProfile(steamKey) {
        console.log('getting profile of', steamKey);
        const data = await Promise.all([
            this.steam.getUserSummary(steamKey),
            this.steam.getUserOwnedGames(steamKey),
        ]);
        return { profile: data[0], appList: data[1] };
    }
    async getUserProfileByID(id) {
        const user = await this.userService.getOne(id);
        const data = await Promise.all([
            this.steam.getUserSummary(user.steamKey),
            this.steam.getUserOwnedGames(user.steamKey),
        ]);
        return {
            description: user.description,
            profile: data[0],
            appList: data[1],
        };
    }
};
steamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService,
        user_service_1.userService])
], steamService);
exports.steamService = steamService;
//# sourceMappingURL=steam.service.js.map