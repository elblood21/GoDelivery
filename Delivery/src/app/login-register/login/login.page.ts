import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { ObjetoService } from 'src/app/service/objeto.service';


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
    console.log(storedUserDataString)
    if (storedUserDataString) {
      const storedUserData = JSON.parse(storedUserDataString);
      console.log('Datos en localStorage:', storedUserData);
    } else {
      console.log('No hay datos en localStorage.');
    }
  }

  constructor(public fb: FormBuilder, private navCtrl: NavController,private toastController: ToastController,private objetoService:ObjetoService) {
    this.formularioLogin = this.fb.group({
      'email': ['', Validators.required], // Campo de correo electrónico
      'password': ['', Validators.required], // Campo de contraseña
    });
  }


  async login() {

    var response = await this.objetoService.login(this.formularioLogin.value);
    if(response.value) {
      localStorage.setItem('userData', JSON.stringify(response.user));
      this.navCtrl.navigateForward('/tabs/inicio');
    }
  }

}


