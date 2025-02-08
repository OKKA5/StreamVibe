import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowDetailesService {
  constructor(private _HttpClient: HttpClient) {}
  getShowDetailes(Id: string): Observable<any> {
    let ApiKey = '?api_key=4d1331fcefb495095edb04a4b2c09096';
    let url = `https://api.themoviedb.org/3/tv/${Id}`;
    let ShowDetailsUrl = url + ApiKey;
    return this._HttpClient.get(ShowDetailsUrl);
  }
}
