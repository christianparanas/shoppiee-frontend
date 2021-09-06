import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorepreviewComponent } from './storepreview.component';

describe('StorepreviewComponent', () => {
  let component: StorepreviewComponent;
  let fixture: ComponentFixture<StorepreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorepreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
