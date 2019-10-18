import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent implements OnInit {
  searchForm = new FormGroup({
    departure: new FormControl(),
    destination: new FormControl(),
    tripType: new FormControl('return'),
    dates: new FormControl(),
    passengers: new FormControl(),
  });

  constructor() {}

  ngOnInit() {}
}
