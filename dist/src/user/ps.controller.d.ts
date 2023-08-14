import { psService } from './ps.service';
export declare class PSController {
    private psService;
    constructor(psService: psService);
    saveToken(req: any, body: any): Promise<void>;
}
