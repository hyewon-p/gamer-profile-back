import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthExceptionFilter } from 'src/auth/authException.filter';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { gameService } from 'src/game/game.service';

@Controller('game')
export class GameController {
  constructor(private gameService: gameService) {}

  @Get('/gamelist')
  getAll() {
    return this.gameService.getAll();
  }

  @Get('/user/:id')
  getTraitsByUserID(@Param('id') id: number) {
    return this.gameService.getAllGamesByUserID(id);
  }
  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Post('/new')
  addNewGame(@Req() req, @Body() body) {
    return this.gameService.addNewGame(req.user, body);
  }
  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Patch('/update')
  updateGame(@Req() req, @Param('id') id) {
    return this.gameService.updateGame(req.user, id);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Delete('/delete/:id')
  deleteGame(@Req() req, @Param('id') id) {
    return this.gameService.deleteGame(req.user, id);
  }
}
