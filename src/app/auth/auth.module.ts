
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {RegisterComponent, RegisterDialogComponent} from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {TextInputModule, TwoFactoryModule} from '@academy';
import {LayoutModule} from "@angular/cdk/layout";
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [LoginComponent, RegisterComponent,RegisterDialogComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    TextInputModule,
    TwoFactoryModule,
    LayoutModule,
    MatDialogModule

  ]
})
export class AuthModule { }
