import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { BannerComponent } from './banner/banner.component';
import { FilterComponent } from './filter/filter.component';
import { EventsComponent } from './events/events.component';
import {AngularDateTimePickerModule} from 'angular2-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    BannerComponent,
    FilterComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularDateTimePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
