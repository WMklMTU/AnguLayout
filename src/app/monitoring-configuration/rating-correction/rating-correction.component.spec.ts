import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCorrectionComponent } from './rating-correction.component';

describe('RatingCorrectionComponent', () => {
  let component: RatingCorrectionComponent;
  let fixture: ComponentFixture<RatingCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
