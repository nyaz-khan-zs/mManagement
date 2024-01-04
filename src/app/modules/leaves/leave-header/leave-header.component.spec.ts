import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveHeaderComponent } from './leave-header.component';

describe('LeaveHeaderComponent', () => {
  let component: LeaveHeaderComponent;
  let fixture: ComponentFixture<LeaveHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
