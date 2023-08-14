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
exports.TraitController = void 0;
const common_1 = require("@nestjs/common");
const trait_service_1 = require("./trait.service");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const authException_filter_1 = require("../auth/authException.filter");
let TraitController = class TraitController {
    constructor(traitService) {
        this.traitService = traitService;
    }
    getAll() {
        return this.traitService.getAll();
    }
    getTraitsByUserID(id) {
        return this.traitService.getAllTraitsByID(id);
    }
    updateTraits(req, body) {
        const { c_trait, u_trait, d_trait } = body;
        console.log('got', body);
        u_trait.forEach((trait) => {
            this.traitService.updateTrait(trait);
        });
        d_trait.forEach((trait) => {
            this.traitService.deleteTrait(trait);
        });
        c_trait.forEach((trait) => {
            this.traitService.createTraits(Object.assign(Object.assign({}, trait), { userID: req.user }));
        });
        return;
    }
};
__decorate([
    (0, common_1.Get)('/traitlist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TraitController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TraitController.prototype, "getTraitsByUserID", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseFilters)(authException_filter_1.AuthExceptionFilter),
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TraitController.prototype, "updateTraits", null);
TraitController = __decorate([
    (0, common_1.Controller)('trait'),
    __metadata("design:paramtypes", [trait_service_1.traitService])
], TraitController);
exports.TraitController = TraitController;
//# sourceMappingURL=trait.controller.js.map