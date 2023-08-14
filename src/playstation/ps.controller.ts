import {
  Body,
  Controller,
  Post,
  Put,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { psService } from './ps.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { AuthExceptionFilter } from 'src/auth/authException.filter';

@Controller('ps')
export class PSController {
  constructor(private psService: psService) {}
}
