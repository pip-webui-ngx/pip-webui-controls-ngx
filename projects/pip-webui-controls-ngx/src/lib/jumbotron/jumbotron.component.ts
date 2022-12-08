import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'pip-jumbotron',
  template: '<ng-content></ng-content>',
  styleUrls: ['./jumbotron.component.scss'],
})
export class PipJumbotronComponent {
  @HostBinding('class.pip-jumbotron') klass = true;
}
