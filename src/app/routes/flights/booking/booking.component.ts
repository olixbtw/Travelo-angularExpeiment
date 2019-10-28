import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    country: new FormControl(),
    sex: new FormControl(),
    bday: new FormControl(),
    passportId: new FormControl(),
    expirydate: new FormControl(),
    luggage: new FormControl(),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  submitUserInfo() {
    this.router.navigate(['./payment'], { relativeTo: this.route });
  }

  ngOnInit() { }
}
