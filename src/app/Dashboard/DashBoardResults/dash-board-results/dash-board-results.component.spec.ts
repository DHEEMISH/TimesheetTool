import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardResultsComponent } from './dash-board-results.component';

describe('DashBoardResultsComponent', () => {
  let component: DashBoardResultsComponent;
  let fixture: ComponentFixture<DashBoardResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
