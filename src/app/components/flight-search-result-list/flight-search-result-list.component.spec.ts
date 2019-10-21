import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchResultListComponent } from './flight-search-result-list.component';

describe('FlightSearchResultListComponent', () => {
  let component: FlightSearchResultListComponent;
  let fixture: ComponentFixture<FlightSearchResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSearchResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
