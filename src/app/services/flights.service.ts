import { Flight } from '@data/model/flight';
import { Injectable } from '@angular/core';
import * as flights from '@data/mock/fligths-component.mock';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private _trips: Flight[];
  filteredTrips: Flight[];

  constructor() {
    this._trips = flights;
    this.filteredTrips = this._trips;
  }

  get trips() {
    return [...this._trips];
  }

  getFilteredTrips(itemsToDisplay: number) {
    return [...this.filteredTrips].slice(0, itemsToDisplay);
  }
}
