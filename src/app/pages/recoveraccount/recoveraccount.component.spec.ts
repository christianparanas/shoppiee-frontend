import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveraccountComponent } from './recoveraccount.component';

describe('RecoveraccountComponent', () => {
  let component: RecoveraccountComponent;
  let fixture: ComponentFixture<RecoveraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveraccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
