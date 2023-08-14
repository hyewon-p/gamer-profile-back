import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthExceptionFilter } from 'src/auth/authException.filter';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { gameService } from 'src/game/game.service';
import { favoriteService } from './favorite.service';

@Controller('favorite')
export class FavoriteController {
  constructor(private favoriteService: favoriteService) {}

  @Get('/gamelist')
  getAll() {
    return this.favoriteService.getAll();
  }

  @Get('/game/:id')
  getDescByGameID(@Param('id') id: number) {
    return this.favoriteService.getDescByGameID(id);
  }
  @Get('/user/:id')
  getDescByUserID(@Param('id') id: number) {
    return this.favoriteService.getDescByUserID(id);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Post('/new')
  addNewGame(@Req() req, @Body() body) {
    return this.favoriteService.addNewGame(req.user, body);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Delete('/delete/:id')
  deleteGame(@Req() req, @Param('id') id: number) {
    return this.favoriteService.deleteGame(req.user, id);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Put('/update')
  updateGame(@Req() req, @Body() body) {
    return this.favoriteService.updateGame(req.user, body);
  }
}
