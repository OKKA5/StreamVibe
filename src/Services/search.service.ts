import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private _HttpClient: HttpClient) {}
  getSearchItem(SearchQuery: string|null): Observable<any> {
    let ApiKey = `?api_key=4d1331fcefb495095edb04a4b2c09096&query=${SearchQuery}`;
    let url = 'https://api.themoviedb.org/3/search/multi';
    let SearchUrl = url + ApiKey;
    return this._HttpClient.get(SearchUrl);
  }
}
