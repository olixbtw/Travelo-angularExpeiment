import trips from '@data/mock/fligths-component.mock.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  tripsList = trips; // get user's trips instead

  constructor() { }

  ngOnInit() {
  }

}
