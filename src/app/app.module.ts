import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DetalleComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
