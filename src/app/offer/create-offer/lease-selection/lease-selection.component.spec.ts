import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseSelectionComponent } from './lease-selection.component';

describe('LeaseSelectionComponent', () => {
  let component: LeaseSelectionComponent;
  let fixture: ComponentFixture<LeaseSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
