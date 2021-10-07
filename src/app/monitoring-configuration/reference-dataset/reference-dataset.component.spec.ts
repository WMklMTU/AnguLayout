import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceDatasetComponent } from './reference-dataset.component';

describe('ReferenceDatasetComponent', () => {
  let component: ReferenceDatasetComponent;
  let fixture: ComponentFixture<ReferenceDatasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceDatasetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
