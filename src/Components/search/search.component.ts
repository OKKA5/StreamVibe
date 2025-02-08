import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../Services/search.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(
    private _SearchService: SearchService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  SearchQuery: string | null = '';
  SearchedItems: any[] = [];
  ngOnInit(): void {
    this._ActivatedRoute.queryParamMap.subscribe({
      next: (p) => {
        this.SearchQuery = p.get('search');
        this._SearchService.getSearchItem(this.SearchQuery).subscribe({
          next: (res) => {
            console.log(res.results)
            this.SearchedItems = res.results;
          },
        });
      },
    });
  }
}
