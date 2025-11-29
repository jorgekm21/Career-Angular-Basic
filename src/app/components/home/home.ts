import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titulo: string = "Angular Basico"
  activo: boolean = true
  mostrarTitulo: boolean = false
  productos = [
    {
      "nombre": "Helado",
      "precio": 300,
      "categoria": "Dulces"
    },
    {
      "nombre": "Telefono",
      "precio": 5000,
      "categoria": "Tecnologia"
    },
    {
      "nombre": "Nevera",
      "precio": 5800,
      "categoria": "Linea Blanca"
    }
  ]

  tema = {
    "dificultad": "baja"
  }

  saludar = () : void => {
    this.activo = false
    console.log("Hola Mundo")
  }

  toggleElTitulo = () : void => {
    if (this.mostrarTitulo) {
      this.mostrarTitulo = false
    }
    else {
      this.mostrarTitulo = true
    }
  }
}
