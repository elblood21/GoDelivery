import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ObjetoService } from 'src/app/service/objeto.service';

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
  mensaje_error2 : string = 'Contraseña debe tener almenos 6 caracteres';
  mensaje_error3 : string = 'Ingrese un correo correcto';
  mostrarMensajeError1: boolean = false;
  mostrarMensajeError2: boolean = false;
  mostrarMensajeError3: boolean = false;
  confirmPassword: string = ''; // Nuevo campo para confirmar la contraseña
  
  constructor(private navCtrl: NavController,private toastController: ToastController,private objetoService:ObjetoService) { }

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

        this.objetoService.registerUsuario(this.userData);
          
        // Redirige a la página de inicio de sesión u otra página según tu flujo de la aplicación
        this.mostrarMensajeRegistro()
        this.navCtrl.navigateForward('/login');
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

    async mostrarMensajeRegistro() {
      const toast = await this.toastController.create({
        message: 'Cuenta creada correctamente',
        duration: 1000, // Duración en milisegundos
        position: 'bottom' // Posición en la que aparecerá el mensaje
      });
      toast.present();
    }
  }

