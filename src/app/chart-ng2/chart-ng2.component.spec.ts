import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNG2Component } from './chart-ng2.component';

describe('ChartNG2Component', () => {
  let component: ChartNG2Component;
  let fixture: ComponentFixture<ChartNG2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartNG2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartNG2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
