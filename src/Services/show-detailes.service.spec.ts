import { TestBed } from '@angular/core/testing';

import { ShowDetailesService } from './show-detailes.service';

describe('ShowDetailesService', () => {
  let service: ShowDetailesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowDetailesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
