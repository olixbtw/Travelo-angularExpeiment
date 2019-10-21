import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-search-result-list',
  templateUrl: './flight-search-result-list.component.html',
  styleUrls: ['./flight-search-result-list.component.scss']
})
export class FlightSearchResultListComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('data') tripsList;

  constructor() { }

  ngOnInit() {
  }

}
