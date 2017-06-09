import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TmdbService } from './tmdb.service';
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TvShow } from './tv-show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  stateCtrl: FormControl;
  filteredStates: any;

  constructor(private tmdbService: TmdbService) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.tmdbService.search(term) : Observable.of < TvShow[] > ([]))
  }

  // filterStates(val: string) {
  //   return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s)) : this.states;
  // }
}
