import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {

  entrega: any;

  constructor(private navCtrl: NavController,private route: ActivatedRoute) { }

  goToDetalleEntregaPage(entrega: any) {
    this.navCtrl.navigateForward(['/tabs/detalle-entrega'], {
      queryParams: { entrega: JSON.stringify(entrega) }
    });
    console.log(entrega);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const entregaParam = params['retiro']; // Cambiamos el nombre aquí
      if (entregaParam) {
        this.entrega = JSON.parse(entregaParam); // Almacenamos en una variable llamada "entrega"
        console.log(this.entrega); // Mostramos "entrega" en la consola
      }
    });
}
}
