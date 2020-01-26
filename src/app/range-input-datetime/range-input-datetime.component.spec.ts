import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeInputDatetimeComponent } from './range-input-datetime.component';

describe('RangeInputDatetimeComponent', () => {
  let component: RangeInputDatetimeComponent;
  let fixture: ComponentFixture<RangeInputDatetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeInputDatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeInputDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
