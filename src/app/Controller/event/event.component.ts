import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventsService} from '../../Services/events.service';
import {Event} from '../../Models/EVENT';
import { AgmCoreModule } from '@agm/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private id: number;
  public event: Event;
  lat: number = 50.73743;
  lng: number = 7.0982068;
  styles = environment.GOOGLEMAPS_STYLES;

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
