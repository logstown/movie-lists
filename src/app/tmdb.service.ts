import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TvShow } from './tv-show';

const baseUrl = 'https://api.themoviedb.org/3/'

@Injectable()
export class TmdbService {

  constructor(private http: Http) {}

  search(term: string): Observable < TvShow[] > {
    return this.http
      .get(baseUrl + 'search/tv?api_key=e71bd965e4a75d68bf310cd490673dc3&query=' + term)
      .map(response => response.json().results as TvShow[]);
  }

}
