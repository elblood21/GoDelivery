import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido.models';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {

  pedidos = [] as Array<Pedido>;
  loading=false;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    /* AQUI AGREGAMOS PEDIDOS DE PRUEBA */
    this.getPedidosFAKE();
    /* EN CASO DE TENER PEDIDOS REALES DESCOMENTAR LO DE ABAJO Y COMENTAR ARRIBA */
    this.getPedidos();
  }

  getPedidosFAKE() {
    this.pedidos.push({
      id:"1",
      tienda:"PC Factory",
      cliente:"Nombre cliente",
      direccionRetiro:"Los maitenes 123, Estación central",
      cantRetiros:2,
      logo:"../../assets/images/iso-pcfactory.png",
      bultos:3,
      fechaRetiro:"05/09/2023 15:00",
      estado:"Listo para retirar",
      direccionEntrega:"Casa matriz"
    });
    this.pedidos.push({
      id:"2",
      tienda:"SP Digital",
      cliente:"Nombre cliente",
      direccionRetiro:"Av. libertad 45, Viña del mar",
      cantRetiros:5,
      logo:"../../assets/images/spdigital.jpeg",
      bultos:6,
      fechaRetiro:"07/09/2023 17:00",
      estado:"Retirado",
      direccionEntrega:"Casa matriz"
    });
    this.pedidos.push({
      id:"3",
      tienda:"Zmart",
      cliente:"Nombre cliente",
      direccionRetiro:"Psje. Santa rosa 995, Quillota",
      cantRetiros:1,
      logo:"../../assets/images/zmart.png",
      bultos:4,
      fechaRetiro:"06/09/2023 12:00",
      estado:"Listo para retirar",
      direccionEntrega:"Casa matriz"
    });
  }

  getPedidos() {
    /* AQUI VA LA FUNCION PARA TRAER LOS PEDIDOS */
  }

}
