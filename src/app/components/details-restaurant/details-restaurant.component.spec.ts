import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRestaurantComponent } from './details-restaurant.component';

describe('DetailsRestaurantComponent', () => {
  let component: DetailsRestaurantComponent;
  let fixture: ComponentFixture<DetailsRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
