import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.scss']
})
export class SpecialOffersComponent implements OnInit {

  public offersTitle: string = 'Special Offers';

  public offers = [
    {
      img: '/assets/images/airplane-parking.jpg',
      alt: 'Airplane parking',
      title: 'American Airlines are on sale!',
      description: 'Use out best fare finder to book your journey to Amsterdam on lufthansa.com and save hard cash. In order to find the best-value flights, simply use out best fare finder. Choose your flight to Amsterdam AMS from a wide range of offers.'
    },
    {
      img: '/assets/images/airplane-parking-2.jpg',
      alt: 'Airplane parking',
      title: 'Lufthansa is on sale!',
      description: 'Use out best fare finder to book your journey to Amsterdam on lufthansa.com and save hard cash. In order to find the best-value flights, simply use out best fare finder. Choose your flight to Amsterdam AMS from a wide range of offers.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
