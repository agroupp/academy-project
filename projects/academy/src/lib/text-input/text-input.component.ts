import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {TInputText} from "./text-input.interface";

@Component({
  selector: 'lib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  control = new FormControl();
  isDisabled = false;
  onChange =  (str: string) => {};

  constructor() {
  }

  @Input() label?: string;
  @Input() placeholder : string  = '';
  @Input() type : TInputText = 'text';

  ngOnInit(): void {
    this.registerChanges();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(obj: string): void {
    this.control.setValue(obj);
  }


  public registerChanges() {
    this.control.valueChanges.subscribe((value: string) => {
      this.onChange(value);
    })
  }


}
