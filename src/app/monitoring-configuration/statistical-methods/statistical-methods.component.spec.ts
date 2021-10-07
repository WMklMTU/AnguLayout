import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalMethodsComponent } from './statistical-methods.component';

describe('StatisticalMethodsComponent', () => {
  let component: StatisticalMethodsComponent;
  let fixture: ComponentFixture<StatisticalMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
