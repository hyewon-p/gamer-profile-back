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
exports.userService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let userService = class userService {
    constructor(userRepository, jwtService, configService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.configService = configService;
        this.psAPI = require('psn-api');
    }
    async getCurrentUser(userID) {
        const user = await this.userRepository.findOneBy({
            id: userID,
        });
        console.log('user:', user.id);
        return user.id;
    }
    async welcomeUser(strategy, key, username) {
        let user;
        let token;
        if (strategy === 'steam') {
            user = await this.userRepository.findOneBy({
                steamKey: key,
            });
            if (user) {
                token = user.refreshToken;
                return { token: token, id: user.id };
            }
            else {
                user = this.userRepository.create({
                    steamKey: key,
                    username: username,
                });
            }
        }
        else if (strategy === 'google') {
            user = await this.userRepository.findOneBy({
                email: key,
            });
            if (user) {
                token = user.refreshToken;
                return { token: token, id: user.id };
            }
            else {
                user = this.userRepository.create({
                    email: key,
                    username: username,
                });
            }
        }
        await this.userRepository.save(user);
        token = this.getJwtRefreshToken(user.id).refreshToken;
        await this.userRepository.update(user.id, { refreshToken: token });
        return { token: token, id: user.id };
    }
    getJwtRefreshToken(userID) {
        const payload = { userID: userID };
        const token = 'Bearer ' +
            this.jwtService.sign(payload, {
                secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
                expiresIn: `${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`,
            });
        return {
            refreshToken: token,
            maxAge: Number(this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')) *
                1000,
        };
    }
    async getAll() {
        return await this.userRepository.find({});
    }
    async getOne(id) {
        const user = await this.userRepository.findOneBy({ id: id });
        if (!user) {
            return;
        }
        return user;
    }
    async getUserByUserKey(steamKey) {
        const user = await this.userRepository.findOneBy({
            steamKey: steamKey,
        });
        return user;
    }
    async updateUserDesc(id, desc) {
        const user = await this.userRepository.update(id, {
            description: desc,
        });
        return;
    }
    async updateUser(id, username) {
        const user = await this.userRepository.update(id, {
            username,
        });
        if (!user) {
            return 'no users found';
        }
        return user;
    }
    async updateGamerType(userID, gamerType) {
        await this.userRepository.update(userID, {
            gamerType: gamerType,
        });
        return;
    }
    async deleteUser(id) {
        const user = await this.userRepository.delete(id);
        if (!user) {
            return 'no users found';
        }
        return user;
    }
    async deleteUserBySteamKey(key) {
        const user = await this.userRepository.delete({ steamKey: key });
        if (!user) {
            return 'no users found';
        }
        return user;
    }
    async saveToken(userID, npsso) {
        await this.userRepository.update(userID, { psToken: npsso });
        return;
    }
    async getPSGames(userID) {
        const user = await this.getOne(userID);
        const token = await this.psAPI.exchangeNpssoForCode(user.psToken);
        const authorization = await this.psAPI.exchangeCodeForAccessToken(token);
        const response = await this.psAPI.getRecentlyPlayedGames(authorization);
        return response;
    }
};
userService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService,
        config_1.ConfigService])
], userService);
exports.userService = userService;
//# sourceMappingURL=user.service.js.map