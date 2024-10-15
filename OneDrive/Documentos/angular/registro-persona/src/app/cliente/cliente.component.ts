
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../registro.service.service';
import { Cliente } from '../models';
import { RouterLink, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  textoBoton: string = 'Agregar Cliente'; // Texto inicial del botón
  clientes: Cliente[] = [];
  
  nuevoCliente: Cliente = { nombre: '', ci: '', telefono: '', ciudad: '', direccion: '' };

  listasVisible: boolean = false; // Controlar visibilidad de listas

  constructor(private registroService: RegistroService) {
    this.cargarDatos();
  }

  cargarDatos() {
    this.clientes = this.registroService.mostrarClientes();
  }

  
  agregarCliente() {
    this.registroService.agregarCliente(this.nuevoCliente.nombre, this.nuevoCliente.ci, this.nuevoCliente.telefono, this.nuevoCliente.ciudad, this.nuevoCliente.direccion);
    this.cargarDatos();
    this.resetNuevoCliente();
  }
  eliminarCliente(ci: string | null) {
    if (ci) {
      this.registroService.eliminarCliente(ci);
      this.cargarDatos();
    }
  }

  verListas() {
    this.listasVisible = !this.listasVisible; // Alternar la visibilidad de las listas
    if (this.listasVisible) {
      this.cargarDatos(); // Cargar datos solo si se van a mostrar
    }
  }
  private resetNuevoCliente() {
    this.nuevoCliente = { nombre: '', ci: '', telefono: '', ciudad: '', direccion: '' };
  }

}

