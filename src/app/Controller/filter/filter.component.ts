import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {google_maps_styles} from '../../app.module';
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
  styles = google_maps_styles;
  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false
  }
  constructor() { }

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

  showAlert(): void {
    UIkit.modal.alert('UIkit alert!');
  }

  setStartDate(date): void {
    UIkit.datepicker();
  }

}
