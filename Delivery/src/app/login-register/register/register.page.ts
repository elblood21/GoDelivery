import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userData = {
    username: '',
    password: '',
    email: ''
  };
  confirmPassword: string = ''; // Nuevo campo para confirmar la contraseña
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  register() {
    // Validar que la contraseña y la confirmación coincidan
    if (this.userData.password === this.confirmPassword) {
      // Contraseña y confirmación coinciden, procede con el registro

      // Guarda los datos en el LocalStorage
      localStorage.setItem('userData', JSON.stringify(this.userData));

      // Redirige a la página de inicio de sesión u otra página según tu flujo de la aplicación
      this.navCtrl.navigateForward('/login'); // Cambia '/login' por la ruta correcta
    } else {
      // Las contraseñas no coinciden, muestra un mensaje de error
      // Aquí puedes mostrar una alerta o mensaje de error al usuario
      console.log('Las contraseñas no coinciden.');
    }
  }
}
