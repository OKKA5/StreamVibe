import { Component, OnInit, inject } from '@angular/core';
import { GetPopularMoviesService } from '../../Services/get-popular-movies.service';
import { Imovies } from '../../Interfaces/imovies';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pop-movies',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './pop-movies.component.html',
  styleUrl: './pop-movies.component.css',
})
export class PopMoviesComponent implements OnInit {
  constructor(private _GetPopularMoviesService: GetPopularMoviesService) {}
  private readonly _NgxSpinnerService = inject(NgxSpinnerService);
  movies: Imovies[] = [];
  sectionname: string = 'Trending Movies';
  ngOnInit(): void {
    
    this._GetPopularMoviesService.GetAllMovies().subscribe({
      next: (res) => {
        this.movies = res.results;
        
      },
    });
  }
}
