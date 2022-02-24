import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: CatalogosComponent },
]

@NgModule({
  declarations: [CatalogosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CatalogosModule { }
