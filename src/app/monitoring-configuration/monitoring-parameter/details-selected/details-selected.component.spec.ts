import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSelectedComponent } from './details-selected.component';

describe('DetailsSelectedComponent', () => {
  let component: DetailsSelectedComponent;
  let fixture: ComponentFixture<DetailsSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
