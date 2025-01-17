import { Injectable } from '@angular/core';
import { Usuario, Cliente } from './models';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private usuarios: Usuario[] = [];
  private clientes: Cliente[] = [];

  agregarUsuario(nombre: string, ci: string, telefono: string, ciudad: string, username: string): void {
    const usuario = new Usuario(nombre, ci, telefono, ciudad, username);
    this.usuarios.push(usuario);
    console.log('Usuario agregado:', usuario);
  }

  agregarCliente(nombre: string, ci: string, telefono: string, ciudad: string, direccion: string): void {
    const cliente = new Cliente(nombre, ci, telefono, ciudad, direccion);
    this.clientes.push(cliente);
  }

  mostrarUsuarios(): Usuario[] {
    return this.usuarios;
  }
  

  mostrarClientes(): Cliente[] {
    return this.clientes;
  }

  eliminarUsuario(nombre?: string, ci?: string): void {
    this.usuarios = this.usuarios.filter(usuario => 
        (ci && usuario.ci !== ci) || (nombre && usuario.nombre !== nombre)
    );
}

  eliminarCliente(nombre?:string, ci?: string): void {
    this.clientes = this.clientes.filter(cliente => 
     ( ci&& cliente.ci !== ci)||(nombre && cliente.nombre !== nombre));
  }
}
