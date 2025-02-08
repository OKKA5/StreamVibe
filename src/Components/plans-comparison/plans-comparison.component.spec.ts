import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansComparisonComponent } from './plans-comparison.component';

describe('PlansComparisonComponent', () => {
  let component: PlansComparisonComponent;
  let fixture: ComponentFixture<PlansComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
