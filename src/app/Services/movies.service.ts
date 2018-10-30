import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Movie} from '../Models/MOVIE';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import * as uikit from 'uikit';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
    private _sanitizer: DomSanitizer
  ) { }

  public loadMovies(): Observable<Movie[]> {
    console.log('load movies service - url', `${environment.SERVER_URL}movies`);
    return this.http
      .get<Movie[]>(`${environment.SERVER_URL}movies`)
      .pipe(tap(movies =>
        console.log('fetched movies')
        ),
        catchError(this.handleError('loadMovies', [])));
  }

  public loadMovie(id: number): Observable<any> {
    console.log('load movie service - url', `${environment.SERVER_URL}movie/${id}`);
    return this.http
      .get<Movie>(`${environment.SERVER_URL}movie/${id}`)
      .pipe(tap(movie =>
          //this.log('fetched heroes')
          console.log('fetched movie', movie)
        ),
        catchError(this.handleError('getHeroes', [])));
  }


  public getYoutubeImage(id_youtube) {
    const url = 'https://img.youtube.com/vi/' + id_youtube + '/hqdefault.jpg';
    return this._sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

  public getYoutubeVideoURL(id_youtube) {
    const url = 'https://www.youtube-nocookie.com/embed/' + id_youtube;
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  closeYoutubeTrailer(id_youtube): void {
    uikit.video('video_{{id_youtube}}', 'stopVideo');
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
