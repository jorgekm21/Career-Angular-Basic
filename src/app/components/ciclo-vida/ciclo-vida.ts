import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  imports: [],
  templateUrl: './ciclo-vida.html',
  styleUrl: './ciclo-vida.css',
})
export class CicloVida  implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    console.log("Se elimino el componente")
  }

  ngOnInit(): void {
    console.log("Se cargo el componente")
  }

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

}
