import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-trips-item',
  templateUrl: './my-trips-item.component.html',
  styleUrls: ['./my-trips-item.component.scss']
})

export class MyTripsItemComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('data') tripInfo;

  constructor() { }

  ngOnInit() {
    console.log(this.tripInfo);
  }

}
