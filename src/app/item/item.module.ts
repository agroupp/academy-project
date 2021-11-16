import { ChangeTitlePipe } from './../change-title.pipe';
import { ItemComponent } from './item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeBgColorDirective } from '../change-bg-color.directive';
import {ClipboardModule} from '@angular/cdk/clipboard';


@NgModule({
  declarations: [ItemComponent, ChangeTitlePipe, ChangeBgColorDirective],
  exports: [ItemComponent],
  imports: [
    CommonModule,
    ClipboardModule
  ]
})
export class ItemModule { }
