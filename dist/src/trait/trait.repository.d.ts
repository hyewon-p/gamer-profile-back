import { DataSource, Repository } from 'typeorm';
import { Traits } from './trait.entity';
export declare const traitRepository: {
    provide: string;
    useFactory: (dataSource: DataSource) => Repository<Traits>;
    inject: string[];
}[];
