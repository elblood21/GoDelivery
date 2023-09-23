import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ObjetoService } from '../service/objeto.service';


@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {

  entregas: any = [];

  constructor(private navCtrl: NavController,private route: ActivatedRoute,private objetoService : ObjetoService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.obtenerEntregasRetiradas();
  }

  async obtenerEntregasRetiradas() {
    this.entregas = await this.objetoService.obtenerRetirosRetirados();
    console.log(this.entregas);
  }
  
}
