import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HomePageComponent } from '@app/routes/home-page/home-page.component';
import { FlightsComponent } from '@app/routes/flights/flights.component';
import { ErrorPathComponent } from '@app/routes/errorPath/errorPath.component';
import { HeaderComponent } from '@app/routes/home-page/header/header.component';
import { FooterComponent } from '@app/routes/home-page/footer/footer.component';
import { FlightSearchComponent } from '@app/components/flight-search-main/flight-search.component';
import { PopularDestinationsComponent } from '@app/components/popular-destinations/popular-destinations.component';
import { DestinationComponent } from '@app/components/popular-destinations/destination/destination.component';
import { SpecialOffersComponent } from '@app/components/special-offers/special-offers.component';
import { FlightAdviceComponent } from '@app/components/flight-advice/flight-advice.component';
import { AppLogoComponent } from '@app/components/app-logo/app-logo.component';
import { FormUserInfoComponent } from '@app/components/form-user-info/form-user-info.component';

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
    // TripsComponent,
    // TripHelperComponent,
    AppLogoComponent,
    ErrorPathComponent,
    FormUserInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
