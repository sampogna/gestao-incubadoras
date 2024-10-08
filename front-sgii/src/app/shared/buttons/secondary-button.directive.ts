import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[secondary-button]',
})
export class SecondaryButtonDirective{
  @HostBinding('class') get classes(): string {
    return 'button button--secondary';
  }
}