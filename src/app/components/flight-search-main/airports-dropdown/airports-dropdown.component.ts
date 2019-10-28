import { AirportsService } from '@services/airports.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-airports-dropdown',
  templateUrl: './airports-dropdown.component.html',
  styleUrls: ['./airports-dropdown.component.scss'],
})
export class AirportsDropdownComponent implements OnInit, OnChanges {
  @Input() airports = [];
  objectKeys = Object.keys;
  formattedAirports;

  constructor(private airportsService: AirportsService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.formattedAirports = { ...this.groupAirportsByCity() };
  }

  private groupAirportsByCity() {
    const airportsGroupedByCity = {};
    this.airports.forEach((airport) => {
      if (!airportsGroupedByCity[airport.city_code]) {
        airportsGroupedByCity[airport.city_code] = [];
      }
      airportsGroupedByCity[airport.city_code].push(airport);
    });
    return { ...airportsGroupedByCity };
  }
}
