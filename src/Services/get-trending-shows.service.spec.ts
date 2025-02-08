import { TestBed } from '@angular/core/testing';

import { GetTrendingShowsService } from './get-trending-shows.service';

describe('GetTrendingShowsService', () => {
  let service: GetTrendingShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTrendingShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
