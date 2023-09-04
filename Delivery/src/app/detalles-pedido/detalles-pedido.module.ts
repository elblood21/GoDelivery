import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesPedidoPageRoutingModule } from './detalles-pedido-routing.module';

import { DetallesPedidoPage } from './detalles-pedido.page';

import {SharedModule} from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesPedidoPageRoutingModule,
    SharedModule
  ],
  declarations: [DetallesPedidoPage]
})
export class DetallesPedidoPageModule {}
