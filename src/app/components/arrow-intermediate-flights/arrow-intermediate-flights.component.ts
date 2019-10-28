import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-arrow-intermediate-flights',
  templateUrl: './arrow-intermediate-flights.component.html',
  styleUrls: ['./arrow-intermediate-flights.component.scss']
})
export class ArrowIntermediateFlightsComponent implements OnInit {
  @HostBinding('class') class = '';
  @Input() stopsQty = 0;
  @Input() stopsTime = '';

  constructor() { }

  ngOnInit() {
    if (this.stopsQty) {
      this.class = 'active';
    }
  }

}
