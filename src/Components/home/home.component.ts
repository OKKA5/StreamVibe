import { Component, inject, OnInit } from '@angular/core';
import { FrequentlyAskedComponent } from "../frequently-asked/frequently-asked.component";
import { StartFreeTrialComponent } from "../start-free-trial/start-free-trial.component";
import { DevicesComponent } from "../devices/devices.component";
import { RouterLink} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FrequentlyAskedComponent, StartFreeTrialComponent,DevicesComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  private readonly _NgxSpinnerService = inject(NgxSpinnerService);

  
}
