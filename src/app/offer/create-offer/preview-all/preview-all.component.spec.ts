import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAllComponent } from './preview-all.component';

describe('PreviewAllComponent', () => {
  let component: PreviewAllComponent;
  let fixture: ComponentFixture<PreviewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
