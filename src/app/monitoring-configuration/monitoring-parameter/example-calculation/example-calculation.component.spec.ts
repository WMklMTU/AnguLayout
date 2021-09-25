import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCalculationComponent } from './example-calculation.component';

describe('ExampleCalculationComponent', () => {
  let component: ExampleCalculationComponent;
  let fixture: ComponentFixture<ExampleCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
