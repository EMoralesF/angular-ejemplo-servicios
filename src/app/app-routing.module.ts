import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesModule } from './pages/pages.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { AppComponent } from './app.component';



const routes: Routes = [
{
  path:'inicio',
  component: InicioComponent
},
{
  path:'mensajes',
  component: MensajesComponent
},
{
  path: 'acercade',
  component: AcercadeComponent
},
{
  path: '**',
  redirectTo : 'inicio'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
