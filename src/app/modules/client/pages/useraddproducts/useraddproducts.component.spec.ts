import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddproductsComponent } from './useraddproducts.component';

describe('UseraddproductsComponent', () => {
  let component: UseraddproductsComponent;
  let fixture: ComponentFixture<UseraddproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraddproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
