import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

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
  }

  submit() {
    console.log(this.form);
  }

}
