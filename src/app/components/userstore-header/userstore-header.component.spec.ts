import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoreHeaderComponent } from './userstore-header.component';

describe('UserstoreHeaderComponent', () => {
  let component: UserstoreHeaderComponent;
  let fixture: ComponentFixture<UserstoreHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstoreHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstoreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
