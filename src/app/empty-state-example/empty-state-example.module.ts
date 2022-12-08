import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@ngneat/transloco';
import { PipEmptyStateModule } from 'pip-webui-controls-ngx';
import { EmptyStateExampleComponent } from './empty-state-example.component';

@NgModule({
  imports: [CommonModule, PipEmptyStateModule, MatButtonModule, TranslocoModule],
  declarations: [EmptyStateExampleComponent],
})
export class EmptyStateExampleModule {}
