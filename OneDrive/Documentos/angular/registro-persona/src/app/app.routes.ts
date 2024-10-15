import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { ClienteComponent } from './cliente/cliente.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';
import { CaratulaComponent } from './caratula/caratula.component';

export const routes: Routes = [
    { path: '', component: CaratulaComponent }, // Ruta por defecto
    { path: 'menu', component: MenuComponent }, // Ruta por defecto
    { path: 'registro', component: RegistroComponent }, // Ruta por defecto
    { path: 'cliente', component: ClienteComponent }, // Ruta para Cliente
    { path: 'usuario', component: UsuarioComponent }, // Ruta para Usuario
    
];
