import { TestBed } from '@angular/core/testing';

import { MustWatchShowsService } from './must-watch-shows.service';

describe('MustWatchShowsService', () => {
  let service: MustWatchShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MustWatchShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
