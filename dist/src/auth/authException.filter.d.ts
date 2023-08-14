import { ArgumentsHost, ExceptionFilter, UnauthorizedException } from '@nestjs/common';
export declare class AuthExceptionFilter implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost): void;
}
