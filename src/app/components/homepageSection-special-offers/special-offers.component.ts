import { Component, OnInit } from '@angular/core';
import specialOffers from '@data/mock/special-offers.mock.js';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.scss']
})

export class SpecialOffersComponent implements OnInit {
  offersTitle = specialOffers.offersTitle;
  offers = specialOffers.offers;

  constructor() { }

  ngOnInit() {
  }

}
