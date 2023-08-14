import { DataSource, Entity, Repository } from 'typeorm';
import { Users } from './user.entity';

export const userRepository = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
];
