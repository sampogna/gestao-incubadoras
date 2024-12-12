import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[secondary-button]',
})
export class SecondaryButtonDirective {
  @Input() buttonSmaller: boolean = false;

  @HostBinding('class') get classes(): string {
    const baseClasses = 'button button--secondary';
    const smallerClass = this.buttonSmaller ? 'button--smaller' : '';
    return `${baseClasses} ${smallerClass}`.trim();
  }
}