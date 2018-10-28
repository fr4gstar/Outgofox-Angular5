import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Event} from '../Models/EVENT';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  constructor(
    private http: HttpClient
  ) { }

  public loadEvents(): Observable<Event[]> {
    console.log('load events service - url', `${environment.SERVER_URL}events`);
    return this.http
      .get<Event[]>(`${environment.SERVER_URL}events`)
      .pipe(tap(events =>
          console.log('fetched events')
        ),
        catchError(this.handleError('loadEvents', [])));
  }

  public loadEvent(id: number): Observable<any> {
    console.log('load event service - url', `${environment.SERVER_URL}event/${id}`);
    return this.http
      .get<Event>(`${environment.SERVER_URL}event/${id}`)
      .pipe(tap(event =>
          //this.log('fetched heroes')
          console.log('fetched event', event)
        ),
        catchError(this.handleError('getEvent', [])));
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
    let premium: [Event];
    console.log('load premium - url', `${environment.SERVER_URL}events`);
    this.http
      .get<Event>(`${environment.SERVER_URL}events`)
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
