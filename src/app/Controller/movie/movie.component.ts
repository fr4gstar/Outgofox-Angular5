import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../Services/movies.service';
import {Movie} from '../../Models/MOVIE';
import { AgmCoreModule } from '@agm/core';
import {EmbedVideoService} from 'ngx-embed-video/dist';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  private id: number;
  public movie: Movie;
  styles = environment.GOOGLEMAPS_STYLES;
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
