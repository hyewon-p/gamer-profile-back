import { Test, TestingModule } from '@nestjs/testing';
import { TraitController } from './trait.controller';

describe('TraitController', () => {
  let controller: TraitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraitController],
    }).compile();

    controller = module.get<TraitController>(TraitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
