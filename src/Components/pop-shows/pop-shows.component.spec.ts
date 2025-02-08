import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopShowsComponent } from './pop-shows.component';

describe('PopShowsComponent', () => {
  let component: PopShowsComponent;
  let fixture: ComponentFixture<PopShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopShowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
