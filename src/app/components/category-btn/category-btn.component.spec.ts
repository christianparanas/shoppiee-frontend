import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBtnComponent } from './category-btn.component';

describe('CategoryBtnComponent', () => {
  let component: CategoryBtnComponent;
  let fixture: ComponentFixture<CategoryBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
