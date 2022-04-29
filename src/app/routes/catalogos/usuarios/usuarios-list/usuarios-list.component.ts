import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {
  usuarios = [];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  async ngOnInit() {
    this.usuarios = await this.usuarioService.obtenerUsuarios();
  }

}
