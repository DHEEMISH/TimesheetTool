import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownelementComponent } from './dropdownelement.component';

describe('DropdownelementComponent', () => {
  let component: DropdownelementComponent;
  let fixture: ComponentFixture<DropdownelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
