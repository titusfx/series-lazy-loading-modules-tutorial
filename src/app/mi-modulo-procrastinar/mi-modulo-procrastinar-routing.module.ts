import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiModuloProcrastinarComponent } from './mi-modulo-procrastinar.component';

const routes: Routes = [{ path: '', component: MiModuloProcrastinarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiModuloProcrastinarRoutingModule { }
