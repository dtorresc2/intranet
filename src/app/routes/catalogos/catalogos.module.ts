import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: CatalogosComponent },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    children: [
      {
        path: '',
        component: UsuariosListComponent
      },
      {
        path: 'crear',
        component: UsuariosFormComponent
      },
      {
        path: ':id/editar',
        component: UsuariosListComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    CatalogosComponent, 
    UsuariosComponent, 
    UsuariosListComponent, 
    UsuariosFormComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    UsuarioService
  ]
})
export class CatalogosModule { }
