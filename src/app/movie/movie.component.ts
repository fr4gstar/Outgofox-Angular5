import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../movies/movies.service';
import {Movie} from '../Models/MOVIE';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  private id: number;
  public movie: Movie;
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
