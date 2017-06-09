import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YourListsComponent } from '../your-lists/your-lists.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'yourlists',  component: YourListsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

