import {AuthService} from '../auth.service';

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";
import {RegisterDialogComponent} from "../register/register.component";

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Router} from "@angular/router";


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
  currentScreenSize: string = '';
  public formGroup?: FormGroup;
  someValue: any;
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  constructor(private authService: AuthService, private fb: FormBuilder,public dialog: MatDialog,breakpointObserver: BreakpointObserver,private router:Router) {

    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
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

  submit() {
    const b = this.formGroup?.valid;

    if(b){
     this.authService.login(this.formGroup?.getRawValue());
    }else {

    }
  }

  register() {
    if (['Small', 'XSmall'].includes(this.currentScreenSize)) {
     this.router.navigate(['login/r']).then();
    }else {
      this.openRegisterDialog();
    }
  }

  private openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      data: {
        email: this.formGroup?.get('email')?.value,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


}
