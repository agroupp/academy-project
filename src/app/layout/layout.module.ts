import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule, Routes} from "@angular/router";
import { CenterComponent } from './center/center.component';
import { TilesComponent } from './tiles/tiles.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
  { path: 'l', component: LayoutComponent , children:[
      { path: 'center', component: CenterComponent },
      { path: 'tiles', component: TilesComponent },
      { path: 'full', component: FullLayoutComponent },
    ]},
];
@NgModule({
  declarations: [
    LayoutComponent,
    NavBarComponent,
    CenterComponent,
    TilesComponent,
    FullLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
