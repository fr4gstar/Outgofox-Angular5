import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { BannerComponent } from './banner/banner.component';
import { FilterComponent } from './filter/filter.component';
import { EventsComponent } from './events/events.component';
import {AngularDateTimePickerModule} from 'angular2-datetimepicker';
import {MoviesService} from './movies/movies.service';
import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    BannerComponent,
    FilterComponent,
    EventsComponent,
    FooterComponent,
    MovieComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularDateTimePickerModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: true
    })
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
