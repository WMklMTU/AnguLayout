import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanSelectionFilterComponent } from './scan-selection-filter.component';

describe('ScanSelectionFilterComponent', () => {
  let component: ScanSelectionFilterComponent;
  let fixture: ComponentFixture<ScanSelectionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanSelectionFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanSelectionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
