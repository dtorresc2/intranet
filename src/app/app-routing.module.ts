import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './routes/configuracion/configuracion/configuracion.component';
// import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/documentos', pathMatch: 'full' },
  // { path: 'configuracion', loadChildren: () => import('./routes/configuracion/configuracion.module').then(m => m.ConfiguracionModule) },
  { path: 'catalogos', loadChildren: () => import('./routes/catalogos/catalogos.module').then(m => m.CatalogosModule) },
  { path: 'documentos', loadChildren: () => import('./routes/documentos/documentos.module').then(m => m.DocumentosModule) },
  // { path: 'configuracion', component: ConfiguracionComponent },
  // { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  // { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  // { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  // { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  // { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  // { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  // { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  // { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  // { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
