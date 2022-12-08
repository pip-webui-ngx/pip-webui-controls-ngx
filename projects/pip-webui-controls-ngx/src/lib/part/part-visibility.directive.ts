import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PipPartComponent } from './shared/part.model';

@Directive({ selector: '[pipPartVisibility]' })
export class PipPartVisibilityDirective extends PipPartComponent {
  @Input()
  public set pipPartVisibility(visibility: boolean) {
    if (typeof visibility === 'boolean') {
      this.updatevisibility(visibility);
    }
  }

  constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef) {
    super(templateRef, viewContainer);
  }
}
