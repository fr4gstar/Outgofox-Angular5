import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../Services/movies.service';
import {EventsService} from '../../Services/events.service';
import {Movie} from '../../Models/MOVIE';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private id: number;
  public event: Event;
  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {
    this.route.params.subscribe( params => {
      this.id = params.id;
      console.log('id', this.id);
      this.loadEvent(this.id);
    });
  }

  ngOnInit() {
  }

  private loadEvent(id: number): void {
    this.eventsService.loadEvent(id)
      .subscribe(event => {this.event = event;
        console.log('Event Controller', this.event);
      });
  }
}
