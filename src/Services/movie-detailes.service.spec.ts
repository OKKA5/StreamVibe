import { TestBed } from '@angular/core/testing';

import { MovieDetailesService } from './movie-detailes.service';

describe('MovieDetailesService', () => {
  let service: MovieDetailesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDetailesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
