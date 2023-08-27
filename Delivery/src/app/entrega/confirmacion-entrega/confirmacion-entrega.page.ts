import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacion-entrega',
  templateUrl: './confirmacion-entrega.page.html',
  styleUrls: ['./confirmacion-entrega.page.scss'],
})
export class ConfirmacionEntregaPage implements OnInit {
  rut: string = '';
  nombre: string = '';

  constructor() { }

  ngOnInit() {
  }

}
