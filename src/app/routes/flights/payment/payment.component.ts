import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {

  cardForm = new FormGroup({
    cardNumber: new FormControl(),
    endDate: new FormControl(),
    cv2: new FormControl(),
    cardOwner: new FormControl(),
  });

  submitPayment() {
    console.log(this.cardForm.value);
    this.router.navigate(['./trips']);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() { }

}
