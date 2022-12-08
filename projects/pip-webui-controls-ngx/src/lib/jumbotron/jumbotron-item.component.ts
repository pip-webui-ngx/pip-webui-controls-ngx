import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'pip-jumbotron-item',
  templateUrl: 'jumbotron-item.component.html',
  styleUrls: ['./jumbotron-item.component.scss'],
})
export class PipJumbotronItemComponent {
  @Input() item: any;

  @HostBinding('class.pip-jumbotron-item') klass = true;
}
