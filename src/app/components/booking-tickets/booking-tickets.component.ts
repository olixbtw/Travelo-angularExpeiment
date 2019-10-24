import { Component, OnInit } from '@angular/core';
import { FlightsService } from '@services/flights.service';


@Component({
  selector: 'app-booking-tickets',
  templateUrl: './booking-tickets.component.html',
  styleUrls: ['./booking-tickets.component.scss']
})
export class BookingTicketsComponent implements OnInit {
  constructor(private flightsService: FlightsService) { }
  bookedFlight;

  ngOnInit() {
    this.bookedFlight = this.flightsService.filteredTrips[0];
    console.log(this.bookedFlight);
  }

}
