import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowIntermediateFlightsComponent } from './arrow-intermediate-flights.component';

describe('ArrowIntermediateFlightsComponent', () => {
  let component: ArrowIntermediateFlightsComponent;
  let fixture: ComponentFixture<ArrowIntermediateFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowIntermediateFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowIntermediateFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
