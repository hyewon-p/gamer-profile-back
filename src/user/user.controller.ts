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
import { UserDto } from './user.dto';
import { userService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { AuthExceptionFilter } from 'src/auth/authException.filter';

@Controller('user')
export class UserController {
  constructor(private userService: userService) {}
  @Post('/userlist')
  getAll() {
    return this.userService.getAll();
  }

  @Post('/id/:id')
  getOne(@Param('id') id: number) {
    return this.userService.getOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Post('/desc')
  updateUserDesc(@Req() req, @Body() body) {
    // console.log(req.user, body);
    this.userService.updateUserDesc(req.user, body.desc);
    return;
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Post('/current')
  async getCurrentUser(@Req() req) {
    return this.userService.getOne(req.user);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Patch('/username')
  updateUsername(@Req() req, @Body() body) {
    return this.userService.updateUser(req.user, body.username);
  }

  @Delete('/steam/:key')
  deleteUserBySteamKey(@Param('key') key: string) {
    return this.userService.deleteUserBySteamKey(key);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Patch('/gamerType')
  updateGamerType(@Req() req, @Body() body) {
    return this.userService.updateGamerType(req.user, body.gamerType);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Patch('/ps/saveToken')
  async saveToken(@Req() req, @Body() body) {
    return this.userService.saveToken(req.user, body.npsso);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Get('/ps/games')
  async getPSProfile(@Req() req) {
    return this.userService.getPSGames(req.user);
  }
}
