import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-search-result-list-item',
  templateUrl: './flight-search-result-list-item.component.html',
  styleUrls: ['./flight-search-result-list-item.component.scss']
})
export class FlightSearchResultListItemComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('data') tripData;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  sendResult(flight) {
    console.log(flight);
    this.router.navigate(['./booking'], { relativeTo: this.route });
  }

}
