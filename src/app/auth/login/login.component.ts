import { AuthService } from '../auth.service';

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.authService.login({
    //   name: 'Eliran',
    //   email: 'blabla@e-square.io'
    // });
  }

  submit(form: NgForm) {
    this.authService.login(form.value);
  }

  

}
