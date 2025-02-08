import { SimilarMoviesService } from './../../Services/similar-movies.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieDetailesService } from '../../Services/movie-detailes.service';
import { IMovieDetailes } from '../../Interfaces/imovie-detailes';
import { Imovies } from '../../Interfaces/imovies';
import { StartFreeTrialComponent } from "../start-free-trial/start-free-trial.component";
@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterLink, StartFreeTrialComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MovieDetailesService: MovieDetailesService,
    private _SimilarMoviesService: SimilarMoviesService
  ) {}
  MovieId: string = '';
  MovieDetailes: IMovieDetailes = {} as IMovieDetailes;
  SimilarMovies: Imovies[] = [];
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        const id = p.get('id');
        if (id) {
          this.MovieId = id;
        }
        this._MovieDetailesService.getMovieDetailes(this.MovieId).subscribe({
          next: (res) => {
            this.MovieDetailes = res;
          },
        });
        this._SimilarMoviesService.getSimilarMovies(this.MovieId).subscribe({
          next: (res) => {
            this.SimilarMovies = res.results;
          },
        });
      },
    });
  }
}
