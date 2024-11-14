import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'simple-input',
  styleUrls: ['./simple-input.component.scss'],
  templateUrl: './simple-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleInputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() leftIconClass: string; //Utilize classes do fontawesome 4.7
  value: string;

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any) {
    this.value = value;
    // this.onChange(value);
    // this.onTouch(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
