import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipJumbotronModule } from 'pip-webui-controls-ngx';

import { JumbotronExampleComponent } from './jumbotron-example.component';

@NgModule({
  imports: [CommonModule, PipJumbotronModule],
  declarations: [JumbotronExampleComponent],
})
export class JumbotronExampleModule {}
