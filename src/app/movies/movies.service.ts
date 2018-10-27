import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Movie} from '../Models/MOVIE';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  public loadMovies(): Observable<Movie[]> {
    console.log('load movies service - url', `${environment.SERVER_URL}movies`);
    return this.http
      .get<Movie[]>(`${environment.SERVER_URL}movies`)
      .pipe(tap(movies =>
        console.log('fetched movies')
        ),
        catchError(this.handleError('loadMovies', [])));
    /*
      .subscribe((response: Movie[]) => {
          console.log('movies service call', response);
        },
        (err: Error) => {
          console.log('movies service call error');
        },
      () => {
        console.log('movies service call successfull');
    }
      );
      */
  }

  public loadMovie(id: number): Observable<any> {
    console.log('load movie service - url', `${environment.SERVER_URL}movie/${id}`);
    return this.http
      .get<Movie>(`${environment.SERVER_URL}movie/000000`)
      .pipe(tap(movie =>
          //this.log('fetched heroes')
          console.log('fetched movie', movie)
        ),
        catchError(this.handleError('getHeroes', [])));
    /*
      .subscribe((response: Movie[]) => {
          console.log('movies service call', response);
        },
        (err: Error) => {
          console.log('movies service call error');
        },
      () => {
        console.log('movies service call successfull');
    }
      );
      */
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

  /*
  public loadPremium() {
    let premium: [Movie];
    console.log('load premium - url', `${environment.SERVER_URL}movies`);
    this.http
      .get<Movie>(`${environment.SERVER_URL}movies`)
      .subscribe(
        data => {
          console.log('premium service', data);

          for (let i = 0; i < data; i++) {
            console.log(array[i]);
          }

          return premium;
        },
        err => {
          console.error('error on loading premium', err);
        },
        () => console.log('done loading premium')
      );
  }
*/

}
