import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringParameterComponent } from './monitoring-parameter.component';

describe('MonitoringParameterComponent', () => {
  let component: MonitoringParameterComponent;
  let fixture: ComponentFixture<MonitoringParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
