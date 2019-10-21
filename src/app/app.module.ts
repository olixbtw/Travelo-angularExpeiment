import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

import { HomePageComponent } from '@routes/home-page/home-page.component';
import { FlightsComponent } from '@routes/flights/flights.component';
import { TripsComponent } from '@routes/trips/trips.component';
import { ErrorPathComponent } from '@routes/errorPath/errorPath.component';

import { HeaderComponent } from '@routes/home-page/header/header.component';
import { FooterComponent } from '@routes/home-page/footer/footer.component';
import { FlightSearchComponent } from '@components/flight-search-main/flight-search.component';
import { PopularDestinationsComponent } from '@components/popular-destinations/popular-destinations.component';
import { DestinationComponent } from '@components/popular-destinations/destination/destination.component';
import { SpecialOffersComponent } from '@components/special-offers/special-offers.component';
import { FlightAdviceComponent } from '@components/flight-advice/flight-advice.component';
import { AppLogoComponent } from '@components/app-logo/app-logo.component';
import { FormUserInfoComponent } from '@components/form-user-info/form-user-info.component';
import { FlightSearchResultListComponent } from '@components/flight-search-result-list/flight-search-result-list.component';
// tslint:disable-next-line: max-line-length
import { FlightSearchResultListItemComponent } from '@components/flight-search-result-list/flight-search-result-list-item/flight-search-result-list-item.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
