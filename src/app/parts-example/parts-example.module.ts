import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipPartModule } from 'pip-webui-controls-ngx';

import { PipPartDirective } from './parts-name-example.directive';
import { PartsExampleComponent } from './parts-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

    PipPartModule,
  ],
  declarations: [PartsExampleComponent, PipPartDirective],
})
export class PartsExampleModule {}
