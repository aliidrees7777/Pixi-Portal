import { TestBed } from '@angular/core/testing';

import { LiteraryService } from './literary.service';

describe('LiteraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiteraryService = TestBed.get(LiteraryService);
    expect(service).toBeTruthy();
  });
});
