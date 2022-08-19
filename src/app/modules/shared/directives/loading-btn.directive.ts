import {
  Directive,
  ElementRef,
  Input,
  OnChanges
} from '@angular/core';

@Directive({
  selector: '[appLoadingBtn]'
})
export class LoadingBtnDirective implements OnChanges {
  @Input() textLoading?: string;
  @Input() textInitial?: string;
  @Input() disabled = false;
  @Input() loadingFlag: boolean | undefined = undefined;

  constructor(private elem: ElementRef) { }

  ngOnChanges(changes: any): void {
    if (changes.condition && changes.condition.currentValue) {
      this.loadingFlag = changes.condition.currentValue;
    }
    this.elem.nativeElement.innerText = this.loadingFlag
      ? this.textLoading
      : this.textInitial;
    this.elem.nativeElement.disabled = this.disabled;
    if (this.loadingFlag) {
      this.elem.nativeElement.disabled = true;
    }
  }

}
