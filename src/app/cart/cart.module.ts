import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ItemModule } from '../item/item.module';
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    ItemModule,
    DragDropModule
  ]
})
export class CartModule { }
