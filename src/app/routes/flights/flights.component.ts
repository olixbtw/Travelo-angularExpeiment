import { Component, OnInit } from '@angular/core';
import { trips } from '@data/mock/fligths-component.mock.js';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent implements OnInit {
  tripsList = trips; // get flights according to searched

  constructor() { }

  ngOnInit() { }
}
