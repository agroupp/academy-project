import { ElementRef, Renderer2 } from '@angular/core';
import { ChangeBgColorDirective } from './change-bg-color.directive';

describe('ChangeBgColorDirective', () => {
  it('should create an instance', () => {
    const directive = new ChangeBgColorDirective({} as ElementRef, {} as Renderer2);
    expect(directive).toBeTruthy();
  });
});
