"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const user_module_1 = require("../user/user.module");
const user_service_1 = require("../user/user.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_refresh_strategy_1 = require("./jwt-refresh/jwt-refresh.strategy");
const jwt_strategy_1 = require("./jwt/jwt.strategy");
const steam_strategy_1 = require("./steam.strategy");
const google_strategy_1 = require("./google/google.strategy");
let authModule = class authModule {
};
authModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt', session: false }),
            jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: '1y' },
            }),
        ],
        providers: [
            steam_strategy_1.SteamStrategy,
            jwt_strategy_1.JwtStrategy,
            auth_service_1.authService,
            jwt_refresh_strategy_1.JwtRefreshStrategy,
            user_service_1.userService,
            google_strategy_1.GoogleStrategy,
        ],
        controllers: [auth_controller_1.authController],
        exports: [auth_service_1.authService],
    })
], authModule);
exports.authModule = authModule;
//# sourceMappingURL=auth.module.js.map