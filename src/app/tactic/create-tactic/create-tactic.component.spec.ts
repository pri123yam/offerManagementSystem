import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTacticComponent } from './create-tactic.component';

describe('CreateTacticComponent', () => {
  let component: CreateTacticComponent;
  let fixture: ComponentFixture<CreateTacticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTacticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTacticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
