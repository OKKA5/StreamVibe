import { TestBed } from '@angular/core/testing';

import { GetPopShowsService } from './get-pop-shows.service';

describe('GetPopShowsService', () => {
  let service: GetPopShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPopShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
