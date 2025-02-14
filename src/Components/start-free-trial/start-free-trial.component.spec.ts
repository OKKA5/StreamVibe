import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFreeTrialComponent } from './start-free-trial.component';

describe('StartFreeTrialComponent', () => {
  let component: StartFreeTrialComponent;
  let fixture: ComponentFixture<StartFreeTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartFreeTrialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartFreeTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
