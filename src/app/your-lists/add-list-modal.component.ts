import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { TvShow } from '../tv-show';

@Component({
  selector: 'app-add-list-modal',
  templateUrl: 'add-list-modal.component.html',
  styleUrls: ['./add-list-modal.component.css']
})
export class AddListModalComponent implements OnInit {
    shows: TvShow[]

  constructor(public dialogRef: MdDialogRef<AddListModalComponent>) {
      this.shows = []
  }

  ngOnInit() {
  }

  onItemSelected(show: TvShow) {
      console.log(show)
      this.shows.push(show);
  }
}