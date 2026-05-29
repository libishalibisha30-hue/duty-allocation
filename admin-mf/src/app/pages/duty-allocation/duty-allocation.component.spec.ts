import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyAllocationComponent } from './duty-allocation.component';

describe('DutyAllocationComponent', () => {
  let component: DutyAllocationComponent;
  let fixture: ComponentFixture<DutyAllocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DutyAllocationComponent]
    });
    fixture = TestBed.createComponent(DutyAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
