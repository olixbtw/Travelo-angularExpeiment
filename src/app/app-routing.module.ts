import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '@routes/home-page/home-page.component';
import { FlightsComponent } from '@routes/flights/flights.component';
import { ResultsComponent } from '@routes/flights/results/results.component';
import { BookingComponent } from '@routes/flights/booking/booking.component';
import { PaymentComponent } from '@routes/flights/payment/payment.component';
import { TripsComponent } from '@routes/trips/trips.component';
import { ErrorPathComponent } from '@routes/errorPath/errorPath.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'flights',
    component: FlightsComponent,
    children: [
      {
        path: '',
        component: ResultsComponent,
      },
      {
        path: 'booking',
        component: BookingComponent,
      },
      {
        path: 'booking/payment',
        component: PaymentComponent,
      }
    ]
  },
  {
    path: 'trips',
    component: TripsComponent,
  },
  {
    path: '**',
    component: ErrorPathComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
