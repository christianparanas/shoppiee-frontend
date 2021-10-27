import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartNavComponent } from './add-to-cart-nav.component';

describe('AddToCartNavComponent', () => {
  let component: AddToCartNavComponent;
  let fixture: ComponentFixture<AddToCartNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
