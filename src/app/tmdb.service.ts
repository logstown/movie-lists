import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { TvShow, Movie } from './media.models';

const baseUrl = 'https://api.themoviedb.org/3/'
const apiString = 'api_key=e71bd965e4a75d68bf310cd490673dc3'

@Injectable()
export class TmdbService {
  config: object
  constructor(private http: Http) {}

  searchTvShows(term: string): Observable < TvShow[] > {
    return this.http
      .get(baseUrl + 'search/tv?' + apiString + '&query=' + term)
      .map(response => response.json().results as TvShow[]);
  }

  searchMovies(term: string): Observable < Movie[] > {
    return this.http
      .get(baseUrl + 'search/movie?' + apiString + '&query=' + term)
      .map(response => response.json().results as Movie[]);
  }

  getConfig(): Promise <object> {
    return this.http.get(baseUrl + 'configuration?' + apiString)
      .toPromise()
      .then(response => response.json() as object)
  }

  loadConfig() {
    this.getConfig()
    .then((config) => {
      this.config = config;

      console.log(this.config)
    })
  }
}
