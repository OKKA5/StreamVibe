import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUpComingMoviesService {

  constructor(private _HttpClient:HttpClient) { }
  GetUpComingMoviesMovies(): Observable<any> {
      let ApiKey = '?api_key=4d1331fcefb495095edb04a4b2c09096';
      let url = 'https://api.themoviedb.org/3/movie/upcoming';
      let movieUrl = url+ApiKey ;
      return this._HttpClient.get(movieUrl)
    }
}
