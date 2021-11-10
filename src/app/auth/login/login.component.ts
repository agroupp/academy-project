import {AuthService} from '../auth.service';

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface LoginForm {
  email: string;
  password: string;
  twoFactory: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public formGroup?: FormGroup;
  someValue: any;
  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.generateForm();

  }

  public generateForm() {
    this.formGroup = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.compose([Validators.required,Validators.minLength(4)])],
      twoFactory:['',Validators.required],
    })
    // setTimeout(()=>{
    //   this.formGroup?.patchValue({email: 'arthur@e-squre.io', password: '1111', firstName: 'Mobi'});
    //  const control = this.formGroup?.get('twoFactory')
    // },5000)
  }

  submit(form:LoginForm ) {
    // this.authService.login(form);
    console.log(form);
  }


}
