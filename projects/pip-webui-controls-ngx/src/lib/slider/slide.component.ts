import { Component, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Component({
  selector: 'pip-slide',
  template: '<ng-content></ng-content>',
  styleUrls: ['./slide.component.scss'],
})
export class PipSlideComponent {

  @HostBinding('class.pip-slide') klass = true;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
  }

  public show() {
    this.elRef.nativeElement.classList.add('show');
  }

  public hide() {
    this.elRef.nativeElement.classList.remove('show');
  }
}
