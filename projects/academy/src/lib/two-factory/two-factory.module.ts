import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoFactoryComponent } from './two-factory.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    TwoFactoryComponent
  ],
  exports: [
    TwoFactoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class TwoFactoryModule { }
