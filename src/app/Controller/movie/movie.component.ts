import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../Services/movies.service';
import {Movie} from '../../Models/MOVIE';
import { AgmCoreModule } from '@agm/core';
import {google_maps_styles} from '../../app.module';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  private id: number;
  public movie: Movie;
  lat: number = 50.685852;
  lng: number = 7.155368;
  styles = google_maps_styles;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.route.params.subscribe( params => {
      this.id = params.id;
      console.log('id', this.id);
      this.loadMovie(this.id);
    });
  }

  ngOnInit() {
  }

  private loadMovie(id: number): void {
    this.moviesService.loadMovie(id)
      .subscribe(movie => {this.movie = movie;
        console.log('Movie Controller', this.movie);
      });
  }
}
