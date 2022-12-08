import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipEmptyStateDescriptionComponent } from './empty-state-description.component';

describe('EmptyStateDescriptionComponent', () => {
  let component: PipEmptyStateDescriptionComponent;
  let fixture: ComponentFixture<PipEmptyStateDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipEmptyStateDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipEmptyStateDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
