import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formularioLogin: FormGroup;

  userData = {
    username: '',
    password: '',
    email: ''
  };

  

  ngOnInit() {
    const storedUserDataString = localStorage.getItem('userData');

    if (storedUserDataString) {
      const storedUserData = JSON.parse(storedUserDataString);
      console.log('Datos en localStorage:', storedUserData);
    } else {
      console.log('No hay datos en localStorage.');
    }
  }

  constructor(public fb: FormBuilder, private navCtrl: NavController) {
    this.formularioLogin = this.fb.group({
      'email': ['', Validators.required], // Campo de correo electrónico
      'password': ['', Validators.required], // Campo de contraseña
    });
  }


  login() {
    // Recupera los datos almacenados en el LocalStorage
    const storedUserDataString = localStorage.getItem('userData');

    if (storedUserDataString) {
      const storedUserData = JSON.parse(storedUserDataString);

      // Verifica si el nombre de usuario y la contraseña coinciden
      if (
        this.formularioLogin.value.email === storedUserData.email &&
        this.formularioLogin.value.password === storedUserData.password
      ) {
        // Inicio de sesión exitoso, redirige a la página principal
        this.navCtrl.navigateForward('/tabs/inicio'); // Cambia '/home' por la ruta correcta
      } else {
        // Las credenciales no coinciden, muestra un mensaje de error
        console.log('Credenciales incorrectas.');
      }
    } else {
      // No se encontraron datos de usuario en el LocalStorage
      console.log('La cuenta no existe.');
    }
  }
}
