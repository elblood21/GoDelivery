import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { ObjetoService } from './service/objeto.service';
import { SQLiteService } from './service/sqlite.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private initSQL: boolean = false;
  constructor(
    public platform:Platform,
    public objetoService:ObjetoService,
    public _sqlite: SQLiteService,
    private navCtrl: NavController
    ) {
    this.platform.ready().then(() => {
      this.initializeApp();
    });
  }

  async initializeApp() {
    // Recupera el dato de 'username' del LocalStorage
    const userDataString = localStorage.getItem('userData');
    
    // si userDataString tiene un valor (usuario logueado redirigira a tabs/inicio)
    if (userDataString !== null) {
      this.navCtrl.navigateForward('/tabs/inicio');
    } else {
      this.navCtrl.navigateForward('/login');
    }
    // INICIALIZACION DE SQLITE
    this._sqlite.initializePlugin().then(async ret => {
      // CERRAMOS CONEXION SI EXISTE UNA ANTERIOR
      this._sqlite.closeConnection("GoDeliverySQL");
      this.initSQL = ret;
      console.log('>>>> in App  this.initPlugin ' + this.initSQL);
      this._sqlite.sql_db = await this._sqlite.createConnection("GoDeliverySQL",false,'no-encryption',1);
      console.log(`db ${JSON.stringify(this._sqlite.sql_db)}`)
      await this._sqlite.sql_db.open();
      console.log(`after db.open`)
      this.objetoService.initialQuerys();
    });
  }
}
