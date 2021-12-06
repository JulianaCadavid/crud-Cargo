import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrearCargoComponent } from './components/crear-cargo/crear-cargo.component';
import { LeerCargoComponent } from './components/leer-cargo/leer-cargo.component';
import { ActualizarCargoComponent } from './components/actualizar-cargo/actualizar-cargo.component';
import { EliminarCargoComponent } from './components/eliminar-cargo/eliminar-cargo.component';

const routes: Routes = [ 
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'crearCargo',
    component: CrearCargoComponent,
    data: { title: 'Crear Cargo' }
  },
  {
    path: 'getCargo',
    component: LeerCargoComponent,
    data: { title: 'Cargo específico' }
  },
  {
    path: 'modificarCargo',
    component: ActualizarCargoComponent,
    data: { title: 'Actualizar cargo' }
  },
  {
    path: 'borrarCargo',
    component: EliminarCargoComponent,
    data: { title: 'Eliminar Cargo' }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
