import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login-register/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detalles-pedido',
    loadChildren: () => import('./detalles-pedido/detalles-pedido.module').then( m => m.DetallesPedidoPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./login-register/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
