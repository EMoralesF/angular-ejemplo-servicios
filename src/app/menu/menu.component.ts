import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  opciones=[
    {
      ruta: '/inicio',
      texto: 'Inicio'
    },
    {
      ruta: '/mensajes',
      texto: 'Mensajes'
    },
    {
      ruta: '/acercade',
      texto: 'Acerca De'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
