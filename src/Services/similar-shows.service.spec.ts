import { TestBed } from '@angular/core/testing';

import { SimilarShowsService } from './similar-shows.service';

describe('SimilarShowsService', () => {
  let service: SimilarShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimilarShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
