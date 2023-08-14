import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnauthorizedException,
} from '@nestjs/common';

@Catch(UnauthorizedException)
export class AuthExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      path: request.url,
    });
  }
}
