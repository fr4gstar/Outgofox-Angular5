import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies: any;

  constructor(
    private http: HttpClient
  ) {
    this.loadMovies();
  }

  ngOnInit() {
  }

  public convertToDate(date) {
    return new Date(date);
  }

  private loadMovies() {
    console.log('url', `${environment.SERVER_URL}movies`);
    this.http
      .get(`${environment.SERVER_URL}movies`)
      .subscribe(
        data => {
          this.movies = data;
          console.log('movies', this.movies);
        },
        err => {
          console.error('error on loading movies', err);
        },
        () => console.log('done loading movies')
      );
  }
}
