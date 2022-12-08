import { Component, QueryList, OnInit, AfterContentInit, Input, ContentChildren } from '@angular/core';
import { PipSlideComponent } from './slide.component';

@Component({
  selector: 'pip-slider',
  template: '<ng-content></ng-content>',
  styleUrls: ['./slider.component.scss'],
})
export class PipSliderComponent implements OnInit, AfterContentInit {
  @ContentChildren(PipSlideComponent) slides: QueryList<PipSlideComponent>;

  @Input() interval = 2000;
  @Input() public slideIndex = 0;
  @Input('autoSlide') set auto(auto: boolean) {
    this._autoSlide = auto;
    this._autoSlide ? this.startInterval() : this.stopInterval();
  }

  public isFirst = true;
  public isLast = false;
  private _refreshIntervalId: any = null;
  private _autoSlide = true;

  ngOnInit(): void {
    if (this._autoSlide) {
      this.startInterval();
    }
  }

  ngAfterContentInit(): void {
    if (this.slides.length > 0) {
      this.slides.toArray()[0].show();
    }
    if (this.slides.length < 2) {
      this.stopInterval();
    }
  }

  nextSlide(): void {
    if (this.slides.length > 0) {
      this.slides.toArray()[this.slideIndex].hide();
      this.slideIndex = this.slideIndex + 1 >= this.slides.length ? 0 : this.slideIndex + 1;
      this.slides.toArray()[this.slideIndex].show();
      this.setFirstAndLast();
      this.restartInterval();
    }
  }

  prevSlide(): void {
    if (this.slides.length > 0) {
      this.slides.toArray()[this.slideIndex].hide();
      this.slideIndex = this.slideIndex - 1 < 0 ? this.slides.length - 1 : this.slideIndex - 1;
      this.slides.toArray()[this.slideIndex].show();
      this.setFirstAndLast();
      this.restartInterval();
    }
  }

  toSlide(slideNumber: number): void {
    if (slideNumber > -1 && slideNumber < this.slides.length) {
      this.slides.toArray()[this.slideIndex].hide();
      this.slideIndex = slideNumber;
      this.slides.toArray()[this.slideIndex].show();
      this.setFirstAndLast();
      this.restartInterval();
    }
  }

  startInterval(): void {
    this._refreshIntervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  stopInterval(): void {
    clearInterval(this._refreshIntervalId);
  }

  restartInterval(): void {
    this.stopInterval();
    this.startInterval();
  }

  private setFirstAndLast() {
    this.isFirst = this.slideIndex === 0;
    this.isLast = this.slideIndex === this.slides.length - 1;
  }
}
