import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-search-result-list-item',
  templateUrl: './flight-search-result-list-item.component.html',
  styleUrls: ['./flight-search-result-list-item.component.scss']
})
export class FlightSearchResultListItemComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('data') tripData;

  constructor() { }

  ngOnInit() {
  }

  sendResult(flight) {
    console.log(flight);
  }

}
