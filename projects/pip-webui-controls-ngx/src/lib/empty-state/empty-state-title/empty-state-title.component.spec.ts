import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipEmptyStateTitleComponent } from './empty-state-title.component';

describe('EmptyStateTitleComponent', () => {
  let component: PipEmptyStateTitleComponent;
  let fixture: ComponentFixture<PipEmptyStateTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipEmptyStateTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipEmptyStateTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
