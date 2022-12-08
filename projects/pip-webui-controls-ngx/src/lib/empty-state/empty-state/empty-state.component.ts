import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'pip-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class PipEmptyStateComponent {
  @HostBinding('class.pip-empty-state') klass = true;
}
