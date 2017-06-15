import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { SortablejsModule } from 'angular-sortablejs';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { TmdbService } from './tmdb.service';
import { YourListsComponent } from './your-lists/your-lists.component';
import { AddListModalComponent } from './your-lists/add-list-modal.component';
import { TmdbSearchComponent } from './tmdb-search/tmdb-search.component';

@NgModule({
  declarations: [
    AppComponent,
    YourListsComponent,
    AddListModalComponent,
    TmdbSearchComponent
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
    AppRoutingModule,
    SortablejsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [TmdbService],
  bootstrap: [AppComponent]
})
export class AppModule {}
