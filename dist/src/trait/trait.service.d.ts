import { Repository } from 'typeorm';
import { Traits } from './trait.entity';
export declare class traitService {
    private traitRepository;
    constructor(traitRepository: Repository<Traits>);
    getAllTraitsByID(id: number): Promise<Traits[]>;
    updateTrait({ id, label, value }: {
        id: any;
        label: any;
        value: any;
    }): Promise<void>;
    deleteTrait(id: any): Promise<void>;
    createTraits({ label, value, userID }: {
        label: any;
        value: any;
        userID: any;
    }): Promise<void>;
    getAll(): Promise<Traits[]>;
}
