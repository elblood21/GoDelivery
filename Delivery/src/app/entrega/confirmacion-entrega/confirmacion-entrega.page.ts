import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-confirmacion-entrega',
  templateUrl: './confirmacion-entrega.page.html',
  styleUrls: ['./confirmacion-entrega.page.scss'],
})
export class ConfirmacionEntregaPage implements OnInit {
  rut: string = '';
  nombre: string = '';
  confirmarHabilitado: boolean = false;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  verificarCamposCompletados() {
    this.confirmarHabilitado = this.rut.trim() !== '' && this.nombre.trim() !== '';
  }

  async mostrarAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas confirmar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirmación cancelada');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirmación exitosa');
            // Aquí puedes agregar la lógica que se ejecutará cuando se confirme.
          }
        }
      ]
    });

    await alert.present();
  }
}
