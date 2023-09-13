import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[CardStyle]'
})
export class CardStyleDirective {

  constructor( public elementRef: ElementRef ) {
    this.elementRef.nativeElement.style.borderRadius = '20px';
  }

  //  method decorator
  @HostListener( 'mouseover' ) func1() {
    this.elementRef.nativeElement.style.boxShadow = '-4px - 3px 45px 21px rgba( 0, 0, 0, 0.35 )'
    this.elementRef.nativeElement.style.opacity = `.7`;

  }
  @HostListener( 'mouseout' ) func2() {
    this.elementRef.nativeElement.style.boxShadow = '0 0 0 0'
    this.elementRef.nativeElement.style.opacity = `1`;

  }
}
