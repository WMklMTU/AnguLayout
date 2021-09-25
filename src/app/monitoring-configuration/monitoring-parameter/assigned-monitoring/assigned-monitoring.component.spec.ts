import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedMonitoringComponent } from './assigned-monitoring.component';

describe('AssignedMonitoringComponent', () => {
  let component: AssignedMonitoringComponent;
  let fixture: ComponentFixture<AssignedMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
