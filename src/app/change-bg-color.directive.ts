import { Directive, ElementRef, AfterViewInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]'
})
export class ChangeBgColorDirective implements AfterViewInit {

  @Input() appChangeBgColor: string = 'red';

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    console.log(this.element.nativeElement);
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.appChangeBgColor);
  }

}
