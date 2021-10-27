import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoreComponent } from './userstore.component';

describe('UserstoreComponent', () => {
  let component: UserstoreComponent;
  let fixture: ComponentFixture<UserstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
