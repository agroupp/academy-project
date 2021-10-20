import { Directive, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInfinteScroll]'
})
export class InfinteScrollDirective {

  constructor(private element: ElementRef) { }

  @Output() loadMore: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('window:scroll')
  onScroll() {


    const distance = document.body.scrollTop / (document.body.scrollHeight - window.innerHeight);
    console.log(distance);
    if (distance <= 100) {
      // this.loadMore.emit();
    }



  }



}
