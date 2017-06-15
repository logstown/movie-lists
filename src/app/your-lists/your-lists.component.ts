import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AddListModalComponent } from './add-list-modal.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-your-lists',
  templateUrl: './your-lists.component.html',
  styleUrls: ['./your-lists.component.css']
})
export class YourListsComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  constructor(public dialog: MdDialog, db: AngularFireDatabase) {
    this.items = db.list('/movies');
   }

  ngOnInit() {
  }

  openAddListModal() {
    let dialogRef = this.dialog.open(AddListModalComponent, {width: '100%'});
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
