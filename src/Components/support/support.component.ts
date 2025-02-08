import { Component, inject } from '@angular/core';
import { FrequentlyAskedComponent } from '../frequently-asked/frequently-asked.component';
import { StartFreeTrialComponent } from '../start-free-trial/start-free-trial.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [FrequentlyAskedComponent, StartFreeTrialComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent {
  imgurl: string = '../../assets/support-img-Hgh44lun.png';
}
