import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


import { HeaderComponent} from 'src/app/shared/header/header.component'


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports:[
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ]
})
export class SharedModule { }
