import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAgainComponent } from './buy-again.component';

describe('BuyAgainComponent', () => {
  let component: BuyAgainComponent;
  let fixture: ComponentFixture<BuyAgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyAgainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
