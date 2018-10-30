import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../Services/movies.service';
import {Observable} from 'rxjs';
import {Movie} from '../../Models/MOVIE';
import {ActivatedRoute, Router} from '@angular/router';
import {element} from 'protractor';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import * as uikit from 'uikit';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies: Movie[];
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loadMovies();
  }

  ngOnInit() {
  }

  private loadMovies(): void {
   this.moviesService.loadMovies()
     .subscribe(movies => {this.movies = movies;
       console.log('movies controller', this.movies);
     });
  }

  public openMovie(id) {
    this.router.navigate(['movie/' + id]);
  }

  public getYoutubeImage(id_youtube) {
    return this.moviesService.getYoutubeImage(id_youtube);
  }

  public getYoutubeVideoURL(id_youtube) {
    return this.moviesService.getYoutubeVideoURL(id_youtube);
  }

  public closeYoutubeTrailer(id_youtube): void {
    return this.moviesService.closeYoutubeTrailer(id_youtube);
  }

}
