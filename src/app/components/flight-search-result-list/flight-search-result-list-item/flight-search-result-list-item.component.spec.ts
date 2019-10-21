import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchResultListItemComponent } from './flight-search-result-list-item.component';

describe('FlightSearchResultListItemComponent', () => {
  let component: FlightSearchResultListItemComponent;
  let fixture: ComponentFixture<FlightSearchResultListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSearchResultListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchResultListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
