import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Imovies } from './../../Interfaces/imovies';
import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
@Input() MovieData:Imovies[]=[]
@Input() sectionName:string=""
}
 