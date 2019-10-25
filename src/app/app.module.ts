import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from '@routes/home-page/home-page.component';
import { FlightsComponent } from '@routes/flights/flights.component';
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
import { FormUserInfoComponent } from '@components/booking-form-user-info/form-user-info.component';
import { FlightSearchResultListComponent } from '@components/flight-search-result-list/flight-search-result-list.component';
// tslint:disable-next-line: max-line-length
import { FlightSearchResultListItemComponent } from '@components/flight-search-result-list/flight-search-result-list-item/flight-search-result-list-item.component';
import { FlightsSortComponent } from '@components/flights-sort/flights-sort.component';
import { MyTripsItemComponent } from '@components/my-trips-item/my-trips-item.component';
import { BookingTicketsComponent } from '@components/booking-tickets/booking-tickets.component';

import { FlightsService } from '@services/flights.service';
import { FilterService } from '@services/filter.service';
import { SortService } from '@services/sort.service';
import { UsersService } from '@services/users.service';

import { FlightPaymentComponent } from '@components/booking-form-payment/flight-payment.component';
import { FlightsFilterComponent } from '@components/flights-filter/flights-filter.component';


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
    FormUserInfoComponent,
    TripsComponent,
    FlightSearchResultListComponent,
    FlightSearchResultListItemComponent,
    FlightsSortComponent,
    MyTripsItemComponent,
    FlightPaymentComponent,
    BookingTicketsComponent,
    FlightsFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, CalendarModule, BrowserAnimationsModule],
  providers: [FlightsService, FilterService, SortService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
