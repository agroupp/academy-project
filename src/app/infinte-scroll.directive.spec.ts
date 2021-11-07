import { ElementRef } from '@angular/core';
import { InfinteScrollDirective } from './infinte-scroll.directive';

describe('InfinteScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new InfinteScrollDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
