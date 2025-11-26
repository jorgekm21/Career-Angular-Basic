import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { CicloVida } from './components/ciclo-vida/ciclo-vida';

@Component({
  selector: 'app-root-new',
  imports: [RouterOutlet, Menu, Home, Header, CicloVida],
  templateUrl: './app.html',
  styleUrl: './app-new.css'
})
export class App {
  protected readonly title = signal('angular-basico');
}
