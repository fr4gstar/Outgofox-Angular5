import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events: any;

  constructor(
    private http: HttpClient
  ) {
    this.loadEvents();
  }

  ngOnInit() {
  }

  private loadEvents() {
    console.log('url', `${environment.SERVER_URL}events`);
    this.http
      .get(`${environment.SERVER_URL}events`)
      .subscribe(
        data => {
          this.events = data;
          console.log('events', this.events);
        },
        err => {
          console.error('error on loading events', err);
        },
        () => console.log('done loading events')
      );
  }
}
