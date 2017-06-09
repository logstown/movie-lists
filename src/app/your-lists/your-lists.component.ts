import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AddListModalComponent } from './add-list-modal.component';

@Component({
  selector: 'app-your-lists',
  templateUrl: './your-lists.component.html',
  styleUrls: ['./your-lists.component.css']
})
export class YourListsComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openAddListModal() {
    let dialogRef = this.dialog.open(AddListModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
