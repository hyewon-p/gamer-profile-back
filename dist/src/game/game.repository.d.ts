import { DataSource, Repository } from 'typeorm';
import { Games } from 'src/game/game.entity';
export declare const gameRepository: {
    provide: string;
    useFactory: (dataSource: DataSource) => Repository<Games>;
    inject: string[];
}[];
