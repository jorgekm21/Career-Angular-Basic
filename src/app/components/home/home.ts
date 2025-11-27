import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titulo: string = "Angular Basico"
  activo: boolean = true

  saludar = () : void => {
    this.activo = false
    console.log("Hola Mundo")
  }
}
