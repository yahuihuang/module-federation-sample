Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore

@yahuihuang
ishedu
/
module-federation-angular
Public
Code
Issues
1
Pull requests
Actions
Projects
Wiki
Security
Insights
module-federation-angular/projects/app3-orders/src/app/app-routing.module.ts /
@ishedu
ishedu initial commit to main
Latest commit 330c74c on 29 Nov 2021
 History
 1 contributor
43 lines (40 sloc)  1.12 KB

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileType, MfeUtil} from "utils";
import {environment} from "../environments/environment";

export const mfe = new MfeUtil();

const routes: Routes = [
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
