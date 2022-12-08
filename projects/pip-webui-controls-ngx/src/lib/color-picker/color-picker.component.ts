import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { BehaviorSubject, Observable } from 'rxjs';

const DEFAULT_COLORS = ['purple', 'lightgreen', 'green', 'darkred', 'pink', 'yellow', 'cyan'];

@Component({
  selector: 'pip-color-picker',
  templateUrl: 'color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class PipColorPickerComponent implements AfterContentInit {
  private _selectedIndex$ = new BehaviorSubject<number>(0);

  @ContentChildren('colorButton') items: QueryList<MatButton>;
  @Input() public selected: string;
  @Input() public colors: string[] = DEFAULT_COLORS;
  @Output() public changeColor = new EventEmitter();

  get selectedIndex$(): Observable<number> {
    return this._selectedIndex$;
  }

  ngAfterContentInit(): void {
    const i = this.colors.indexOf(this.selected);
    this._selectedIndex$.next(i > -1 ? i : 0);
    this.selectedIndex$.subscribe((index) => {
      this.selected = this.colors[index];
      this.focus();
      this.changeColor.emit(this.selected);
    });
  }

  private focus() {
    if (this.items.length > this._selectedIndex$.getValue()) {
      this.items[this._selectedIndex$.getValue()].focus();
    }
  }

  clickColor(index: number): void {
    this._selectedIndex$.next(index);
  }
}
