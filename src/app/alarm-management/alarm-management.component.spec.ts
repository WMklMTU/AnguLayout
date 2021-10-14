import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmManagementComponent } from './alarm-management.component';

describe('AlarmManagementComponent', () => {
  let component: AlarmManagementComponent;
  let fixture: ComponentFixture<AlarmManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
