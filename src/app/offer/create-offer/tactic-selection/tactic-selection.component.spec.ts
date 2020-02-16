import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticSelectionComponent } from './tactic-selection.component';

describe('TacticSelectionComponent', () => {
  let component: TacticSelectionComponent;
  let fixture: ComponentFixture<TacticSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacticSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
