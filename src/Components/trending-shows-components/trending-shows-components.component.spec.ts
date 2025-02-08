import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingShowsComponentsComponent } from './trending-shows-components.component';

describe('TrendingShowsComponentsComponent', () => {
  let component: TrendingShowsComponentsComponent;
  let fixture: ComponentFixture<TrendingShowsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingShowsComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingShowsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
