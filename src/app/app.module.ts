import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PopularDestinationsComponent } from './popular-destinations/popular-destinations.component';
import { DestinationComponent } from './destination/destination.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { FlightAdviceComponent } from './flight-advice/flight-advice.component';
import { TripsComponent } from './trips/trips.component';
import { TripHelperComponent } from './tripHelper/tripHelper.component';
import { AppLogoComponent } from './components/app-logo/app-logo.component';

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
    TripsComponent,
    TripHelperComponent,
    AppLogoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
