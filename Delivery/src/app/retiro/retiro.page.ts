import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.page.html',
  styleUrls: ['./retiro.page.scss'],
})
export class RetiroPage {

  public retiros : any [] = [
    {
      id: '10',
      direccion: 'Dos poniente',
      numero: '4358',
      comuna: 'Quilicura',
      nombre_cliente: 'José Azul',
      estado: 'En ruta',
      nombre_tienda : 'Pc Factory',
      direccion_tienda : 'Av. Las Condes 7537',
      comuna_tienda : 'Las condes',
      numero_bultos : '2',

    },
    {
      id: '20',
      direccion: 'Camino al cerezo',
      numero: '2368',
      comuna: 'Peñalolen',
      nombre_cliente: 'Rodrigo Bueno',
      estado: 'En ruta',
      nombre_tienda : 'Sp Digital',
      direccion_tienda : 'Padre Mariano 356',
      comuna_tienda : 'Providencia',
      numero_bultos : '3',
    }
  ]

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
  }

  goToDetalleEntregaPage(retiro: any) {
    this.navCtrl.navigateForward(['/tabs/detalles-pedido'], {
      queryParams: { retiro: JSON.stringify(retiro) }
    });
    console.log(retiro);
  }

}

