import { Component, Input } from '@angular/core';
import { IShows } from '../../Interfaces/ishows';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
@Input() ShowData:IShows[]=[]
@Input() sectionname:string=""
}
