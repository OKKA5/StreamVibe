import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustWatchShowsComponent } from './must-watch-shows.component';

describe('MustWatchShowsComponent', () => {
  let component: MustWatchShowsComponent;
  let fixture: ComponentFixture<MustWatchShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MustWatchShowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustWatchShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
