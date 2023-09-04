import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo="";
  contrasena="";
  contrasenaVisible=false;

  constructor() { }

  ngOnInit() {
  }

  /* AL HACER CLICK EN EL ICONO DEL INPUT CONTRASEÑA SE HARA VISIBLE O NO SEGUN VALOR */
  showContrasena(active:boolean) {
    this.contrasenaVisible=active;
  }

}
