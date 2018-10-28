import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './Controller/movies/movies.component';
import { BannerComponent } from './Controller/banner/banner.component';
import { FilterComponent } from './Controller/filter/filter.component';
import { EventsComponent } from './Controller/events/events.component';
import {AngularDateTimePickerModule} from 'angular2-datetimepicker';
import {MoviesService} from './Services/movies.service';
import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './Controller/footer/footer.component';
import { MovieComponent } from './Controller/movie/movie.component';
import { HomeComponent } from './Controller/home/home.component';
import { EventComponent } from './Controller/event/event.component';
import { AgmCoreModule } from '@agm/core';
import {EventsService} from './Services/events.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event/:id', component: EventComponent },
  { path: '**', redirectTo: 'home' }
];
export const google_maps_styles = [{
  'featureType': 'all',
  'stylers': [{
    'saturation': -100
  }]
}];
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    BannerComponent,
    FilterComponent,
    EventsComponent,
    FooterComponent,
    MovieComponent,
    HomeComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBf7up57RzDaPTSmR2FcRwy9dRtqT-zvUM'
    }),
    AngularDateTimePickerModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: true
    })
  ],
  providers: [
    MoviesService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
