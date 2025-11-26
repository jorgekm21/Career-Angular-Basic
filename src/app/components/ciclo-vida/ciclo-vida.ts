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

}
