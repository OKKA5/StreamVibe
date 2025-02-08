import { log } from 'console';
import { GetUpComingMoviesService } from './../../Services/get-up-coming-movies.service';
import { Component, inject, OnInit } from '@angular/core';
import { Imovies } from '../../Interfaces/imovies';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-up-coming-movies',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './up-coming-movies.component.html',
  styleUrl: './up-coming-movies.component.css',
})
export class UpComingMoviesComponent implements OnInit {
  constructor(private _GetUpComingMoviesService: GetUpComingMoviesService) {}
  private readonly _NgxSpinnerService = inject(NgxSpinnerService);
  UpComingMovies: Imovies[] = [];
  sectionName: string = 'Up Coming Movies';
  ngOnInit(): void {
    
    this._GetUpComingMoviesService.GetUpComingMoviesMovies().subscribe({
      next: (res) => (
        (this.UpComingMovies = res.results)
      ),
    });
  }
  splitReleaseDate(releaseDate: string): string[] {
    return releaseDate.split('-');
  }
}
