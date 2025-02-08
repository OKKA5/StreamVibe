import { TestBed } from '@angular/core/testing';

import { GetPopularMoviesService } from './get-popular-movies.service';

describe('GetAllMoviesService', () => {
  let service: GetPopularMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPopularMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
