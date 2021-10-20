import { ItemComponent } from './../item/item.component';
import { FeedComponent } from './feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { ItemModule } from '../item/item.module';
import { InfinteScrollDirective } from '../infinte-scroll.directive';



@NgModule({
  declarations: [
    FeedComponent,
    InfinteScrollDirective,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    ItemModule
  ]
})
export class FeedModule { }
