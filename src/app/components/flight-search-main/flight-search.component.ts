import { FilterService } from '@services/filter.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent implements OnInit {
  searchForm = new FormGroup({
    departure: new FormControl(),
    destination: new FormControl(),
    tripType: new FormControl('return'),
    dates: new FormControl(),
    passengers: new FormControl(),
  });

  constructor(private route: ActivatedRoute, private router: Router, private filterService: FilterService) {}

  ngOnInit() {}

  onSubmit() {
    const currentUrlSegment: UrlSegment = this.route.snapshot.url[0] || new UrlSegment('/', {});
    this.filterService.filterByDate(this.searchForm.value.dates);
    switch (currentUrlSegment.path) {
      case '/':
        this.router.navigate(['/flights']);
        break;
    }
  }
}
