import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartFooterComponent } from './add-to-cart-footer.component';

describe('AddToCartFooterComponent', () => {
  let component: AddToCartFooterComponent;
  let fixture: ComponentFixture<AddToCartFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
