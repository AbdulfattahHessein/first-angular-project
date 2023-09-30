import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[CardStyle]',
})
export class CardStyleDirective implements OnChanges {
  constructor(public elementRef: ElementRef) {
    this.elementRef.nativeElement.style.borderRadius = '20px';
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChange');
    // this.BGColor = 'yellow';
    console.log(this.BGColor);
  }
  @Input() BGColor: string = '';
  //  method decorator
  @HostListener('mouseover') func1() {
    let element = this.elementRef as ElementRef<CSSStyleRule>;
    // console.log( element.nativeElement);
    this.elementRef.nativeElement.style.boxShadow =
      '-4px - 3px 45px 21px rgba( 0, 0, 0, 0.35 )';
    this.elementRef.nativeElement.style.opacity = `.7`;

    element.nativeElement.style.scale = '1.04';
    // element.nativeElement.style.backgroundColor = this.BGColor;
    element.nativeElement.style.backgroundColor = this.bGstyle!;
  }
  @HostListener('mouseout') func2() {
    let element = this.elementRef as ElementRef<CSSStyleRule>;
    this.elementRef.nativeElement.style.boxShadow = '0 0 0 0';
    this.elementRef.nativeElement.style.opacity = `1`;
    element.nativeElement.style.backgroundColor = 'white';
    element.nativeElement.style.scale = '1';
  }
  @Input() bGstyle?: string;
}
