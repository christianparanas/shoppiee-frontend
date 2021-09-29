import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddProductsComponent } from './user-add-products.component';

describe('UserAddProductsComponent', () => {
  let component: UserAddProductsComponent;
  let fixture: ComponentFixture<UserAddProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
