import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CicloVida } from './components/ciclo-vida/ciclo-vida';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

export const routes: Routes = [
    

    {path:'home', component: Home},
    {path:'ciclo-vida', component: CicloVida},
    {path:'header', component: Header},
    {path:'footer', component: Footer},
    {path:'**', component: Home},
];
