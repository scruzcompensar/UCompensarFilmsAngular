import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactanosComponent } from './contactanos/contactanos.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contactanos', component: ContactanosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
