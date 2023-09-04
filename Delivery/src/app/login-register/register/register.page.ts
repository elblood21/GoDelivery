import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  correo="";
  contrasena="";
  contrasenaVisible=false;

  verifContrasena="";
  verifContrasenaVisible=false;
  

  constructor() { }

  ngOnInit() {
  }

  /* AL HACER CLICK EN EL ICONO DEL INPUT CONTRASEÑA SE HARA VISIBLE O NO SEGUN VALOR */
  showContrasena(active:boolean) {
    this.contrasenaVisible=active;
  }

  /* AL HACER CLICK EN EL ICONO DEL INPUT VERIFICAR CONTRASEÑA SE HARA VISIBLE O NO SEGUN VALOR */
  showVerifContrasena(active:boolean) {
    this.verifContrasenaVisible=active;
  }

}
