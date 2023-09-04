import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionEntregaPageRoutingModule } from './confirmacion-entrega-routing.module';

import { ConfirmacionEntregaPage } from './confirmacion-entrega.page';

import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionEntregaPageRoutingModule,
    SharedModule,
  ],
  declarations: [ConfirmacionEntregaPage]
})
export class ConfirmacionEntregaPageModule {}
