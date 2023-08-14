import { Inject, Injectable, UseGuards } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Traits } from './trait.entity';
import { Users } from 'src/user/user.entity';

@Injectable()
export class traitService {
  constructor(
    @Inject('TRAIT_REPOSITORY')
    private traitRepository: Repository<Traits>,
  ) {}

  async getAllTraitsByID(id: number) {
    console.log(id);
    const traits = await this.traitRepository.find({
      where: {
        userID: id,
      },
    });
    console.log(traits);
    return traits;
  }

  async updateTrait({ id, label, value }) {
    await this.traitRepository.update(id, {
      label,
      value,
    });

    return;
  }

  async deleteTrait(id) {
    await this.traitRepository.delete(id);
    return;
  }

  async createTraits({ label, value, userID }) {
    const newTrait = this.traitRepository.create({ label, value, userID });
    await this.traitRepository.save(newTrait);
    return;
  }

  async getAll() {
    const traits = await this.traitRepository.find({});
    return traits;
  }
}
