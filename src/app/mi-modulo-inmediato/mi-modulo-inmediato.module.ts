import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiComponenteInmediatoComponent } from '../mi-componente-inmediato/mi-componente-inmediato.component';



@NgModule({
  declarations: [MiComponenteInmediatoComponent],
  imports: [
    CommonModule
  ],
  exports: [MiComponenteInmediatoComponent]
})
export class MiModuloInmediatoModule { }
