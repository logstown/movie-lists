import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {}

  // filterStates(val: string) {
  //   return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s)) : this.states;
  // }
}
