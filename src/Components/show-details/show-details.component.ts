import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { SimilarShowsService } from '../../Services/similar-shows.service';
import { IShows } from '../../Interfaces/ishows';
import { ShowDetailesService } from '../../Services/show-detailes.service';
import { IShowDetailes } from '../../Interfaces/ishow-detailes';
import { StartFreeTrialComponent } from "../start-free-trial/start-free-trial.component";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [RouterLink, StartFreeTrialComponent],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css',
})
export class ShowDetailsComponent implements OnInit {
  constructor(
    private _SimilarShowsService: SimilarShowsService,
    private _ActivatedRoute: ActivatedRoute,
    private _ShowDetailesService: ShowDetailesService
  ) {}
  private readonly _NgxSpinnerService=inject(NgxSpinnerService)
  SimilarShows: IShows[] = [];
  ShowDetailes  = {} as IShowDetailes;
  ShowId: string = '';
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        const id = p.get('id');
        if (id) {
          this.ShowId = id;
        }
        this._ShowDetailesService.getShowDetailes(this.ShowId).subscribe({
          next: (res) => {
            this.ShowDetailes = res;
          },
        });
        this._SimilarShowsService.getSimilarShows(this.ShowId).subscribe({
          next: (res) => {
            this.SimilarShows = res.results;
          },
        });
      },
    });
  }
}
