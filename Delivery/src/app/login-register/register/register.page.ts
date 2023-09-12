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
  
  mensaje_error1 : string = 'Contraseñas incorrectas';
  mensaje_error2 : string = 'La contraseña debe tener al menos 6 caracteres.';
  mensaje_error3 : string = 'Ingrese un correo correcto';
  mostrarMensajeError1: boolean = false;
  mostrarMensajeError2: boolean = false;
  mostrarMensajeError3: boolean = false;
  confirmPassword: string = ''; // Nuevo campo para confirmar la contraseña
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }



  register() {
    // Validar que la contraseña tenga al menos 6 caracteres
    if (this.userData.password.length >= 6) {
      // Contraseña cumple con la longitud mínima
  
      // Validar que la contraseña y la confirmación coincidan
      if (this.userData.password === this.confirmPassword) {
        // Contraseña y confirmación coinciden, procede con el registro
        if (this.userData.email.includes('@')) {
        // Guarda los datos en el LocalStorage
        localStorage.setItem('userData', JSON.stringify(this.userData));
  
        // Redirige a la página de inicio de sesión u otra página según tu flujo de la aplicación
        this.navCtrl.navigateForward('/login'); // Cambia '/login' por la ruta correcta
      } else {
        // Correo electrónico no válido, muestra un mensaje de error
        this.mostrarMensajeError3 = true;
      }
      } else {
        // Las contraseñas no coinciden, muestra un mensaje de error
        this.mostrarMensajeError1 = true;
      }
    } else {
      // La contraseña no cumple con la longitud mínima
      this.mostrarMensajeError2 = true;
      console.log('La contraseña debe tener al menos 6 caracteres.');
      
      }
    }
  }

