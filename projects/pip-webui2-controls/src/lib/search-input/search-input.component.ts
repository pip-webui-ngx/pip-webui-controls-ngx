import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
    selector: 'pip-search-input',
    template: '<ng-content></ng-content>',
    styleUrls: ['./search-input.component.scss']
})
export class PipSearchInputComponent {

    public isFirst = true;
    public isLast = false;
    private _refreshIntervalId: any = null;
    private _autoSlide = true;

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef
    ) {
        renderer.addClass(elRef.nativeElement, 'pip-search-input');
    }
}
