import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

import { FlightsService } from '@services/flights.service';
import { FilterService } from '@services/filter.service';
import { SortService } from '@services/sort.service';
import { UsersService } from '@services/users.service';

import { HomePageComponent } from '@routes/home-page/home-page.component';
import { FlightsComponent } from '@routes/flights/flights.component';
import { BookingComponent } from '@routes/flights/booking/booking.component';
import { PaymentComponent } from '@routes/flights/payment/payment.component';
import { ResultsComponent } from '@routes/flights/results/results.component';
import { TripsComponent } from '@routes/trips/trips.component';
import { ErrorPathComponent } from '@routes/errorPath/errorPath.component';

import { HeaderComponent } from '@components/layout/header/header.component';
import { FooterComponent } from '@components/layout/footer/footer.component';
import { FlightSearchComponent } from '@components/flight-search-main/flight-search.component';
import { PopularDestinationsComponent } from '@components/homepageSection-popular-destinations/popular-destinations.component';
import { DestinationComponent } from '@components/homepageSection-popular-destinations/destination/destination.component';
import { SpecialOffersComponent } from '@components/homepageSection-special-offers/special-offers.component';
import { FlightAdviceComponent } from '@components/homepageSection-flight-advice/flight-advice.component';
import { AppLogoComponent } from '@components/app-logo/app-logo.component';
import { FlightSearchResultListComponent } from '@components/flight-search-result-list/flight-search-result-list.component';
// tslint:disable-next-line: max-line-length
import { FlightSearchResultListItemComponent } from '@components/flight-search-result-list/flight-search-result-list-item/flight-search-result-list-item.component';
import { FlightsSortComponent } from '@components/flights-sort/flights-sort.component';
import { MyTripsItemComponent } from '@components/my-trips-item/my-trips-item.component';
import { BookingTicketsComponent } from '@components/booking-tickets/booking-tickets.component';
import { FlightsFilterComponent } from '@components/flights-filter/flights-filter.component';
import { ArrowIntermediateFlightsComponent } from './components/arrow-intermediate-flights/arrow-intermediate-flights.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    FlightSearchComponent,
    PopularDestinationsComponent,
    DestinationComponent,
    SpecialOffersComponent,
    FlightAdviceComponent,
    AppLogoComponent,
    ErrorPathComponent,
    TripsComponent,
    FlightSearchResultListComponent,
    FlightSearchResultListItemComponent,
    FlightsSortComponent,
    MyTripsItemComponent,
    BookingTicketsComponent,
    FlightsFilterComponent,
    BookingComponent,
    PaymentComponent,
    ResultsComponent,
    ArrowIntermediateFlightsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [FlightsService, FilterService, SortService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
