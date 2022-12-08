import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'pip-search-input',
  template: '<ng-content></ng-content>',
  styleUrls: ['./search-input.component.scss'],
})
export class PipSearchInputComponent {
  @HostBinding('class.pip-search-input') klass = true;
}
