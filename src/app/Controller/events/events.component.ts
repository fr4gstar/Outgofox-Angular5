import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {MoviesService} from '../../Services/movies.service';
import {EventsService} from '../../Services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events: any;
  public date: any = new Date();

  constructor(
    private http: HttpClient,
    private eventsService: EventsService,
  ) {
    this.loadEvents();
  }

  ngOnInit() {
  }

  private loadEvents(): void {
    this.eventsService.loadEvents()
      .subscribe(events => {
        this.events = events;
        console.log('events controller', this.events);
      });
  }
}
