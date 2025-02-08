import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPopShowsService {
  constructor(private _HttpClient:HttpClient) { }
  getPopShows():Observable<any>{
    let ApiKey = '?api_key=4d1331fcefb495095edb04a4b2c09096';
    let url = 'https://api.themoviedb.org/3/tv/popular';
    let showUrl=url+ApiKey
    return this._HttpClient.get(showUrl)
  }
}
