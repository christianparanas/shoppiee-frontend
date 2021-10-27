import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotsalesComponent } from './hotsales.component';

describe('HotsalesComponent', () => {
  let component: HotsalesComponent;
  let fixture: ComponentFixture<HotsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
