import { ChangeTitlePipe } from './../change-title.pipe';
import { ItemComponent } from './item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeBgColorDirective } from '../change-bg-color.directive';



@NgModule({
  declarations: [ItemComponent, ChangeTitlePipe, ChangeBgColorDirective],
  exports: [ItemComponent],
  imports: [
    CommonModule
  ]
})
export class ItemModule { }
