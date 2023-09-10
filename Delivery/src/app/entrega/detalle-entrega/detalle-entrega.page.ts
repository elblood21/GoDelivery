import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-entrega',
  templateUrl: './detalle-entrega.page.html',
  styleUrls: ['./detalle-entrega.page.scss'],
})
export class DetalleEntregaPage implements OnInit {

  entrega: any;

  constructor(private route: ActivatedRoute) {
  }

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    const entregaParam = params['entrega'];
    if (entregaParam) {
      this.entrega = JSON.parse(entregaParam);
      console.log(this.entrega)
    }
  });
}
}