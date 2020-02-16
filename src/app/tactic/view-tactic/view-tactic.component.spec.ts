import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTacticComponent } from './view-tactic.component';

describe('ViewTacticComponent', () => {
  let component: ViewTacticComponent;
  let fixture: ComponentFixture<ViewTacticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTacticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTacticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
