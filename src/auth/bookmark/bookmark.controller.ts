import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { bookmarkService } from './bookmark.service';
import { JwtAuthGuard } from '../jwt/jwt.guard';
import { AuthExceptionFilter } from '../authException.filter';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: bookmarkService) {}

  @Get('/list/:id')
  getBookmarkList(@Param('id') id: number) {
    return this.bookmarkService.getBookmarkList(id);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Post('/new/:id')
  addNewBookmark(@Req() req, @Param('id') id: number) {
    return this.bookmarkService.addToBookmark(req.user, id);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Delete('/delete/:id')
  deleteFromBookmark(@Req() req, @Param('id') id: number) {
    return this.bookmarkService.deleteFromBookmark(req.user, id);
  }
}
