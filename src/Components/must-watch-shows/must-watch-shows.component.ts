import { Component, inject, OnInit } from '@angular/core';
import { MustWatchService } from '../../Services/must-watch.service';
import { IShows } from '../../Interfaces/ishows';
import { ShowCardComponent } from '../show-card/show-card.component';
import { MustWatchShowsService } from '../../Services/must-watch-shows.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-must-watch-shows',
  standalone: true,
  imports: [ShowCardComponent],
  templateUrl: './must-watch-shows.component.html',
  styleUrl: './must-watch-shows.component.css',
})
export class MustWatchShowsComponent implements OnInit {
  constructor(private MustWatchShowsService: MustWatchShowsService) {}
  private readonly _NgxSpinnerService = inject(NgxSpinnerService);
  Shows: IShows[] = [];
  sectionname: string = 'Must Watch Shows';
  ngOnInit(): void {
    
    this.MustWatchShowsService.getMustWatchShows().subscribe({
      next: (res) => (
        (this.Shows = res.results)
      ),
    });
  }
}
