import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { traitService } from './trait.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { AuthExceptionFilter } from 'src/auth/authException.filter';

@Controller('trait')
export class TraitController {
  constructor(private traitService: traitService) {}

  @Get('/traitlist')
  getAll() {
    return this.traitService.getAll();
  }

  @Post('/user/:id')
  getTraitsByUserID(@Param('id') id: number) {
    return this.traitService.getAllTraitsByID(id);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(AuthExceptionFilter)
  @Put('/update')
  updateTraits(@Req() req, @Body() body) {
    const { c_trait, u_trait, d_trait } = body;
    console.log('got', body);
    u_trait.forEach((trait) => {
      this.traitService.updateTrait(trait);
    });
    d_trait.forEach((trait) => {
      this.traitService.deleteTrait(trait);
    });
    c_trait.forEach((trait) => {
      this.traitService.createTraits({ ...trait, userID: req.user });
    });
    return;
  }
}
