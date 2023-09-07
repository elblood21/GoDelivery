import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public alertControler: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertControler.create({
      header: 'Cerrar sesión',
      message: '¿Esta seguro de querer cerrar la sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
        {
          text: 'ok',
          
          handler: (blah) => {
            console.log('Cerrar sesión');
          }
        }
      ]
    });

    await alert.present();
  }
}
