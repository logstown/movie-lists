import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { TvShow, Movie } from '../media.models';
import { TmdbService } from '../tmdb.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { SortablejsOptions } from 'angular-sortablejs';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-add-list-modal',
  templateUrl: 'add-list-modal.component.html',
  styleUrls: ['./add-list-modal.component.css']
})
export class AddListModalComponent implements OnInit {
    availableShows: TvShow[];
    yourTvShowList: TvShow[];
    config: object;
    listType: string;
    tvShowControl: FormControl;
    movieControl: FormControl;
    filteredTvShowsAsync: any;
    filteredMoviesAsync: any;
    sortablejsOptions: SortablejsOptions

  constructor(public dialogRef: MdDialogRef<AddListModalComponent>, private tmdbService: TmdbService) {
      this.availableShows = [];
      this.yourTvShowList = [];
      this.tvShowControl = new FormControl();
      this.movieControl = new FormControl();
      this.listType = 'show';

      this.sortablejsOptions = { 
          animation: 150, 
          ghostClass: 'ghost', 
          onMove: function(evt: any): boolean {
                // if(originalEvent) {
                // console.log(originalEvent.clientY)
                // }

                console.log(evt);

                return true;
            }
    }
  }

  ngOnInit() {
      this.config = this.tmdbService.config;
      
      this.filteredTvShowsAsync = this.tvShowControl.valueChanges
        .startWith(null)
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term ? this.tmdbService.searchTvShows(term) : Observable.of < TvShow[] > ([]))
        .map(shows => {
            shows = shows.filter(show => {return show.poster_path})
            return shows.slice(0,4);
        })  

    this.filteredTvShowsAsync
        .subscribe((shows) => {
            this.availableShows = shows
        })
        
      this.filteredMoviesAsync = this.movieControl.valueChanges
        .startWith(null)
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term ? this.tmdbService.searchMovies(term) : Observable.of < Movie[] > ([]))
  }

  addShow(show: TvShow) {
    this.tvShowControl.reset();

    setTimeout(() => {
        this.yourTvShowList.push(show);
    }, 500);
  }
  addFirst() {
    this.addShow(this.availableShows[0])
  }

  onMove(evt, originalEvent) {
      if(originalEvent) {
      console.log(originalEvent.clientY)
      }
  }

  onStart() {
      console.log('start')
  }
}