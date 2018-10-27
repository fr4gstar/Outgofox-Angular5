import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var UIkit: any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  startDate: Date = new Date();
  endDate: Date = new Date();

  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false
  }
  constructor() { }

  ngOnInit() {
  }

  showAlert(): void {
    UIkit.modal.alert('UIkit alert!');
  }

  setStartDate(date): void {
    UIkit.datepicker();
  }

}
