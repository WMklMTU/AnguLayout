import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringConfigurationComponent } from './monitoring-configuration.component';

describe('MonitoringConfigurationComponent', () => {
  let component: MonitoringConfigurationComponent;
  let fixture: ComponentFixture<MonitoringConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
