import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsSortComponent } from './flights-sort.component';

describe('FlightsSortComponent', () => {
  let component: FlightsSortComponent;
  let fixture: ComponentFixture<FlightsSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
