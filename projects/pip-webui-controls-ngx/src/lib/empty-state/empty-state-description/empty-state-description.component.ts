import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'pip-empty-state-description',
  template: '<ng-content></ng-content>',
})
export class PipEmptyStateDescriptionComponent {
  @HostBinding('class.pip-empty-state-description') klass = true;
}
