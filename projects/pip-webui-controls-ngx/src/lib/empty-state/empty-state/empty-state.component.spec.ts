import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipEmptyStateComponent } from './empty-state.component';

describe('EmptyStateComponent', () => {
  let component: PipEmptyStateComponent;
  let fixture: ComponentFixture<PipEmptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipEmptyStateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipEmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
