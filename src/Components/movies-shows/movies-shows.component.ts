import { Component } from '@angular/core';
import { PopMoviesComponent } from "../pop-movies/pop-movies.component";
import { UpComingMoviesComponent } from "../up-coming-movies/up-coming-movies.component";
import { MustWatchComponent } from "../must-watch/must-watch.component";
import { PopShowsComponent } from '../pop-shows/pop-shows.component';
import { TrendingShowsComponentsComponent } from "../trending-shows-components/trending-shows-components.component";
import { MustWatchShowsComponent } from "../must-watch-shows/must-watch-shows.component";
import { StartFreeTrialComponent } from "../start-free-trial/start-free-trial.component";

@Component({
  selector: 'app-movies-shows',
  standalone: true,
  imports: [PopMoviesComponent, UpComingMoviesComponent, MustWatchComponent, PopShowsComponent, TrendingShowsComponentsComponent, MustWatchShowsComponent, StartFreeTrialComponent],
  templateUrl: './movies-shows.component.html',
  styleUrl: './movies-shows.component.css'
})
export class MoviesShowsComponent {

}
