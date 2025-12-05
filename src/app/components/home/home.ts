import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Validator } from '../../services/validator'

@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private validator: Validator){

  }

  tema = {
    "dificultad": "baja"
  }

  titulo: string = "Angular Basico"
  activo: boolean = true
  mostrarTitulo: boolean = false
  

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
