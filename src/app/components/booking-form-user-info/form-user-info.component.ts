import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-user-info',
  templateUrl: './form-user-info.component.html',
  styleUrls: ['./form-user-info.component.scss'],
})
export class FormUserInfoComponent implements OnInit {
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
