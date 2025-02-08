import { Component, inject, OnInit } from '@angular/core';
import { GetPopShowsService } from '../../Services/get-pop-shows.service';
import { IShows } from '../../Interfaces/ishows';
import { ShowCardComponent } from '../show-card/show-card.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pop-shows',
  standalone: true,
  imports: [ShowCardComponent],
  templateUrl: './pop-shows.component.html',
  styleUrl: './pop-shows.component.css',
})
export class PopShowsComponent implements OnInit {
  constructor(private _GetPopShowsService: GetPopShowsService) {}
  private readonly _NgxSpinnerService = inject(NgxSpinnerService);
  Shows: IShows[] = [];
  sectionname: string = 'Popular Shows';
  ngOnInit(): void {
  
    this._GetPopShowsService.getPopShows().subscribe({
      next: (res) => (
        (this.Shows = res.results)
      ),
    });
  }
}
