import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { PipSliderModule } from 'pip-webui-controls-ngx';

import { SliderExampleComponent } from './slider-example.component';

describe('SliderExampleComponent', () => {
  let component: SliderExampleComponent;
  let fixture: ComponentFixture<SliderExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderExampleComponent],
      imports: [NoopAnimationsModule, CommonModule, FlexLayoutModule, MatTabsModule, PipSliderModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
