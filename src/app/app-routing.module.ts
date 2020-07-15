import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiComponenteInmediatoComponent } from './mi-componente-inmediato/mi-componente-inmediato.component';


const routes: Routes = [
{
  path: 'inmediato',
  component: MiComponenteInmediatoComponent,
},
{ path: 'procrastinar',
  loadChildren: () => import('./mi-modulo-procrastinar/mi-modulo-procrastinar.module').then(m => m.MiModuloProcrastinarModule),
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
