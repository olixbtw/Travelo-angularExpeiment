import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  destinations = [
    {
      img: '/assets/images/boston.jpg',
      title: 'Boston',
      description: '13-14 March total sale on round trip in Paris!'
    },
    {
      img: '/assets/images/tokyo.jpg',
      title: 'Tokyo',
      description: '13-14 March total sale on round trip in Paris!'
    },
    {
      img: '/assets/images/paris.jpg',
      title: 'Paris',
      description: '13-14 March total sale on round trip in Paris!'
    },
    {
      img: '/assets/images/new-york.jpg',
      title: 'New York',
      description: '13-14 March total sale on round trip in Paris!'
    },
    {
      img: '/assets/images/vienna.jpg',
      title: 'Vienna',
      description: '13-14 March total sale on round trip in Paris!'
    },
    {
      img: '/assets/images/berlin.jpg',
      title: 'Berlin',
      description: '13-14 March total sale on round trip in Paris!'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
