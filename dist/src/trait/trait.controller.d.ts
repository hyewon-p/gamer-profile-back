import { traitService } from './trait.service';
export declare class TraitController {
    private traitService;
    constructor(traitService: traitService);
    getAll(): Promise<import("./trait.entity").Traits[]>;
    getTraitsByUserID(id: number): Promise<import("./trait.entity").Traits[]>;
    updateTraits(req: any, body: any): void;
}
