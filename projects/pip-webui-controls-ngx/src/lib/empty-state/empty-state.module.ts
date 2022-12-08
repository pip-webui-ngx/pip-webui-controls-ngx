import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipEmptyStateActionsComponent } from './empty-state-actions/empty-state-actions.component';
import { PipEmptyStateDescriptionComponent } from './empty-state-description/empty-state-description.component';
import { PipEmptyStatePictureComponent } from './empty-state-picture/empty-state-picture.component';
import { PipEmptyStateTitleComponent } from './empty-state-title/empty-state-title.component';
import { PipEmptyStateComponent } from './empty-state/empty-state.component';

const components = [
  PipEmptyStateActionsComponent,
  PipEmptyStateComponent,
  PipEmptyStateDescriptionComponent,
  PipEmptyStatePictureComponent,
  PipEmptyStateTitleComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule],
})
export class PipEmptyStateModule {}
