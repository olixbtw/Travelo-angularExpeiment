import { AirportsService } from '@services/airports.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-airports-dropdown',
  templateUrl: './airports-dropdown.component.html',
  styleUrls: ['./airports-dropdown.component.scss'],
})
export class AirportsDropdownComponent implements OnInit, OnChanges {
  @Input() airports = [];
  @Output() airport = new EventEmitter();
  objectKeys = Object.keys;
  formattedAirports;

  constructor(private airportsService: AirportsService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.formattedAirports = { ...this.groupAirportsByCity() };
  }

  onCityClick(e: MouseEvent, cityIATACode: string) {
    e.preventDefault();
    this.airport.emit(`${this.airportsService.getCityNameByIATACode(cityIATACode)} (All airports)`);
  }

  onAirportClick(e: MouseEvent, airport) {
    e.preventDefault();
    this.airport.emit(`${this.airportsService.getCityNameByIATACode(airport.city_code)} (${airport.code})`);
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
