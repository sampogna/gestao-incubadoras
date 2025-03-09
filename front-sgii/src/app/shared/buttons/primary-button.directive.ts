import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[primary-button]',
})
export class PrimaryButtonDirective {
  @Input() buttonSmaller: boolean = false;
  @Input() inlineButton: boolean = false;
  @HostBinding('class') get classes(): string {
    const baseClasses = 'button button--primary';
    const smallerClass = this.buttonSmaller ? 'button--smaller' : '';
    const inlineClass = this.inlineButton ? 'button--inline' : '';
    return `${baseClasses} ${smallerClass} ${inlineClass}`.trim();
  }
}