"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traitRepository = void 0;
const trait_entity_1 = require("./trait.entity");
exports.traitRepository = [
    {
        provide: 'TRAIT_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(trait_entity_1.Traits),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=trait.repository.js.map