import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeInputNumberComponent } from './range-input-number.component';

describe('RangeInputNumberComponent', () => {
  let component: RangeInputNumberComponent;
  let fixture: ComponentFixture<RangeInputNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeInputNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
