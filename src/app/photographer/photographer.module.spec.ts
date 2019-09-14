import { PhotographerModule } from './photographer.module';

describe('PhotographerModule', () => {
  let photographerModule: PhotographerModule;

  beforeEach(() => {
    photographerModule = new PhotographerModule();
  });

  it('should create an instance', () => {
    expect(photographerModule).toBeTruthy();
  });
});
