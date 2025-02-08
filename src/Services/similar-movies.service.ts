import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimilarMoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getSimilarMovies(Id:string):Observable<any>{
    let ApiKey = '?api_key=4d1331fcefb495095edb04a4b2c09096';
    let url = `https://api.themoviedb.org/3/movie/${Id}/similar`;
    let SimilarMoviesUrl=url+ApiKey
    return this._HttpClient.get(SimilarMoviesUrl)
  }
}
