import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'pip-empty-state-title',
  template: '<ng-content></ng-content>',
})
export class PipEmptyStateTitleComponent {
  @HostBinding('class.pip-empty-state-title') klass = true;
}
