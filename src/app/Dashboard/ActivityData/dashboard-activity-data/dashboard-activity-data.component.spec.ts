import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {DashboardActvityDataComponent } from './dashboard-activity-data.component';

describe('DashboardActivityDataComponent', () => {
  let component: DashboardActvityDataComponent;
  let fixture: ComponentFixture<DashboardActvityDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardActvityDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardActvityDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
