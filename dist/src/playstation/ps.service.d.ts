import { ConfigService } from '@nestjs/config';
import { Users } from 'src/user/user.entity';
import { userService } from 'src/user/user.service';
import { Repository } from 'typeorm';
export declare class psService {
    private readonly configService;
    private readonly userService;
    private userRepository;
    constructor(configService: ConfigService, userService: userService, userRepository: Repository<Users>);
    saveToken(userID: number, token: string): Promise<void>;
}
