import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import {RouterModule, Routes} from "@angular/router";
import { RestaurantDetailComponent } from './detail/detail.component';
import { MfeOrderComponent } from './mfe-order/mfe-order-component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent
  },
  {
    path: ':slug',
    component: RestaurantDetailComponent,
  },
  {
    path: ':slug/order',
    component: MfeOrderComponent,
  }
];

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantDetailComponent,
    MfeOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RestaurantModule { }
