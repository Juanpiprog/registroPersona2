import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // Asegúrate de importar RouterLink
import { RegistroComponent } from './registro/registro.component'; // Asegúrate de que la ruta sea correcta
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CaratulaComponent } from './caratula/caratula.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistroComponent,UsuarioComponent,ClienteComponent,CaratulaComponent,MenuComponent,RouterLink], // Importa RouterOutlet, RegistroComponent y RouterLink
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registro-persona';
}
