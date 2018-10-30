import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {environment} from '../../../environments/environment';
import {EventsService} from '../../Services/events.service';
import {Event} from '../../Models/EVENT';
declare var UIkit: any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  startDate: Date = new Date();
  endDate: Date = new Date();
  openMap = false;
  openSearch = false;
  openFilter = false;
  bonn_lat = 50.73743;
  bonn_lng = 7.0982068;
  public events: Event[];
  styles = environment.GOOGLEMAPS_STYLES;
  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false
  }
  constructor(
    private eventsService: EventsService
  ) {
    this.loadEvents();
  }

  ngOnInit() {
  }
  toggleMap(): void {
    if (!this.openMap) {
      this.openMap = true;
      this.openFilter = false;
      this.openSearch = false;
    } else {
      this.openMap = false;
    }
  }

  toggleFilter(): void {
    if (!this.openFilter) {
      this.openFilter = true;
      this.openMap = false;
      this.openSearch = false;
    } else {
      this.openFilter = false;
    }
  }

  toggleSearch(): void {
    if (!this.openSearch) {
      this.openSearch = true;
      this.openFilter = false;
      this.openMap = false;
    } else {
      this.openSearch = false;
    }
  }

  private loadEvents(): void {
    this.eventsService.loadEvents()
      .subscribe(events => {
        this.events = events;
        console.log('events controller', this.events);
      });
  }

  showAlert(): void {
    UIkit.modal.alert('UIkit alert!');
  }

  setStartDate(date): void {
    UIkit.datepicker();
  }

}
