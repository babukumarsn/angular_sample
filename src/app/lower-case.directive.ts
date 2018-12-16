import { Directive, Renderer2, OnInit, ElementRef, Input, HostListener, AfterViewInit, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[mouseOver]'
})
export class LowerCaseDirective implements OnInit, AfterViewChecked {

  @Input() appHeight: string;
  @Input() appWidth: string;
  @Input() appLowerCase: string;

  constructor(private elem: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.elem.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elem.nativeElement.style.color = '';
  }

  ngOnInit() {
    this.elem.nativeElement.innerHTML.toLowerCase();
  }
  
  ngAfterViewChecked() {
    this.elem.nativeElement.innerHTML.toUpperCase();
  }
  
}
