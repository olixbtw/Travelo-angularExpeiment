import { AirportsService } from '@services/airports.service';
import { FilterService } from '@services/filter.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent implements OnInit {
  searchForm = new FormGroup({
    departure: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    tripType: new FormControl('oneWay', Validators.required),
    dates: new FormControl('', Validators.required),
    passengers: new FormControl('', Validators.required),
  });

  departureAirports: [];
  destinationAirports: [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filterService: FilterService,
    private airportsService: AirportsService
  ) {}

  ngOnInit() {}

  onAirportPicked(airport: string, inputName: string) {
    this.searchForm.controls[inputName].setValue(airport.trim());
  }

  onFlightInputChange(e: KeyboardEvent) {
    e.preventDefault();
    const minElementsSearchLength = 3;
    const value = (e.target as HTMLInputElement).value;
    if (value.length >= minElementsSearchLength) {
      const airports = this.airportsService.getAirportsByCity(value);
      const targetInputName = (e.target as HTMLInputElement).getAttribute('formControlName');
      if (targetInputName === 'departure') {
        this.departureAirports = airports as [];
      } else if (targetInputName === 'destination') {
        this.destinationAirports = airports as [];
      }
    } else {
      this.departureAirports = this.airportsService.airports as [];
      this.destinationAirports = this.airportsService.airports as [];
    }
  }

  onSubmit() {
    const currentUrlSegment: UrlSegment = this.route.snapshot.url[0] || new UrlSegment('/', {});
    // this.filterService.filterByDate(this.searchForm.value.dates);
    if (!this.searchForm.invalid) {
      switch (currentUrlSegment.path) {
        case '/':
          this.router.navigate(['/flights']);
          break;
      }
    }
  }
}
