import { Component, inject, OnInit } from '@angular/core';
import { MustWatchService } from '../../Services/must-watch.service';
import { Imovies } from '../../Interfaces/imovies';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-must-watch',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './must-watch.component.html',
  styleUrl: './must-watch.component.css',
})
export class MustWatchComponent implements OnInit {
  constructor(private _MustWatchService: MustWatchService) {}
  private readonly _NgxSpinnerService=inject(NgxSpinnerService)
  movies: Imovies[] = [];
  sectionname:string="Must Watch Movies"
  ngOnInit(): void {
    
    this._MustWatchService.getMustWatchMovies().subscribe({
      next: (res) => (this.movies = res.results
       
      ),
    });
  }
}
