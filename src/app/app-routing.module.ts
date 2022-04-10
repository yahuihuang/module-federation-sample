import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FileType, MfeUtil } from 'utils';

export const mef = new MfeUtil();

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'restaurants',
    loadChildren: () => mef.loadRemoteFile({
      remoteName: "restaurant",
      remoteEntry: `http://127.0.0.1:4204/remoteRestaurant.js`,
      exposedFile: "RestaurantModule",
      exposeFileType: FileType.Module
    }).then((m) => m.RestaurantModule),
  },
  {
    path: 'order',
    loadChildren: () => mef.loadRemoteFile({
      remoteName: "orders",
      remoteEntry: `http://127.0.0.1:4205/remoteOrders.js`,
      exposedFile: "OrderModule",
      exposeFileType: FileType.Module
    }).then((m) => m.OrderModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
