import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[primary-button]',
})
export class PrimaryButtonDirective {
  @HostBinding('class') get classes(): string {
    return 'button button--primary';
  }
}