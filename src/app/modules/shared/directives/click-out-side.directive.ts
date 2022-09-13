import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  HostListener,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[clickOutside]'
})
export class ClickOutSideDirective {

  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement: any) {
    if (isPlatformBrowser(this.platformId)) {
      const clickedInside = this.elementRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.clickOutside.emit(null);
      }
    }
  }
  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: string) { }

}
