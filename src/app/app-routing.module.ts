import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { FlightsComponent } from './flights/flights.component';
import { TripHelperComponent } from './tripHelper/tripHelper.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'flights',
    component: FlightsComponent,
  },
  {
    path: 'trips',
    component: TripsComponent,
  },
  {
    path: 'helper',
    component: TripHelperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
