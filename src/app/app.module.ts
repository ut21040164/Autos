import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Servicios
import { ScriptsService } from "./scripts.service"
// Fin servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ModelosComponent } from './modelos/modelos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    DireccionesComponent,
    ServicioComponent,
    ModelosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
