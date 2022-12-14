import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { PipSliderModule } from 'pip-webui-controls-ngx';

import { SliderExampleComponent } from './slider-example.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatTabsModule, PipSliderModule],
  declarations: [SliderExampleComponent],
})
export class SliderExampleModule {}
