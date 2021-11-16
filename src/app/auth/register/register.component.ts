import {Component, OnInit, ChangeDetectionStrategy, Inject, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  @Input() email:string = '';
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('',
      [Validators.required])
  })

  constructor() {
    // this.form.valueChanges.subscribe(console.log);
    this.form.get('email')?.valueChanges.subscribe(console.log);

  }

  ngOnInit(): void {
    this.form.get('email')?.patchValue(this.email);
  }

  submit() {
    console.log(this.form);
  }

}


@Component({
  selector: 'app-dialog-register',
  templateUrl: 'dialog-register.component.html',
})
export class RegisterDialogComponent {
  email:string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: {email?:string}) {
    this.email = this.data.email || '';
  }


}
