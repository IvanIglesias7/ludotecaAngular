import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContenedorComponent } from './Vistas/Juegos/contenedor/contenedor.component';
import { ListaComponent } from './Vistas/Juegos/lista/lista.component';
import { DetalleComponent } from './Vistas/Juegos/detalle/detalle.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorComponent,
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
