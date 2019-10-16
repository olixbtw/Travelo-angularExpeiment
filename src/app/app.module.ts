import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
      FlightAdviceComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
