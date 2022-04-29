import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {
  usuarios = [];
  carga: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.carga = false;
    this.usuarios = await this.usuarioService.obtenerUsuarios();
    this.carga = true;
  }

  crearUsuario() {
    this.router.navigate(['catalogos/usuarios', 'crear']);
  }

  editarUsuario(id) {
    this.router.navigate(['catalogos/usuarios', id, 'editar']);
  }

  eliminarUsuario(id) {
    Swal.fire({
      title: 'Usuarios',
      text: "¿Estas seguro de eliminar el usuario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then(async (result) => {
      if (result.isConfirmed) {
        this.carga = false;
        await this.usuarioService.eliminarUsuario(id);
        this.usuarios = await this.usuarioService.obtenerUsuarios();
        this.carga = true;
        
        Swal.fire(
          'Usuarios',
          'Usuario eliminado correctamente',
          'success'
        );
      }
    })


  }
}
