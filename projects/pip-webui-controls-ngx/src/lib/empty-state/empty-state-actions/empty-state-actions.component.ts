import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'pip-empty-state-actions',
  template: '<ng-content></ng-content>',
})
export class PipEmptyStateActionsComponent {
  @HostBinding('class.pip-empty-state-actions') klass = true;
}
