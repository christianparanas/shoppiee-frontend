import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverfeedbackComponent } from './recoverfeedback.component';

describe('RecoverfeedbackComponent', () => {
  let component: RecoverfeedbackComponent;
  let fixture: ComponentFixture<RecoverfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
