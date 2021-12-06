import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrearCargoComponent } from './components/crear-cargo/crear-cargo.component';
import { LeerCargoComponent } from './components/leer-cargo/leer-cargo.component';
import { ActualizarCargoComponent } from './components/actualizar-cargo/actualizar-cargo.component';
import { EliminarCargoComponent } from './components/eliminar-cargo/eliminar-cargo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrearCargoComponent,
    LeerCargoComponent,
    ActualizarCargoComponent,
    EliminarCargoComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    ReactiveFormsModule, BrowserAnimationsModule, 
    MatIconModule, 
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
