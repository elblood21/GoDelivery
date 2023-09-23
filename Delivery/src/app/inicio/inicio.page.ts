import { Component, OnInit } from '@angular/core';
import { ObjetoService } from '../service/objeto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  retiros_pendientes=0;
  retiros_realizados=0;
  entregas_pendientes=0;
  entregas_realizadas=0;
  constructor(private objetoService:ObjetoService) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    var indices = await this.objetoService.obtenerInicio();
    this.retiros_pendientes = indices.retiros_pendientes;
    this.retiros_realizados = indices.retiros_realizados;
    this.entregas_pendientes = indices.entregas_pendientes;
    this.entregas_realizadas = indices.entregas_realizadas;
  }

}
