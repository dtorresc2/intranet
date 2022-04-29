import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { Router } from '@angular/router';

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
}
