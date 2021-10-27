import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorypreviewComponent } from './categorypreview.component';

describe('CategorypreviewComponent', () => {
  let component: CategorypreviewComponent;
  let fixture: ComponentFixture<CategorypreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorypreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorypreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
