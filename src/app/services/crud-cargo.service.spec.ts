import { TestBed } from '@angular/core/testing';

import { CrudCargoService } from './crud-cargo.service';

describe('CrudCargoService', () => {
  let service: CrudCargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudCargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
