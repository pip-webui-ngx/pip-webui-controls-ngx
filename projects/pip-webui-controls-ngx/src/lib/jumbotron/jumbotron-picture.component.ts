import { NumberInput } from '@angular/cdk/coercion';
import { Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'pip-jumbotron-picture',
  template: '<img [src]="srcDark || src" [alt]="alt || src" [attr.width]="width ?? \'initial\'" [attr.height]="height ?? \'initial\'">',
  styleUrls: ['./jumbotron-picture.component.scss'],
})
export class PipJumbotronPictureComponent {
  @Input() public src: string;
  @Input() public srcDark: string;
  @Input() public alt: string;
  @Input() public width: NumberInput;
  @Input() public height: NumberInput;

  @HostBinding('class.pip-jumbotron-picture') klass = true;

}
