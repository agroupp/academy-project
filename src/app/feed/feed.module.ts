import { ItemComponent } from './../item/item.component';
import { FeedComponent } from './feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { ItemModule } from '../item/item.module';
import { InfinteScrollDirective } from '../infinte-scroll.directive';
import { FeedPresentationComponent } from './feed-presentation/feed-presentation.component';
import {MatInputModule} from "@angular/material/input";
import {TextInputModule} from "@academy";



@NgModule({
  declarations: [
    FeedComponent,
    InfinteScrollDirective,
    FeedPresentationComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    ItemModule,
    MatInputModule,
    TextInputModule
  ]
})
export class FeedModule { }
