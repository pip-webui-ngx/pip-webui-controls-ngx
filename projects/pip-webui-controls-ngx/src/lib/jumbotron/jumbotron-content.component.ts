import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'pip-jumbotron-content',
  templateUrl: 'jumbotron-content.component.html',
  styleUrls: ['./jumbotron-content.component.scss'],
})
export class PipJumbotronContentComponent {
  @Input() title: string;
  @Input() icon: string;

  @HostBinding('class.pip-jumbotron-content') klass = true;
}
