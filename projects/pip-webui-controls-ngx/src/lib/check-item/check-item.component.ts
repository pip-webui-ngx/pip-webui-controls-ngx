import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pip-check-item',
  templateUrl: './check-item.component.html',
  styleUrls: ['./check-item.component.scss'],
})
export class PipCheckItemComponent {
  @Input() id: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() subtitleIcon: string;
  @Input() textBold: string;
  @Input() text: string;
  @Input() checked: boolean;

  @Output() select = new EventEmitter();
  @Output() check = new EventEmitter();

  onSelect(): void {
    this.select.emit(this.id);
  }

  onCheck($event: boolean): void {
    this.checked = $event;
    this.check.emit(this.id);
  }
}
