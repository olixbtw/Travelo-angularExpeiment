import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTripsItemComponent } from './my-trips-item.component';

describe('MyTripsItemComponent', () => {
  let component: MyTripsItemComponent;
  let fixture: ComponentFixture<MyTripsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTripsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTripsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
