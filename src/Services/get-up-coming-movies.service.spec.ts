import { TestBed } from '@angular/core/testing';

import { GetUpComingMoviesService } from './get-up-coming-movies.service';

describe('GetUpComingMoviesService', () => {
  let service: GetUpComingMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUpComingMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
