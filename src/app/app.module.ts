import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiModuloInmediatoModule } from './mi-modulo-inmediato/mi-modulo-inmediato.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MiModuloInmediatoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
