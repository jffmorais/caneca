import { TestBed } from '@angular/core/testing';

import { CanecasService } from './canecas.service';

describe('CanecasService', () => {
  let service: CanecasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanecasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
