import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../Services/movies.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public premium: any;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.loadPremium();
  }
  private loadPremium() {
    //this.premium = this.moviesService.loadPremium();
  }
}
