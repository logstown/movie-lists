import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-list-modal',
  templateUrl: 'add-list-modal.component.html',
})
export class AddListModalComponent implements OnInit {
  constructor(public dialogRef: MdDialogRef<AddListModalComponent>) {}

  ngOnInit() {
  }
}