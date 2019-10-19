import { Component, OnInit } from '@angular/core';
import destinations from '@data/mock/popular-destinations.mock.js';

@Component({
  selector: 'app-popular-destinations',
  templateUrl: './popular-destinations.component.html',
  styleUrls: ['./popular-destinations.component.scss'],
})
export class PopularDestinationsComponent implements OnInit {
  destinations = destinations;

  constructor() {}

  ngOnInit() {}
}
