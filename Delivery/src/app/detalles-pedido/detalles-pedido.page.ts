import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-pedido',
  templateUrl: './detalles-pedido.page.html',
  styleUrls: ['./detalles-pedido.page.scss'],
})
export class DetallesPedidoPage implements OnInit {
  pedidoInfo: any = {}; // Almacena la información del pedido

  constructor(private route: ActivatedRoute, public navCtrl: NavController) {}

  ngOnInit() {
    // Obtén los parámetros de la URL (si estás pasando información a través de la URL)
    this.route.queryParams.subscribe(params => {
      this.pedidoInfo = JSON.parse(params['pedidoInfo']);
    });
  }

  volverPaginaAnterior() {
    this.navCtrl.back();
  }
}


