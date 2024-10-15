import { Component } from '@angular/core';
import { RegistroService } from '../registro.service.service';
import { Cliente,Usuario,} from '../models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  usuarios: Usuario[] = [];
  clientes: Cliente[] = [];
  
  nuevoUsuario: Usuario = { nombre: '', ci: '', telefono: '', ciudad: '', username: '' };
  nuevoCliente: Cliente = { nombre: '', ci: '', telefono: '', ciudad: '', direccion: '' };

  listasVisible: boolean = false; // Controlar visibilidad de listas

  constructor(private registroService: RegistroService) {
    this.cargarDatos();
  }

  cargarDatos() {
    this.usuarios = this.registroService.mostrarUsuarios();
    this.clientes = this.registroService.mostrarClientes();
  }

  agregarUsuario() {
    this.registroService.agregarUsuario(this.nuevoUsuario.nombre, this.nuevoUsuario.ci, this.nuevoUsuario.telefono, this.nuevoUsuario.ciudad, this.nuevoUsuario.username);
    this.cargarDatos();
    this.resetNuevoUsuario();
  }

  agregarCliente() {
    this.registroService.agregarCliente(this.nuevoCliente.nombre, this.nuevoCliente.ci, this.nuevoCliente.telefono, this.nuevoCliente.ciudad, this.nuevoCliente.direccion);
    this.cargarDatos();
    this.resetNuevoCliente();
  }

  eliminarUsuario(ci: string | null) {
    if (ci) {
      this.registroService.eliminarUsuario(ci);
      this.cargarDatos();
    }
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

  private resetNuevoUsuario() {
    this.nuevoUsuario = { nombre: '', ci: '', telefono: '', ciudad: '', username: '' };
  }

  private resetNuevoCliente() {
    this.nuevoCliente = { nombre: '', ci: '', telefono: '', ciudad: '', direccion: '' };
  }

}