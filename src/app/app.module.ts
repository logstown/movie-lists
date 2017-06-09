import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { TmdbService } from './tmdb.service';
import { YourListsComponent } from './your-lists/your-lists.component';
import { AddListModalComponent } from './your-lists/add-list-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    YourListsComponent,
    AddListModalComponent
  ],
  entryComponents: [
    AddListModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TmdbService],
  bootstrap: [AppComponent]
})
export class AppModule {}
