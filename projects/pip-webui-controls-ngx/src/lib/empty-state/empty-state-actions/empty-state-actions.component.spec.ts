import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipEmptyStateActionsComponent } from './empty-state-actions.component';

describe('EmptyStateActionsComponent', () => {
  let component: PipEmptyStateActionsComponent;
  let fixture: ComponentFixture<PipEmptyStateActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipEmptyStateActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipEmptyStateActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
