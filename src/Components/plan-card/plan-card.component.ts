import { Component } from '@angular/core';
import { IPlan } from '../../Interfaces/iplan';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.css'
})
export class PlanCardComponent {
  plans: IPlan[] = [
    { Price: 9.99, Type: 'Basic Plan', Description: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.' },
    { Price: 12.99, Type: 'Standard Plan', Description: 'Access to a wider selection of movies and shows, including most new releases and exclusive content' },
    { Price: 14.99, Type: 'Premium Plan', Description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing' }
  ];
}
