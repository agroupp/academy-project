import {Component, ElementRef, forwardRef, Input, OnInit, QueryList, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {TInputText} from "@academy";
import {ITwoFactoryInterface} from "./two-factory.interface";

@Component({
  selector: 'ac-two-factory',
  templateUrl: './two-factory.component.html',
  styleUrls: ['./two-factory.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TwoFactoryComponent),
      multi: true
    }
  ]
})
export class TwoFactoryComponent implements OnInit, ControlValueAccessor {
  arr = [
    'a1',
    'a2',
    'a3',
    'a4',
    'a5',
    'a6'
  ]
  form = this.fb.group({
    a1: ['', Validators.compose([Validators.min(0), Validators.max(9)])],
    a2: ['', Validators.compose([Validators.min(0), Validators.max(9)])],
    a3: ['', Validators.compose([Validators.min(0), Validators.max(9)])],
    a4: ['', Validators.compose([Validators.min(0), Validators.max(9)])],
    a5: ['', Validators.compose([Validators.min(0), Validators.max(9)])],
    a6: ['', Validators.compose([Validators.min(0), Validators.max(9)])]
  })
  isDisabled = false;
  onChange = (str: string) => {
  };
  @ViewChild('formBody') formBody!: ElementRef;

  constructor(private fb: FormBuilder) {
  }

  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() type: TInputText = 'text';

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

  writeValue(obj: ITwoFactoryInterface): void {
    this.form.patchValue({...obj});
  }

  public registerChanges() {
    this.form.valueChanges.subscribe((value: ITwoFactoryInterface) => {
        const {a1, a2, a3, a4, a5, a6} = value;
        if (this.form.valid) {
          this.onChange('' + a1 + a2 + a3 + a4 + a5 + a6);
        }
      }
    )
  }

  next(i: number) {
    const control = this.form.get(this.arr[i]);
    if (control) {
      const el = this.formBody.nativeElement.getElementsByClassName('input-a' + (i + 1));
      el[0]?.focus();
    }else {
      const el = this.formBody.nativeElement.getElementsByClassName('input-a6');
      el[0]?.focus();
    }
  }

}
