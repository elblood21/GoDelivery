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
    // Código para redirigir a la página de detalles del pedido
  }

  volverPaginaAnterior() {
    this.navCtrl.back();
  }
}
