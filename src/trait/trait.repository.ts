import { DataSource, Entity, Repository } from 'typeorm';
import { Traits } from './trait.entity';

export const traitRepository = [
  {
    provide: 'TRAIT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Traits),
    inject: ['DATA_SOURCE'],
  },
];
