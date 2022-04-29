import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos/documentos.component';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosFormComponent } from './documentos/documentos-form/documentos-form.component';
import { DocumentosListComponent } from './documentos/documentos-list/documentos-list.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: DocumentosComponent,
    children: [
      {
        path: '', 
        component: DocumentosListComponent
      },
      {
        path: 'crear', 
        component: DocumentosFormComponent
      },
      {
        path: ':id/editar',
        component: DocumentosFormComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    DocumentosComponent,
    DocumentosFormComponent,
    DocumentosListComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DocumentosModule { }
