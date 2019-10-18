import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '@app/routes/home-page/home-page.component';
import { FlightsComponent } from '@app/routes/flights/flights.component';
import { ErrorPathComponent } from '@app/routes/errorPath/errorPath.component';

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
    component: ErrorPathComponent,
  },
  {
    path: 'helper',
    component: ErrorPathComponent,
  },
  {
    path: 'err',
    component: ErrorPathComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
