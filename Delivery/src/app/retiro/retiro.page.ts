import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ObjetoService } from '../service/objeto.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.page.html',
  styleUrls: ['./retiro.page.scss'],
})
export class RetiroPage {

  retiros: any = [];

  constructor(private navCtrl: NavController,private objetoService : ObjetoService) {}

  ngOnInit() {
    this.retiros = this.objetoService.obtenerRetirosEntrega()
    console.log(this.retiros)
  }

}

