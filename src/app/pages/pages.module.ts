import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { MensajesComponent } from './mensajes/mensajes.component';

import { AcercadeComponent } from './acercade/acercade.component';



@NgModule({
  declarations: [InicioComponent, MensajesComponent,  AcercadeComponent],
  imports: [
    CommonModule
  ],
  exports:[InicioComponent, MensajesComponent,AcercadeComponent]
})
export class PagesModule { }
