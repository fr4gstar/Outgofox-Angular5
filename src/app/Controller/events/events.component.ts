import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventsService} from '../../Services/events.service';
import {Event} from '../../Models/EVENT';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events: Event[];
  public date: any = new Date();

  constructor(
    private http: HttpClient,
    private eventsService: EventsService
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
