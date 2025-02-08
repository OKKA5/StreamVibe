import { Component } from '@angular/core';
import { StartFreeTrialComponent } from "../start-free-trial/start-free-trial.component";
import { PlanCardComponent } from "../plan-card/plan-card.component";
import { PlansComparisonComponent } from "../plans-comparison/plans-comparison.component";

@Component({
  selector: 'app-subscribtions',
  standalone: true,
  imports: [StartFreeTrialComponent, PlanCardComponent, PlansComparisonComponent],
  templateUrl: './subscribtions.component.html',
  styleUrl: './subscribtions.component.css'
})
export class SubscribtionsComponent {

}
