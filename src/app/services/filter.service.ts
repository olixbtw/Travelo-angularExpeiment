import { FlightsService } from '@services/flights.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private flightsService: FlightsService) {}

  filterByDate(departure: string, destination?: string) {
    this.flightsService.filteredTrips = this.flightsService.trips
      .slice()
      .filter((flight) => flight.flights[0].date === FilterService.formatDate(departure));
  }

  static formatDate(stringedDate: string) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = new Date(stringedDate);
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  }
}
