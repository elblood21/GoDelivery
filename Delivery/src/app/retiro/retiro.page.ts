import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.page.html',
  styleUrls: ['./retiro.page.scss'],
})
export class RetiroPage {

  constructor(public navCtrl: NavController) {}

  abrirDetallesPedido() {
    const pedidoInfo = {
      nombreTienda: 'PC Factory',
      direccionRetiro: 'Dirección de retiro',
      cliente: 'Nombre del cliente',
      id: 'ID del pedido',
      bultos: 'Número de bultos',
    };
  
    this.navCtrl.navigateForward(['/detalles-pedido'], {
      queryParams: {
        pedidoInfo: JSON.stringify(pedidoInfo),
      },
    });
  }

  volverPaginaAnterior() {
    this.navCtrl.back();
  }
}

