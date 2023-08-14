"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const user_entity_1 = require("./user.entity");
exports.userRepository = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(user_entity_1.Users),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=user.repository.js.map