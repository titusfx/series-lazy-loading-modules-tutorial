import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiModuloProcrastinarRoutingModule } from './mi-modulo-procrastinar-routing.module';
import { MiModuloProcrastinarComponent } from './mi-modulo-procrastinar.component';



@NgModule({
  declarations: [MiModuloProcrastinarComponent, ],
  imports: [
    CommonModule,
    MiModuloProcrastinarRoutingModule
  ],
  exports: []
})
export class MiModuloProcrastinarModule { }
