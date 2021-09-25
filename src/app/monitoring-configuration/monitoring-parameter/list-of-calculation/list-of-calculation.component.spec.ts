import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCalculationComponent } from './list-of-calculation.component';

describe('ListOfCalculationComponent', () => {
  let component: ListOfCalculationComponent;
  let fixture: ComponentFixture<ListOfCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
