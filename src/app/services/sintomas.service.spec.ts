import { TestBed } from '@angular/core/testing';

import { SintomasService } from './sintomas.service';

describe('SintomasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SintomasService = TestBed.get(SintomasService);
    expect(service).toBeTruthy();
  });
});
