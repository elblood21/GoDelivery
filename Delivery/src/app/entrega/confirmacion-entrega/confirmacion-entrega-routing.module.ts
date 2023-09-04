import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionEntregaPage } from './confirmacion-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionEntregaPageRoutingModule {}
