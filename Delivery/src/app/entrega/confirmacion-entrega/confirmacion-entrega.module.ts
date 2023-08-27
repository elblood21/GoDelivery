import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionEntregaPageRoutingModule } from './confirmacion-entrega-routing.module';

import { ConfirmacionEntregaPage } from './confirmacion-entrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionEntregaPageRoutingModule
  ],
  declarations: [ConfirmacionEntregaPage]
})
export class ConfirmacionEntregaPageModule {}
