import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'pip-empty-state-picture',
  templateUrl: './empty-state-picture.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipEmptyStatePictureComponent {
  #src: string;
  srcSanitized: SafeUrl;

  @Input() alt: string;

  @Input()
  set src(src: string) {
    if (this.#src !== src) {
      this.#src = src;
      this.srcSanitized = this.domSanitizer.bypassSecurityTrustResourceUrl(src);
    }
  }

  get src(): string {
    return this.#src;
  }

  @HostBinding('class.pip-empty-state-picture') klass = true;

  constructor(private domSanitizer: DomSanitizer) {}
}
