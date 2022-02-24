import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ConfiguracionComponent },
]

@NgModule({
  declarations: [ConfiguracionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ConfiguracionModule { }
