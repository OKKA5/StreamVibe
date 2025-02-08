import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTrendingShowsService {

  constructor(private _HttpClient:HttpClient) {}
  getTrendingShows():Observable<any>{
    let ApiKey = '?api_key=4d1331fcefb495095edb04a4b2c09096';
    let url = 'https://api.themoviedb.org/3/tv/airing_today';
    let ShowUrl =url+ApiKey
    return this._HttpClient.get(ShowUrl)
  }
}
