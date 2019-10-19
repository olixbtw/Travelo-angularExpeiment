import { Component, OnInit } from '@angular/core';
import flights from '@data/mock/fligths-component.mock.js';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent implements OnInit {
  flights = flights;

  constructor() {}

  ngOnInit() {}
}
