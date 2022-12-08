import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipEmptyStatePictureComponent } from './empty-state-picture.component';

describe('EmptyStatePictureComponent', () => {
  let component: PipEmptyStatePictureComponent;
  let fixture: ComponentFixture<PipEmptyStatePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipEmptyStatePictureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipEmptyStatePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
