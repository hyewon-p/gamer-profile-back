import { DataSource, Repository } from 'typeorm';
import { Users } from './user.entity';
export declare const userRepository: {
    provide: string;
    useFactory: (dataSource: DataSource) => Repository<Users>;
    inject: string[];
}[];
