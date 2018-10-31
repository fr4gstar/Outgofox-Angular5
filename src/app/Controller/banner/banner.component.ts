import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../Services/movies.service';
import {EventsService} from '../../Services/events.service';
import {Event} from '../../Models/EVENT';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public premiums: Event[];

  constructor(
    private eventsService: EventsService
  ) {

  }

  ngOnInit() {
    this.loadPremiums();
  }
  private loadPremiums(): void {
    this.eventsService.loadPremiums()
      .subscribe(premiums => {
        this.premiums = premiums;
        console.log('events controller - premiums', this.premiums);
      });
  }
}
