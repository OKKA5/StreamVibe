import { Component, inject, OnInit } from '@angular/core';
import { GetTrendingShowsService } from '../../Services/get-trending-shows.service';
import { IShows } from '../../Interfaces/ishows';
import { ShowCardComponent } from '../show-card/show-card.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-trending-shows-components',
  standalone: true,
  imports: [ShowCardComponent],
  templateUrl: './trending-shows-components.component.html',
  styleUrl: './trending-shows-components.component.css',
})
export class TrendingShowsComponentsComponent implements OnInit {
  constructor(private _GetTrendingShowsService: GetTrendingShowsService) {}
  private readonly _NgxSpinnerService = inject(NgxSpinnerService);
  Shows: IShows[] = [];
  sectionname: string = 'Trending Shows';
  ngOnInit(): void {
    
    this._GetTrendingShowsService.getTrendingShows().subscribe({
      next: (res) => (
        (this.Shows = res.results)
      ),
    });
  }
}
