import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { TvShow } from '../tv-show';
import { TmdbService } from '../tmdb.service';

// Observable class extensions
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-tmdb-search',
  templateUrl: './tmdb-search.component.html',
  styleUrls: ['./tmdb-search.component.css']
})
export class TmdbSearchComponent implements OnInit {
  @Output() onItemSelected = new EventEmitter<TvShow>();

  showControl: FormControl;
  filteredShows: any;

  constructor(private tmdbService: TmdbService) {
      this.showControl = new FormControl();
  }

  ngOnInit() {
    this.filteredShows = this.showControl.valueChanges
        .startWith(null)
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term ? this.tmdbService.search(term) : Observable.of < TvShow[] > ([]))
  }

  selected(show: TvShow) {
    this.onItemSelected.emit(show);

    this.showControl.reset();
  }
}
